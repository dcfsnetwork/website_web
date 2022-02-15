import { useState } from 'react'
import style from './index.module.scss'
import { useTranslation } from 'react-i18next'

interface TabsProps {
  data: {
    content: any
    icon: any
  }
}

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const [active, setActive] = useState<number>(0)
  const { t } = useTranslation()

  return (
    <div className={style['tabs']}>
      <div>
        {data.icon.map((item: any, index: any) => (
          <div
            key={index}
            onClick={() => {
              setActive(index)
            }}
            style={{ border: active === index ? '2px solid #00c697' : '', boxShadow: active === index ? '0 1px 2px 3px #00000029' : '' }}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
      <div></div>
      <div className="content-title">{data.content[active]?.title || null}</div>
      <div className="content-p">{data.content[active]?.text || null}</div>
      <div>
        {data.content[active]?.href ? (
          <a href={data.content[active]?.href || null} target={'_blank'} rel="noreferrer">
            {t('explore_exological_partthree_btn')}
          </a>
        ) : null}
        {data.content[active]?.links ? (
          <>
            {data.content[active]?.links.map((item: any, index: any) => (
              <div key={index}>
                <a href={item?.href} target="_blank" rel="noopener noreferrer">
                  {item?.name}
                </a>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Tabs
