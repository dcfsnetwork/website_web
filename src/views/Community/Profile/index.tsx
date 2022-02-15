import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const CommunityProfile: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="content-container">
      <div className="content-wrap-s">
        <div className={`content-title ${style['title']}`}>{t('community_profile_title')}</div>
        <div className={style['text']}>{t('community_profile_subtitle')}</div>
        <div className={style['line']}></div>
        <div className={style['bottom']}>
          <div className="content-p">{t('community_profile_text1')}</div>
          <div className="content-p">{t('community_profile_text2')}</div>
          <div className="content-p">{t('community_profile_text3')}</div>
          <div className="content-p">
            {t('community_profile_text4')}
            <a href="https://t.me/DCC_CHA666" target="_blank" rel="noopener noreferrer">
              https://t.me/DCC_CHA666
            </a>
          </div>
          <div className="content-p">
            {t('community_profile_text5')}
            <a href="https://t.me/DCCchain" target="_blank" rel="noopener noreferrer">
              https://t.me/DCCchain
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityProfile
