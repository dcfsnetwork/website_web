import enUsTrans from '@/config/i18n/locales/en-us.json'
import zhCnTrans from '@/config/i18n/locales/zh-cn.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const LANG_DATA: any = {
  EN: 'English',
  ZH: '简体中文'
}

i18n.use(initReactI18next).init({
  resources: { [LANG_DATA.EN]: { translation: enUsTrans }, [LANG_DATA.ZH]: { translation: zhCnTrans } },
  fallbackLng: LANG_DATA.EN,
  debug: false,
  interpolation: { escapeValue: false }
})

export default i18n
