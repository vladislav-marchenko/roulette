import { RecentActionsItemButton } from './RecentActionsItemButton'
import { getTypeIcon } from './RecentActionsItemIcon'
import { Button } from '@/components/Button'
import { Drawer } from '@/components/Drawer'
import { Star } from '@/components/Icons'
import type { Action } from '@/types/api'
import { getDateString } from '@/utils'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCalendar, FaClock, FaCheck, FaExclamation } from 'react-icons/fa'
import { Drawer as VaulDrawer } from 'vaul'

const getStatusIcon = (status: Action['status']) => {
  switch (status) {
    case 'pending':
      return <FaClock />
    case 'success':
      return <FaCheck />
    case 'failed':
      return <FaExclamation />
  }
}

export const RecentActionsItemDetails: FC<Action> = (props) => {
  const { t, i18n } = useTranslation()

  const items = [
    {
      icon: getTypeIcon({ type: props.type, prize: props.prize }),
      label: t('balance.actions.details.type'),
      value: t(`balance.actions.names.${props.type}`)
    },
    {
      icon: getStatusIcon(props.status),
      label: t('balance.actions.details.status'),
      value: t(`balance.actions.statuses.${props.status}`)
    },
    {
      icon: <FaCalendar />,
      label: t('balance.actions.details.date'),
      value: getDateString(props.createdAt, i18n.language)
    },
    {
      icon: <Star />,
      label: t('balance.actions.details.amount'),
      value: props.amount
    }
  ]

  return (
    <Drawer
      title={t('balance.actions.details.title')}
      trigger={<RecentActionsItemButton {...props} />}
      className='flex flex-col gap-4'
    >
      <div className='flex flex-col gap-4'>
        {items.map(({ icon, label, value }) => (
          <div className='group flex gap-2'>
            <div className='icon'>{icon}</div>
            <div className='divider flex w-full flex-col'>
              <h5>{label}</h5>
              <span className='text-sm font-medium capitalize'>{value}</span>
            </div>
          </div>
        ))}
      </div>
      <VaulDrawer.Close asChild>
        <Button variant='secondary'>
          {t('balance.actions.details.button')}
        </Button>
      </VaulDrawer.Close>
    </Drawer>
  )
}
