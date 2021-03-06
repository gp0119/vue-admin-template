import service from '@/utils/request'

export function login(data: Record<string, unknown>) {
  return service.request({
    url: '/api/login',
    method: 'post',
    data,
  })
}

export function logout() {
  return service.request({
    url: '/api/logout',
    method: 'post',
  })
}

export function getInfo(id: number) {
  return service.request({
    url: `/api/users/${id}`,
    method: 'get',
  })
}
