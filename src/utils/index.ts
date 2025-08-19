import WebApp from '@twa-dev/sdk'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getDateString = (date: string, language: string = 'en-US') => {
  return new Date(date).toLocaleString(language, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
}

export const getStartParamByKey = ({
  startParam,
  key
}: {
  startParam?: string
  key: string
}) => {
  if (startParam && startParam.includes(key)) {
    return startParam.split(key)[1]
  }
}

export const getPaddingTop = () => {
  if (WebApp.isFullscreen) {
    return WebApp.safeAreaInset.top + 30
  }

  return WebApp.safeAreaInset.top
}
