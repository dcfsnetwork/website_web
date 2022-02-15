import { _post } from './axios'

// 订阅邮件
export const _subscribeEmail = (user: string, email: string) => {
  return _post('create_emailsubscription', { user, email })
}

// 获取活动列表
export const _getNews = (pageNum: number, pageSize = 10) => {
  return _post('list_informations', { page: pageNum, count: pageSize })
}

// 获取活动详情
export const _getNewsDetail = (id: any) => {
  return _post('get_information', { id })
}

// 订阅邮件
export const _contactUs = (data: any) => {
  return _post('create_comment', data)
}

// 获取img base64
export const _getImg = async (image_id: string) => {
  try {
    const { base64_image }: any = await _post('fetch_image', { image_id })
    return base64_image
  } catch (error) {
    return ''
  }
}
