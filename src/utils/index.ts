import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getDateString = (date: string) => {
  return new Date(date).toLocaleString('en-US', {
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
