import { _getNewsDetail } from '@/config/http'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import style from './index.module.scss'

const CommunityActivitiesDetail: React.FC = () => {
  const { t } = useTranslation()
  const { id }: any = useParams()

  const [detailData, setDetailData] = useState<any>({})

  const getNewsDetail = useCallback(async () => {
    try {
      const data: any = await _getNewsDetail(id)
      data.time = dayjs(data.issuetime * 1000).format('YYYY-MM-DD HH:mm')
      setDetailData(data)
    } catch (error) {
      throw error
    }
  }, [id])

  useEffect(() => {
    getNewsDetail()
  }, [getNewsDetail])

  return (
    <div className="content-container">
      <div className="content-wrap">
        <div className={style['content-wrap']}>
          <div className={style['title']}>{detailData.title}</div>
          <div className={style['time']}>
            {t('release_time')}
            {detailData.time}
          </div>
          <div className={style['content']} dangerouslySetInnerHTML={{ __html: detailData.body }}></div>
        </div>
      </div>
    </div>
  )
}

export default CommunityActivitiesDetail
