import { ROUTES } from '@/config/constant'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const DevelopersLaboratory: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="content-container">
      <div className={`content-wrap-s ${style['laboratory']}`}>
        <div className="content-title">{t('developers_laboratory_title')}</div>
        <div className="content-p">{t('developers_laboratory_content')}</div>
        <div>
          <a href={ROUTES.DCFS_LICENSE} target="_blank" rel="noreferrer">
            {t('developers_laboratory_btn')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default DevelopersLaboratory
