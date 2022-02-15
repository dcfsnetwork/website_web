import SlashTitle from '@/components/SlashTitle'
import IllustrationImg from '@img/home/illustration_2.png'
import StarImg from '@img/home/star.png'
import { useCallback, useMemo } from 'react'
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'react-i18next'
import style from './index.module.scss'

const PartTwo: React.FC = () => {
  const { t } = useTranslation()

  const getStarIcon = useCallback((width, className = '') => <img className={className} width={width} src={StarImg} alt="star" />, [])

  const fileSystemContent = useMemo(
    () => (
      <div>
        <SlashTitle type="white" title="DCFS" subTitle="( Distributed Computing File System )" />
        <div className="content-p">{t('distributed_content1')}</div>
        <div className="content-p">{t('distributed_content2')}</div>
      </div>
    ),
    [t]
  )

  const functionalAdvantagesContent = useMemo(
    () => (
      <div>
        <SlashTitle type="blue" title={t('functional_advantages')} />
        <div className="content-p">{t('functional_advantages_content1')}</div>
        <div className="content-p">{t('functional_advantages_content2')}</div>
        <div className="content-p">{t('functional_advantages_content3')}</div>
        <div className="content-p">{t('functional_advantages_content4')}</div>
        <div className="content-p">{t('functional_advantages_content5')}</div>
      </div>
    ),
    [t]
  )

  return (
    <>
      {isMobile ? (
        <>
          <div className={`content-container ${style['mobile-content-top']}`}>
            {getStarIcon(60)}
            {getStarIcon(20)}
            <div className="content-wrap">{fileSystemContent}</div>
          </div>
          <div className={`content-container ${style['mobile-content-bottom']}`}>
            {getStarIcon(40)}
            {getStarIcon(20)}
            <img width={140} src={IllustrationImg} alt="illustration_2" />
            <div className="content-wrap">{functionalAdvantagesContent}</div>
          </div>
        </>
      ) : (
        <div className={`content-container ${style['content']}`}>
          <img width={280} className={style['illustration-img']} src={IllustrationImg} alt="illustration_2" />
          {getStarIcon(40, style['star-normal-img'])}
          {getStarIcon(120, style['star-middle-img'])}
          {getStarIcon(160, style['star-large-img'])}
          <div className={`content-wrap ${style['content-wrap']}`}>
            {fileSystemContent}
            {functionalAdvantagesContent}
          </div>
        </div>
      )}
    </>
  )
}

export default PartTwo
