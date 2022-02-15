import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'
import ThreeTable from './ThreeTable'

const ExplorePlan: React.FC = () => {
  const { t } = useTranslation()
  const Data = useMemo(
    () => [
      [
        {
          title: t('explore_plan_time1'),
          text: t('explore_plan_text1')
        },
        {
          title: t('explore_plan_time2'),
          text: t('explore_plan_text2')
        }
      ],
      [
        {
          title: t('explore_plan_time3'),
          text: t('explore_plan_text3')
        },
        {
          title: t('explore_plan_time4'),
          text: t('explore_plan_text4')
        }
      ],
      [
        {
          title: t('explore_plan_time5'),
          text: t('explore_plan_text5')
        },
        {
          title: t('explore_plan_time6'),
          text: t('explore_plan_text6')
        }
      ],
      [
        {
          title: t('explore_plan_time7'),
          text: t('explore_plan_text7')
        },
        {
          title: t('explore_plan_time8'),
          text: t('explore_plan_text8')
        }
      ],
      [
        {
          title: t('explore_plan_time9'),
          text: t('explore_plan_text9')
        },
        {
          title: t('explore_plan_time10'),
          text: t('explore_plan_text10')
        }
      ],
      [
        {
          title: t('explore_plan_time11'),
          text: t('explore_plan_text11')
        },
        {
          title: t('explore_plan_time12'),
          text: t('explore_plan_text12')
        }
      ],
      [
        {
          title: t('explore_plan_time13'),
          text: t('explore_plan_text13')
        },
        {
          title: t('explore_plan_time14'),
          text: t('explore_plan_text14')
        }
      ],
      [
        {
          title: t('explore_plan_time15'),
          text: t('explore_plan_text15')
        }
      ]
    ],
    [t]
  )
  return (
    <div className="content-container">
      <div className={`content-wrap ${style['table']}`}>
        <div className="content-title">
          {t('explore_plan_title1')}
          <span style={{ color: '#1941E3' }}>·</span>
          {t('explore_plan_title2')}
        </div>
        <ThreeTable data={Data} />
      </div>
    </div>
  )
}

export default ExplorePlan
