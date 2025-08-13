import type { Transaction } from '@/types/api'
import type { FC } from 'react'

export const RecentActionsItemInfo: FC<
  Pick<Transaction, 'type' | 'createdAt'>
> = ({ type, createdAt }) => {
  const date = new Date(createdAt).toLocaleString('en-US')

  return (
    <div className='flex flex-col'>
      <h4 className='text-start leading-none capitalize'>{type}</h4>
      <span className='text-sm text-neutral-400'>{date}</span>
    </div>
  )
}
