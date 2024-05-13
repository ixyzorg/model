import request from '@/utils/request'
export const userLoginService = (data) => {
  return request.post('/login', data)
}
