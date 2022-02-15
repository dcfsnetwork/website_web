import SlashTitle from '@/components/SlashTitle'
import IllustrationImg from '@img/home/illustration_3.png'
import BlueStarIcon from '@img/home/star_blue.png'
import GreenStarIcon from '@img/home/star_green.png'
import OrangeStarIcon from '@img/home/star_orange.png'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const PartThree: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="content-container">
      <div className={`content-wrap ${style['content-wrap']}`}>
        {isMobile && (
          <>
            <img width={20} src={OrangeStarIcon} alt="illustration_3" />
            <img width={20} src={OrangeStarIcon} alt="illustration_3" />
            <img width={20} src={BlueStarIcon} alt="illustration_3" />
            <img width={80} src={GreenStarIcon} alt="illustration_3" />
          </>
        )}
        <img width={370} src={IllustrationImg} alt="illustration_3" />
        <div>
          <SlashTitle title={t('solve_problem')} />
          <div className="content-p">{t('solve_problem_content1')}</div>
          <div className="content-p">{t('solve_problem_content2')}</div>
        </div>
      </div>
    </div>
  )
}

export default PartThree
