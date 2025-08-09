import type { Methods, Prize, Reward, RewardsResponse, User } from '@/types/api'

const API_URL = 'http://localhost:8000'
const INIT_DATA =
  window.Telegram?.WebApp?.initData ?? import.meta.env.VITE_INIT_DATA

export const customFetch = async <Data extends object = {}>({
  endpoint,
  method = 'GET',
  body,
  headers = {}
}: {
  endpoint: string
  method?: Methods
  body?: string | FormData
  headers?: Record<string, string>
}): Promise<Data> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers: {
        Authorization: `tma ${INIT_DATA}`,
        ...headers
      },
      ...(body && { body })
    })

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
    endpoint: `/rewards/me?page=${page}`
  })
}
