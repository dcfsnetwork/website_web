import BlueSlash from '@img/icons/slash_blue.png'
import GreenSlash from '@img/icons/slash_green.png'
import WhiteSlash from '@img/icons/slash_white.png'
import style from './index.module.scss'

const TEXT_COLOR = {
  black: { color: '#0e0e0e', icon: GreenSlash },
  white: { color: '#fff', icon: WhiteSlash },
  blue: { color: '#0e0e0e', icon: BlueSlash }
}

const SlashTitle: React.FC<{ title: string; subTitle?: string; type?: 'black' | 'white' | 'blue' }> = ({ title, subTitle, type = 'black' }) => {
  return (
    <div className={style['slash-wrap']} style={{ color: TEXT_COLOR[type].color }}>
      <img src={TEXT_COLOR[type].icon} alt="slash" />
      <div className="content-title">{title}</div>
      {subTitle && <div className={style['subtitle']}>{subTitle}</div>}
    </div>
  )
}

export default SlashTitle
