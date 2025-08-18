import { Loader } from '@/components/Icons'
import type { Action } from '@/types/api'
import type { FC } from 'react'
import {
  FaArrowDown,
  FaArrowUp,
  FaQuestion,
  FaUser,
  FaExclamation
} from 'react-icons/fa'

export const getTypeIcon = ({
  type,
  prize
}: Pick<Action, 'type' | 'prize'>) => {
  if (prize) {
    return <img src={prize.image} />
  }

  switch (type) {
    case 'deposit':
      return <FaArrowDown />
    case 'withdraw':
      return <FaArrowUp />
    case 'referral':
      return <FaUser />
    default:
      return <FaQuestion />
  }
}

const getIcon = ({
  type,
  status,
  prize
}: Pick<Action, 'type' | 'status' | 'prize'>) => {
  switch (status) {
    case 'pending':
      return <Loader />
    case 'failed':
      return <FaExclamation />
    case 'success':
      return getTypeIcon({ type, prize })
  }
}

export const RecentActionsItemIcon: FC<
  Pick<Action, 'type' | 'status' | 'prize'>
> = ({ type, status, prize }) => {
  return <div className='icon'>{getIcon({ type, status, prize })}</div>
}
