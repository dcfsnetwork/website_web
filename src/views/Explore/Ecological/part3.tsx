import Tabs from '@/views/Explore/Ecological/Tabs'
import style from './index.module.scss'
import FreeSwap from '@/assets/imgs/explore/free_swap.png'
import DefiPool from '@/assets/imgs/explore/defi_pool.png'
import Dcc from '@/assets/imgs/explore/dcc.png'
import SlashTitle from '@/components/SlashTitle'
import { useTranslation } from 'react-i18next'

const PartThree: React.FC = () => {
  const { t } = useTranslation()
  const data = {
    icon: [FreeSwap, Dcc, DefiPool],
    content: [
      {
        href: 'http://www.freeswap.info/#/',
        title: t('explore_exological_freeswap_title'),
        text: t('explore_exological_freeswap_text')
      },
      {
        links: [
          { name: t('explore_exological_defipool_btn1'), href: 'http://dcc.dcfs.finance/' },
          { name: t('explore_exological_defipool_btn2'), href: 'http://www.dcfs.info/' }
        ],
        title: t('explore_exological_defipool_title'),
        text: t('explore_exological_defipool_text')
      },
      {
        href: 'https://www.dcfsscan.io/bridge',
        title: t('explore_exological_dcc_title'),
        text: t('explore_exological_dcc_text')
      }
    ]
  }

  return (
    <div className="content-container">
      <div className={`content-wrap ${style['partThree']}`}>
        <SlashTitle title={t('explore_exological_partthree_title')} />
        <Tabs data={data} />
      </div>
    </div>
  )
}

export default PartThree
