import type { Action } from '@/types/api'
import { getDateString } from '@/utils'
import type { FC } from 'react'

export const RecentActionsItemInfo: FC<Pick<Action, 'type' | 'createdAt'>> = ({
  type,
  createdAt
}) => {
  return (
    <div className='flex flex-col'>
      <h4 className='text-start leading-none capitalize'>{type}</h4>
      <span className='text-sm text-neutral-400'>
        {getDateString(createdAt)}
      </span>
    </div>
  )
}
