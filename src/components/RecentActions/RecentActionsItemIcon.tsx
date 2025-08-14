import { Loader } from '../Icons'
import type { Action } from '@/types/api'
import type { FC } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

export const RecentActionsItemIcon: FC<
  Pick<Action, 'type' | 'status' | 'prize'>
> = ({ type, status, prize }) => {
  if (prize) {
    return (
      <div className='icon'>
        <img src={prize.image} />
      </div>
    )
  }

  return (
    <div className='icon'>
      {type === 'deposit' && status === 'success' && <FaArrowDown />}
      {type === 'withdraw' && status === 'success' && <FaArrowUp />}
      {status === 'pending' && <Loader />}
    </div>
  )
}
