import { _subscribeEmail } from '@/config/http'
import LIcon from '@img/share/l.png'
import MIcon from '@img/share/m.png'
import RIcon from '@img/share/r.png'
import TIcon from '@img/share/t.png'
import TelIcon from '@img/share/tel.png'
import UIcon from '@img/share/u.png'
import TumIcon from '@img/share/tumblr.png'
import { Input, message } from 'antd'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { generate } from 'shortid'
import { useLocation } from 'react-router-dom'
import style from './index.module.scss'
import { ROUTES } from '@/config/constant'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const shareIcons = useMemo(
    () => [
      { src: MIcon, to: 'https://medium.com/@DCFS' },
      { src: RIcon, to: 'https://www.reddit.com/r/DCFSOfficial/' },
      { src: UIcon, to: 'https://www.youtube.com/channelUCDttKHLLu6f0uOzNSBnxG-A' },
      { src: TIcon, to: 'https://twitter.com/DCFSOfficial' },
      { src: LIcon, to: 'https://www.linkedin.com/in/dcfsofficial' },
      { src: TumIcon, to: 'https://dcfsofficial.tumblr.com/' },
      { src: TelIcon, to: 'https://t.me/DCCchain' }
    ],
    []
  )

  const onSubscribe = useCallback(async () => {
    if (!name || !email) {
      message.error(t('fill_tip'))
      return
    }
    if (!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email)) {
      message.error(t('error_email'))
      return
    }
    try {
      await _subscribeEmail(name, email)
      message.success(t('submit_success'))
      setName('')
      setEmail('')
    } catch (error) {
      throw error
    }
  }, [email, name, t])

  return (
    <div className={pathname === ROUTES.HOME ? style['footer-wrap-g'] : style['footer-wrap-w']}>
      <div className="content-title">{t('to_subscribe')}</div>
      <div>{t('receive_updates')}</div>
      <div className={style['input-wrap']}>
        <Input
          placeholder={t('enter_name')}
          size="large"
          value={name}
          maxLength={50}
          onChange={({ target }) => {
            setName(target.value)
          }}
        />
        <Input
          placeholder={t('enter_email')}
          size="large"
          value={email}
          type="email"
          onChange={({ target }) => {
            setEmail(target.value)
          }}
        />
      </div>
      <div className={style['subscribe-btn']} onClick={onSubscribe}>
        {t('to_subscribe_split')}
      </div>
      <div>{t('email_address')}: DCFS.chain@gmail.com</div>
      <div className={style['share-wrap']}>
        {shareIcons.map(({ src, to }) => (
          <a key={generate()} href={to} target="_blank" rel="noreferrer">
            <img src={src} alt="m" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
