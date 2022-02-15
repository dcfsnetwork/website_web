import { _contactUs } from '@/config/http'
import { Button, Form, Input, message, Select } from 'antd'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { generate } from 'shortid'
import BG1 from '@/assets/imgs/about_us/bg1.png'
import BG2 from '@/assets/imgs/about_us/bg2.png'
import style from './index.module.scss'

const { TextArea } = Input
const { Option } = Select

const AboutUs: React.FC = () => {
  const { t } = useTranslation()
  const [form] = Form.useForm()

  const regionData = useMemo(
    () => [
      t('about_form_region1'),
      t('about_form_region2'),
      t('about_form_region3'),
      t('about_form_region4'),
      t('about_form_region5'),
      t('about_form_region6'),
      t('about_form_region7'),
      t('about_form_region8')
    ],
    [t]
  )

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await _contactUs(data)
        message.success(t('submit_success'))
        form.resetFields()
      } catch (error) {
        throw error
      }
    },
    [form, t]
  )

  return (
    <div className="content-container">
      <img className={style['bg1']} src={BG1} alt="" />
      <img className={style['bg2']} src={BG2} alt="" />
      <div className={`content-wrap ${style['content-wrap']}`}>
        <div className={style['title-wrap']}>
          <div>{t('about_contact_title')}</div>
          <div>{t('about_contact_subtitle1')}</div>
          <div>{t('about_contact_text1')}</div>
          <div>{t('about_contact_text2')}</div>
          <div>{t('about_contact_subtitle2')}</div>
        </div>
        <div className={style['form-wrap']}>
          <Form form={form} onFinish={onSubmit} layout="vertical" autoComplete="off">
            <Form.Item name="user" label={t('about_form_title1')} rules={[{ required: true, message: t('about_form_title1_tip') }]}>
              <Input size="large" maxLength={50} />
            </Form.Item>
            <Form.Item name="email" label={t('about_form_title2')} rules={[{ required: true, message: t('about_form_title2_tip') }]}>
              <Input size="large" type="email" />
            </Form.Item>
            <Form.Item name="location" label={t('about_form_title3')} rules={[{ required: true, message: t('about_form_title3_tip') }]}>
              <Select size="large">
                {regionData.map(data => (
                  <Option key={generate()} value={data}>
                    {data}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="title" label={t('about_form_title4')} rules={[{ required: true, message: t('about_form_title4_tip') }]}>
              <Input size="large" />
            </Form.Item>
            <Form.Item name="body" label={t('about_form_title5')}>
              <TextArea rows={8} />
            </Form.Item>
            <Form.Item>
              <Button style={{ width: '100%', height: '48px' }} size="large" type="primary" htmlType="submit">
                {t('submit')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
