import SlashTitle from '@/components/SlashTitle'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const PartTwo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="content-container">
      <div className={`content-wrap ${style['partTwo']}`}>
        <SlashTitle title={t('explore_exological_parttwo_title')} />
        <div>{t('explore_exological_parttwo_text1')}</div>
        <div>
          <div>
            <div>{t('explore_exological_parttwo_subtitle1')}</div>
            <div></div>
            <div>{t('explore_exological_parttwo_text2')}</div>
          </div>
          <div>
            <div>{t('explore_exological_parttwo_subtitle2')}</div>
            <div></div>
            <div>{t('explore_exological_parttwo_text3')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartTwo
