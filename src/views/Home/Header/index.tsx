import { ROUTES } from '@/config/constant'
import LeftQuotation from '@img/icons/quotation_left.png'
import RightQuotation from '@img/icons/quotation_right.png'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="content-container">
      <div className="content-wrap">
        <div className={style['title']}>
          <img width={32.5} src={LeftQuotation} alt="quotation_left" />
          <span>DCFS</span>
          <img width={32.5} src={RightQuotation} alt="quotation_right" />
        </div>
        <div className={style['subtitle']}>{t('title_1')}</div>
        <div className={style['sub-subtitle']}>{t('title_2')}</div>
        <div className={style['start-btn']}>
          <a className="normal-btn" href={ROUTES.DCFS_DOCS} style={{ color: '#F9FAFB' }} target="_blank" rel="noreferrer">
            {t('start_building')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
