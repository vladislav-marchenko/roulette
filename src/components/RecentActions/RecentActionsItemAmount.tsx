import { Star } from '@/components/Icons'
import type { Action } from '@/types/api'
import type { FC } from 'react'

const positiveActions: Action['type'][] = ['deposit', 'sell']
const negativeActions: Action['type'][] = ['withdraw', 'spin']

export const RecentActionsItemAmount: FC<Pick<Action, 'type' | 'amount'>> = ({
  type,
  amount
}) => {
  return (
    <div className='flex items-center gap-1'>
      <span className='text-sm font-semibold'>
        {positiveActions.includes(type) && '+'}
        {negativeActions.includes(type) && '-'}
        {amount}
      </span>
      <Star size={12} />
    </div>
  )
}
