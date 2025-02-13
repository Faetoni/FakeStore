import { forEach } from 'lodash'
import { useNotificatorStore } from '@/stores/notificator'
import { statuses } from '~/utils/constants/httpStatuses.js'

const config = useRuntimeConfig()

const resolve = argsArr => {
  if (argsArr?.length !== 2) {
    throw new Error('invalid argument type. Required [arg1, arg2]')
  }

  let build = argsArr[0]

  forEach(argsArr[1], (val, key) => {
    build = build.replace(`:${key}`, val)
  })

  return build
}

const createFetch = (baseURL, successMessage) => {
  return $fetch.create({
    baseURL,

    onRequest ({ options }) {
      const token = localStorage.getItem('access_token')

      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        'Cache-Control': 'no-cache'
      }
    },

    onResponse ({ response }) {
      const notificatorStore = useNotificatorStore()

      if (!successMessage) {
        return response._data
      }

      switch (response?.status) {
      case statuses.OK.code:
        return notificatorStore.notifySuccess(successMessage)

      default:
        return response._data
      }
    },

    onResponseError ({ response }) {
      const notificatorStore = useNotificatorStore()

      switch (response?.status) {
      case statuses.NOT_FOUND.code:
        return notificatorStore.notifyError(`${response._data.title ?? response.statusText ?? statuses.NOT_FOUND.text}`)

      case statuses.BAD_REQUEST.code:
        return notificatorStore.notifyError(`${response._data.title ?? response._data ?? response.statusText}`)

      case statuses.CONFLICT.code:
        return notificatorStore.notifyError(`${response._data.title ?? response._data ?? response.statusText}`)

      case statuses.FORBIDDEN.code:
      case statuses.UNAUTHORIZED.code:
        return notificatorStore.notifyError('Ошибка авторизации.')

      default:
        return notificatorStore.notifyError('Ошибка сервера.')
      }
    }
  })
}

class Provider {
  constructor (baseURL) {
    this._baseURL = baseURL
  }

  fetch (pathArgs, opts, customArgs) {
    return createFetch(customArgs?.baseURL || this._baseURL, customArgs?.successMessage)
      .call(this, typeof pathArgs === 'string' ? pathArgs : resolve(pathArgs), opts)
  }
}

export const provider = new Provider(config.public.BASE_URL)

export * as paths from './paths.js'
