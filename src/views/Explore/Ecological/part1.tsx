import SlashTitle from '@/components/SlashTitle'
import { useTranslation } from 'react-i18next'
import ExploreBg from '@img/explore/ecological_bg1.png'
import ExploreBg_m from '@img/explore/ecological_bg4.png'
import Icon from '@img/explore/icon.png'
import style from './index.module.scss'
import { useMemo } from 'react'

const PartOne: React.FC = () => {
  const { t } = useTranslation()

  const partOneData = useMemo(
    () => [
      {
        title: t('explore_exological_partone_subtitle1'),
        text: t('explore_exological_partone_text1')
      },
      {
        title: t('explore_exological_partone_subtitle2'),
        text: t('explore_exological_partone_text2')
      },
      {
        title: t('explore_exological_partone_subtitle3'),
        text: t('explore_exological_partone_text3')
      },
      {
        title: t('explore_exological_partone_subtitle4'),
        text: t('explore_exological_partone_text4')
      }
    ],
    [t]
  )

  return (
    <div className="content-container">
      <img className={style['exploreBg']} src={ExploreBg} alt="ExploreBg" />
      <img className={style['exploreBg_m']} src={ExploreBg_m} alt="ExploreBg_m" />
      <div className={`content-wrap ${style['partOne']}`}>
        <SlashTitle title={t('explore_exological_partone_title')} />
        <div>
          {partOneData.map((item, index) => (
            <div key={index}>
              <div>
                <img src={Icon} alt="Icon" />
                <span>{item.title}</span>
              </div>
              <div className="content-p">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartOne
