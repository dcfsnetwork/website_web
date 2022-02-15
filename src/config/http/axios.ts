import { message } from 'antd'
import axios from 'axios'

axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASE_URL

const STATUS_CODE = { SUCCESS: 200, ERROR: 500 }

const ERROR_MSG = '网络异常，请稍后再试'

let reqNum: number = 0 //请求总次数
let errCode: number | null = null //报错码
let errMsg: string = ''

const reqHandler = (type: 'add' | 'minus' = 'add') => {
  'add' === type ? ++reqNum : --reqNum
}

// 全部接口结束 统一报错（防止重复报错）
const showErrorMsg = () => {
  reqHandler('minus')
  if (0 === reqNum) {
    errorCodeHandler()
  }
}

const errorCodeHandler = () => {
  if (errCode) {
    message.error(errMsg || ERROR_MSG)
    errMsg = ''
    errCode = null
  }
}

axios.interceptors.response.use(res => {
  if (STATUS_CODE.SUCCESS === res.status) {
    const data = res.data
    if (data?.err_code && 0 !== data?.err_code) {
      errCode = data?.err_code
      errMsg = data?.err_msg
      return Promise.reject(errMsg)
    }
  } else {
    return Promise.reject(res)
  }
  return res.data
})

function axiosHandler(type: 'get' | 'post' | 'put' | 'delete' = 'get') {
  return async function (url: string, params = {}) {
    if (!url) return
    reqHandler()
    try {
      const res = await axios[type](`/admin/${url}`, params)
      showErrorMsg()
      return Promise.resolve(res)
    } catch (err) {
      showErrorMsg()
      return Promise.reject(err)
    }
  }
}

export const _get = axiosHandler()

export const _post = axiosHandler('post')

export const _put = axiosHandler('put')

export const _delete = axiosHandler('delete')
