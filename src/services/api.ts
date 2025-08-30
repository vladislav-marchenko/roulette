import type {
  ActionsResponse,
  Methods,
  ReferralStats,
  Reward,
  RewardsResponse,
  Roulette,
  Task,
  TaskAction,
  User
} from '@/types/api'
import { filterParams, getStartParamByKey } from '@/utils'
import WebApp from '@twa-dev/sdk'

const API_URL = 'http://localhost:3000'
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
  params?: Record<string, string | undefined>
  method?: Methods
  body?: string | FormData
  headers?: Record<string, string>
}): Promise<Data> => {
  try {
    const queryParams = new URLSearchParams(
      filterParams({ ...params, ref: REFERRAL_CODE })
    ).toString()

    const response = await fetch(API_URL + endpoint + '?' + queryParams, {
      method,
      headers: {
        Authorization: `tma query_id=AAHzg_cuAAAAAPOD9y5i6LU5&user=%7B%22id%22%3A787973107%2C%22first_name%22%3A%22Vladislav%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22vnxzm%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FdC8A7k3lxiZDaFVGhU16_enWClpxh5nJSlGTuCy3UAE.svg%22%7D&auth_date=1756575240&signature=brQZFl_SdcUtg6JJpTeJEEUlOoKsbLzjOtjbUkRfXfa5Ow_wWs60mOMpcFbS1y1v-Vnt2G50zg7Hb_XV6S65Bg&hash=3415a0be7a19ee05149b0a55d2bf7dcff59737ca90f54956a1143055ad1afd6c`,
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

export const getLottie = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

export const spin = (code: string) => {
  return customFetch<Reward>({
    endpoint: `/roulettes/${code}/spin`,
    method: 'POST'
  })
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

export const activatePromocode = (code: string) => {
  return customFetch<User>({
    endpoint: `/promocodes/${code}/activate`,
    method: 'POST'
  })
}

export const getReferralStats = () => {
  return customFetch<ReferralStats>({
    endpoint: '/referrals/stats'
  })
}

export const getRoulettes = () => {
  return customFetch<Omit<Roulette, 'prizes'>[]>({
    endpoint: '/roulettes'
  })
}

export const getRoulette = (code: string) => {
  return customFetch<Roulette>({
    endpoint: `/roulettes/${code}`
  })
}
