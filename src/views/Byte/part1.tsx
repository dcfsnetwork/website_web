import SlashTitle from '@/components/SlashTitle'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const PartOne: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={`content-container ${style['part_one']}`}>
      <div></div>
      <div>
        <div></div>
      </div>
      <div className="content-wrap">
        <SlashTitle title={t('byte_title1')} />
        <div className="content-p">{t('byte_text')}</div>
      </div>
    </div>
  )
}

export default PartOne
