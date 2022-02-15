import SlashTitle from '@/components/SlashTitle'
import { ROUTES } from '@/config/constant'
import { _getImg, _getNews } from '@/config/http'
import { Pagination } from 'antd'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { generate } from 'shortid'
import style from './index.module.scss'

const pageSize = 10

const CommunityActivities: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const [newsData, setNewsData] = useState<any>([])
  const [total, setTotal] = useState(0)
  const [pageNum, setPageNum] = useState(1)

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  const paginationItem = useCallback((_current, type, originalElement) => (['prev', 'next'].includes(type) ? <a>{t(type)}</a> : originalElement), [t])

  const getNews = useCallback(async () => {
    try {
      const { infoList, totalCount }: any = await _getNews(pageNum, pageSize)
      await Promise.all(
        infoList.map(async (data: any) => {
          data.pic = await _getImg(data.picId)
          data.time = dayjs(data.issuetime * 1000).format('YYYY-MM-DD HH:mm')
        })
      )
      setTotal(totalCount)
      setNewsData(infoList)
    } catch (error) {
      throw error
    }
  }, [pageNum])

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <div className="content-container">
      <div className={`content-wrap ${style['content-wrap']}`}>
        <SlashTitle title={t('activity_column')} />
        <div className={style['news-wrap']}>
          {newsData.map(({ id, pic, title, time }: any) => (
            <div
              className={style['news-card']}
              key={generate()}
              onClick={() => {
                history.push(ROUTES.GET_COMMUNITY_ACTIVITIES_DETAIL_ROUTE(id))
              }}>
              <img src={pic} alt="cover" />
              <div>
                <div className={style['news-title']}>{title}</div>
                <div className={style['news-time']}>
                  {t('release_time')}
                  {time}
                </div>
              </div>
            </div>
          ))}
          <Pagination
            className={style['pagination-wrap']}
            current={pageNum}
            pageSize={pageSize}
            total={total}
            itemRender={paginationItem}
            onChange={page => {
              setPageNum(page)
            }}
            simple
            hideOnSinglePage
          />
        </div>
      </div>
    </div>
  )
}

export default CommunityActivities
