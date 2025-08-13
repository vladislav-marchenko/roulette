import { Loader } from '../Icons'
import type { Transaction } from '@/types/api'
import type { FC } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

export const RecentActionsItemIcon: FC<
  Pick<Transaction, 'type' | 'status'>
> = ({ type, status }) => {
  return (
    <div className='flex aspect-square h-10 w-10 items-center justify-center gap-0.5 rounded-lg bg-neutral-800'>
      {type === 'deposit' && status === 'success' && <FaArrowDown />}
      {type === 'withdraw' && status === 'success' && <FaArrowUp />}
      {status === 'pending' && <Loader />}
    </div>
  )
}
