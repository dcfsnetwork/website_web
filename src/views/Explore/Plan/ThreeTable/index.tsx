import style from './index.module.scss'
import { isMobile } from 'react-device-detect'

interface ThreeProps {
  data: any
}

const ThreeTable: React.FC<ThreeProps> = ({ data }) => {
  const ThreeItem: React.FC<ThreeProps> = ({ data }) => {
    return (
      <>
        {data ? (
          <div className={style['item']}>
            <div>{data.title}</div>
            <div>{data.text}</div>
          </div>
        ) : null}
      </>
    )
  }

  const height = (index: any, data: any) => {
    if (data[data.length - 1].length === 2 && index === data.length - 1) {
      return '0px'
    } else if (data[data.length - 1].length === 1 && index === data.length - 2) {
      return '123px'
    } else {
      return '190px'
    }
  }

  return (
    <>
      {data.map((item: any, index: any) => (
        <div className={item[1] ? style['list'] : style['single']} key={index}>
          <>
            <ThreeItem data={item[0]} />
            {item.length > 1 ? (
              <div className={style['line']}>
                <div></div>
                <div style={{ height: isMobile ? '200px' : height(index, data) }}></div>
              </div>
            ) : null}
            <ThreeItem data={item[1]} />
          </>
        </div>
      ))}
    </>
  )
}

export default ThreeTable
