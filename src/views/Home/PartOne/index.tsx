import SlashTitle from '@/components/SlashTitle'
import IllustrationImg from '@img/home/illustration_1.png'
import MobileIllustrationImg from '@img/home/illustration_1_2.png'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const PartOne: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div style={{ paddingBottom: isMobile ? 0 : '' }} className="content-container">
      <div className="content-wrap">
        <SlashTitle title={t('current_status')} />
        <div className={`content-p ${style['content-width']}`}>{t('current_status_content1')}</div>
        <div className={`content-p ${style['content-width']}`}>{t('current_status_content2')}</div>
      </div>
      <img className={style['illustration-img']} src={isMobile ? MobileIllustrationImg : IllustrationImg} alt="illustration_1" />
    </div>
  )
}

export default PartOne
