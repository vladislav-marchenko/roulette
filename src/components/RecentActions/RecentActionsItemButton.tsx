import { RecentActionsItemAmount } from './RecentActionsItemAmount'
import { RecentActionsItemIcon } from './RecentActionsItemIcon'
import { RecentActionsItemInfo } from './RecentActionsItemInfo'
import type { Transaction } from '@/types/api'
import type { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface RecentActionsItemButtonProps extends Transaction {
  onClick?: () => void
}

export const RecentActionsItemButton: FC<RecentActionsItemButtonProps> = ({
  type,
  amount,
  createdAt,
  status,
  onClick
}) => {
  return (
    <button onClick={onClick} className='flex cursor-pointer gap-4'>
      <RecentActionsItemIcon type={type} status={status} />
      <div className='divider flex flex-auto items-center justify-between'>
        <RecentActionsItemInfo type={type} createdAt={createdAt} />
        <div className='flex items-center gap-2'>
          <RecentActionsItemAmount type={type} amount={amount} />
          <IoIosArrowForward className='text-neutral-400' />
        </div>
      </div>
    </button>
  )
}
