import SlashTitle from '@/components/SlashTitle'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const CommunityPlan: React.FC = () => {
  const { t } = useTranslation()

  const contentData = useMemo(
    () => [
      {
        title: t('community_plan_title1'),
        children: [
          {
            subtitle: t('community_plan_subtitle1'),
            content: [
              t('community_plan_part1_text1'),
              t('community_plan_part1_text2'),
              t('community_plan_part1_text3'),
              t('community_plan_part1_text4'),
              t('community_plan_part1_text5')
            ]
          },
          {
            subtitle: t('community_plan_subtitle2'),
            content: [t('community_plan_part2_text1'), t('community_plan_part2_text2'), t('community_plan_part2_text3'), t('community_plan_part2_text4')]
          },
          { subtitle: t('community_plan_subtitle3'), content: [t('community_plan_part3_text1'), t('community_plan_part3_text2')] }
        ]
      },
      {
        title: t('community_plan_title2'),
        children: [
          {
            subtitle: '',
            content: [
              t('community_plan_part4_text1'),
              t('community_plan_part4_text1_1'),
              t('community_plan_part4_text2'),
              t('community_plan_part4_text2_1'),
              t('community_plan_part4_text3'),
              t('community_plan_part4_text3_1'),
              t('community_plan_part4_text4'),
              t('community_plan_part4_text4_1')
            ]
          }
        ]
      }
    ],
    [t]
  )

  return (
    <div className="content-container">
      <div className={`content-wrap-s ${style['plan']}`}>
        <SlashTitle title={t('community_plan_slash_title')} />
        {contentData.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
            {item.children.map((item, index) => (
              <div key={index}>
                <div>{item?.subtitle}</div>
                {item.content.map((item, index) => (
                  <div key={index} className="content-p">
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommunityPlan
