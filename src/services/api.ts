import type {
  ActionsResponse,
  Methods,
  Prize,
  Reward,
  RewardsResponse,
  Task,
  TaskAction,
  User
} from '@/types/api'
import { getStartParamByKey } from '@/utils'
import WebApp from '@twa-dev/sdk'

const API_URL = 'https://api.giftica.space'
const REFERRAL_CODE = getStartParamByKey({
  startParam: WebApp.initDataUnsafe.start_param,
  key: 'ref_'
})

export const customFetch = async <Data extends object = {}>({
  endpoint,
  params,
  method = 'GET',
  body,
  headers = {}
}: {
  endpoint: string
  params?: Record<string, string>
  method?: Methods
  body?: string | FormData
  headers?: Record<string, string>
}): Promise<Data> => {
  try {
    const queryParams = new URLSearchParams({
      ...params,
      ref: REFERRAL_CODE ?? ''
    }).toString()
    const response = await fetch(`${API_URL}${endpoint}?${queryParams}`, {
      method,
      headers: {
        Authorization: `tma ${WebApp.initData}`,
        ...headers
      },
      ...(body && { body })
    })

    // 204 - No content
    if (response.status === 204 && method !== 'GET') {
      return {} as Data
    }

    const response_data: Data | Error = await response.json()
    if (!response.ok) {
      throw new Error(
        'message' in response_data
          ? response_data?.message
          : 'Something went wrong'
      )
    }

    return response_data as Data
  } catch (error) {
    if (error instanceof Error) throw error
    throw new Error('Something went wrong')
  }
}

export const getMe = () => {
  return customFetch<User>({ endpoint: '/user/me' })
}

export const getPrizes = () => {
  return customFetch<Prize[]>({ endpoint: '/prizes' })
}

export const getLottie = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

export const spin = () => {
  return customFetch<Reward>({ endpoint: '/roulette/spin', method: 'POST' })
}

export const getRewards = (page: number = 1) => {
  return customFetch<RewardsResponse>({
    endpoint: '/rewards/me',
    params: { page: page.toString() }
  })
}

export const sellReward = (id: string) => {
  return customFetch<User>({
    endpoint: `/rewards/${id}/sell`,
    method: 'POST'
  })
}

export const withdrawReward = (id: string) => {
  return customFetch<User>({
    endpoint: `/rewards/${id}/withdraw`,
    method: 'POST'
  })
}

export const getTasks = () => {
  return customFetch<Task[]>({ endpoint: '/tasks' })
}

export const getInvoiceLink = (amount: number) => {
  return customFetch<{ invoiceLink: string }>({
    endpoint: `/transactions/deposit`,
    method: 'POST',
    body: JSON.stringify({ amount }),
    headers: { 'Content-Type': 'application/json' }
  })
}

export const withdrawStars = (quantity: number) => {
  return customFetch({
    endpoint: `/transactions/withdraw`,
    method: 'POST',
    body: JSON.stringify({ quantity: quantity }),
    headers: { 'Content-Type': 'application/json' }
  })
}

export const getActions = (page: number = 1) => {
  return customFetch<ActionsResponse>({
    endpoint: '/actions',
    params: { page: page.toString() }
  })
}

export const checkTask = (code: string) => {
  return customFetch<Pick<Task, 'isCompleted' | 'isClaimed'>>({
    endpoint: `/tasks/${code}/check`,
    method: 'POST'
  })
}

export const claimTask = (code: string) => {
  return customFetch<TaskAction>({
    endpoint: `/tasks/${code}/claim`,
    method: 'POST'
  })
}

export const auth = () => {
  return customFetch<User>({ endpoint: '/user/auth' })
}
