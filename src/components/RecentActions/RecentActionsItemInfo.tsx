import type { Action } from '@/types/api'
import { getDateString } from '@/utils'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const RecentActionsItemInfo: FC<Pick<Action, 'type' | 'createdAt'>> = ({
  type,
  createdAt
}) => {
  const { t, i18n } = useTranslation()

  return (
    <div className='flex flex-col'>
      <h4 className='text-start leading-none capitalize'>
        {t(`balance.actions.names.${type}`)}
      </h4>
      <span className='text-sm text-neutral-400'>
        {getDateString(createdAt, i18n.language)}
      </span>
    </div>
  )
}
