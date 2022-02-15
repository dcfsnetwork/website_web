import SlashTitle from '@/components/SlashTitle'
import { RightOutlined } from '@ant-design/icons'
import IllustrationImg from '@img/home/illustration_4.png'
import Star1 from '@img/home/staricon1.png'
import Star2 from '@img/home/staricon2.png'
import Star3 from '@img/home/staricon3.png'
import { ReactComponent as BigDataIcon } from '@svg/big_data.svg'
import { ReactComponent as LowCostIcon } from '@svg/low_cost.svg'
import { ReactComponent as LowLatencyIcon } from '@svg/low_latency.svg'
import { ReactComponent as MassiveDataIcon } from '@svg/massive_data.svg'
import { ReactComponent as OperationIcon } from '@svg/operation.svg'
import { ReactComponent as PrivacyIcon } from '@svg/privacy.svg'
import { ReactComponent as SynergyOptimizationIcon } from '@svg/synergy_optimization.svg'
import { useCallback, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import { generate } from 'shortid'
import style from './index.module.scss'

const menuData = [
  { SvgIcon: LowCostIcon, iconWidth: isMobile ? 30 : 40, title: 'low_cost', content: 'low_cost_content' },
  { SvgIcon: LowLatencyIcon, iconWidth: isMobile ? 24 : 34, title: 'low_latency', content: 'low_latency_content' },
  { SvgIcon: MassiveDataIcon, iconWidth: isMobile ? 26 : 36, title: 'massive_data', content: 'massive_data_content' },
  { SvgIcon: BigDataIcon, iconWidth: isMobile ? 28 : 38, title: 'big_data', content: 'big_data_content' },
  { SvgIcon: PrivacyIcon, iconWidth: isMobile ? 26 : 36, title: 'privacy', content: 'privacy_content' },
  { SvgIcon: SynergyOptimizationIcon, iconWidth: isMobile ? 26 : 36, title: 'synergy_optimization', content: 'synergy_optimization_content' },
  { SvgIcon: OperationIcon, iconWidth: isMobile ? 26 : 36, title: 'operation', content: 'operation_content' }
]

const PartFour: React.FC = () => {
  const { t } = useTranslation()
  const [activeMenuIndex, setActiveMenuIndex] = useState(0)

  const getTitleColor = useCallback(index => (activeMenuIndex === index ? '#00c697' : '#0e0e0e'), [activeMenuIndex])

  return (
    <div className="content-container">
      {!isMobile && (
        <>
          <img src={Star1} alt="star" className={style['icon1']} />
          <img src={Star1} alt="star" className={style['icon2']} />
          <img src={Star2} alt="star" className={style['icon3']} />
          <img src={Star3} alt="star" className={style['icon4']} />
          <img className={style['illustration-img']} src={IllustrationImg} alt="illustration_4" />
        </>
      )}
      <div className={`content-wrap ${style['content-wrap']}`}>
        <div>
          <SlashTitle title={t('project_characterist')} />
          <div className="content-p">{t('project_characterist_content1')}</div>
        </div>
        <div>
          {menuData.map(({ SvgIcon, iconWidth, title, content }: any, index) => (
            <div className={style['menu-item']} key={generate()}>
              <div
                onClick={() => {
                  setActiveMenuIndex(index)
                }}>
                <div className={style['icon-wrap']}>
                  <div className={style['img-wrap']}>
                    <SvgIcon
                      className={activeMenuIndex === index ? style['active-svg'] : style['normal-svg']}
                      width={iconWidth}
                      height={isMobile ? '30px' : ''}
                    />
                  </div>
                  <span style={{ color: getTitleColor(index) }}>{t(title)}</span>
                </div>
                <RightOutlined style={{ fontSize: isMobile ? '12px' : '18px', color: getTitleColor(index) }} rotate={activeMenuIndex === index ? 90 : 0} />
              </div>
              {activeMenuIndex === index && <div className="content-p">{t(content)}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartFour
