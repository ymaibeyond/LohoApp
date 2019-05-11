/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
 //const BASE_URL = 'http://localhost:52706/api'
const BASE_URL = '/api'

// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd}) => ajax(BASE_URL+'/Login/login_pwd', {name, pwd})
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/Login/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/Login/login_sms', {phone, code})
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')


