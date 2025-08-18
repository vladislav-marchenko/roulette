import { RecentActionsItemAmount } from './RecentActionsItemAmount'
import { RecentActionsItemIcon } from './RecentActionsItemIcon'
import { RecentActionsItemInfo } from './RecentActionsItemInfo'
import type { Action } from '@/types/api'
import WebApp from '@twa-dev/sdk'
import type { FC, MouseEvent } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface RecentActionsItemButtonProps extends Action {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const RecentActionsItemButton: FC<RecentActionsItemButtonProps> = ({
  type,
  amount,
  createdAt,
  status,
  prize,
  onClick
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    WebApp.HapticFeedback.impactOccurred('soft')
    onClick && onClick(event)
  }

  return (
    <button onClick={handleClick} className='flex w-full cursor-pointer gap-4'>
      <RecentActionsItemIcon type={type} status={status} prize={prize} />
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
