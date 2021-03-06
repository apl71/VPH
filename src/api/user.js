import request from '@/utils/request.js'

export const register = data => {
    return request({
        method: 'POST',
        url: 'vph/user/register',
        data
    })
}

export const login = data => {
    return request({
        method: 'POST',
        url: 'vph/user/login',
        data
    })
}