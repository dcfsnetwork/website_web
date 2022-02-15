import { ROUTES } from '@/config/constant'
import { LANG_DATA } from '@/config/i18n'
import { CloseOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons'
import LogoIcon from '@img/logo.png'
import { Dropdown, Menu } from 'antd'
import i18n from 'i18next'
import { useCallback, useMemo, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { NavLink, useHistory } from 'react-router-dom'
import { generate } from 'shortid'
import style from './index.module.scss'

const Nav: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const [showMobileNav, setShowMobileNav] = useState(false)
  const [activeMobileMenu, setActiveMobileMenu] = useState<any>()

  const menuData = useMemo(
    () => [
      {
        name: t('menu_explore'),
        children: [
          { name: t('menu_explore_plan'), to: ROUTES.EXPLORE_PLAN },
          { name: t('menu_explore_ecological'), to: ROUTES.EXPLORE_ECOLOGICAL },
          { name: t('menu_explore_paper'), to: ROUTES.DCFS_WHITE_PAPER, isBlank: true }
        ]
      },
      {
        name: t('menu_developers'),
        children: [
          { name: t('menu_developers_laboratory'), to: ROUTES.DEVELOPERS_LABORATORY },
          { name: t('menu_developers_document'), to: ROUTES.DCFS_DOCS, isBlank: true },
          { name: t('menu_developers_browser'), to: ROUTES.BROWSER, isBlank: true }
        ]
      },
      { name: t('menu_byte'), to: ROUTES.BYTE },
      {
        name: t('menu_community'),
        children: [
          { name: t('menu_community_profile'), to: ROUTES.COMMUNITY_PROFILE },
          { name: t('menu_community_activities'), to: ROUTES.COMMUNITY_ACTIVITIES },
          { name: t('menu_community_plan'), to: ROUTES.COMMUNITY_PLAN }
        ]
      },
      {
        name: t('menu_about'),
        to: ROUTES.CONTACT_US
      }
    ],
    [t]
  )

  const mobileMenuData = useMemo(
    () => (0 === activeMobileMenu || activeMobileMenu ? menuData[activeMobileMenu].children : menuData),
    [activeMobileMenu, menuData]
  )

  const subMenuList = useCallback((menuData: any) => {
    return (
      <Menu>
        {menuData.map(({ name, to, isBlank = false }: { name: string; to: string; isBlank?: boolean }) => (
          <Menu.Item key={generate()}>
            {isBlank ? (
              <a href={to} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <NavLink key={to} to={to} exact>
                {name}
              </NavLink>
            )}
          </Menu.Item>
        ))}
      </Menu>
    )
  }, [])

  const i18nMenu = useMemo(
    () => (
      <Menu
        onClick={({ key }) => {
          i18n.changeLanguage(key)
        }}>
        {Object.keys(LANG_DATA).map(key => (
          <Menu.Item key={LANG_DATA[key]} className={i18n.language === LANG_DATA[key] ? 'primary-color' : ''}>
            {LANG_DATA[key]}
          </Menu.Item>
        ))}
      </Menu>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  )

  const mobileMenuList = useMemo(() => {
    return (
      <Menu>
        {mobileMenuData?.map(({ name, to, children, isBlank = false }: any, index) => (
          <Menu.Item
            key={generate()}
            onClick={() => {
              setShowMobileNav(false)
              setActiveMobileMenu('')
            }}>
            {children ? (
              <span
                onClick={e => {
                  setActiveMobileMenu(index)
                  e.stopPropagation()
                }}>
                {name}
              </span>
            ) : isBlank ? (
              <a href={to} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <NavLink key={to} to={to} exact>
                {name}
              </NavLink>
            )}
          </Menu.Item>
        ))}
      </Menu>
    )
  }, [mobileMenuData])

  return (
    <div className={style['menu-wrap']}>
      <div className={style['menu']}>
        <div
          className={style['icon-wrap']}
          onClick={() => {
            history.push(ROUTES.HOME)
          }}>
          <img width={44} src={LogoIcon} alt="logo" />
          <div>DCFS</div>
        </div>
        <div className={style['nav-wrap']}>
          {isMobile ? (
            <>
              <div
                className={style['mobile-i18n-wrap']}
                onClick={() => {
                  i18n.changeLanguage(i18n.language === LANG_DATA.EN ? LANG_DATA.ZH : LANG_DATA.EN)
                }}>
                <span className={i18n.language === LANG_DATA.EN ? 'text-color' : ''}>EN</span>
                <span>/</span>
                <span className={i18n.language === LANG_DATA.ZH ? 'text-color' : ''}>中</span>
              </div>
              <Dropdown
                overlay={mobileMenuList}
                overlayClassName="mobile-nav-dropdown"
                placement="bottomCenter"
                trigger={['click']}
                onVisibleChange={visible => {
                  setShowMobileNav(visible)
                }}>
                {showMobileNav ? (
                  <CloseOutlined style={{ fontSize: '22px' }} color="#0e0e0e" />
                ) : (
                  <MenuOutlined
                    style={{ fontSize: '22px' }}
                    color="#0e0e0e"
                    onClick={() => {
                      setActiveMobileMenu('')
                    }}
                  />
                )}
              </Dropdown>
            </>
          ) : (
            <>
              <nav>
                {menuData.map(({ name, to, children }) =>
                  children ? (
                    <Dropdown key={generate()} overlay={subMenuList(children)} overlayClassName="nav-dropdown nav-menu-dropdown" placement="bottomCenter">
                      <div>{name}</div>
                    </Dropdown>
                  ) : (
                    <NavLink key={to} to={to} exact>
                      {name}
                    </NavLink>
                  )
                )}
              </nav>
              <Dropdown overlay={i18nMenu} overlayClassName="nav-dropdown" placement="bottomCenter">
                <div className={style['i18n-btn']}>
                  <span>{i18n.language}</span>
                  <DownOutlined width={6} color="#34343d" />
                </div>
              </Dropdown>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
