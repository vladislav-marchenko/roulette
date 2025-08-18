import { RecentActionsItemButton } from './RecentActionsItemButton'
import { getTypeIcon } from './RecentActionsItemIcon'
import { Button } from '@/components/Button'
import { Drawer } from '@/components/Drawer'
import { Star } from '@/components/Icons'
import type { Action } from '@/types/api'
import { getDateString } from '@/utils'
import type { FC } from 'react'
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
  const items = [
    {
      icon: getTypeIcon({ type: props.type, prize: props.prize }),
      label: 'Type',
      value: props.type
    },
    {
      icon: getStatusIcon(props.status),
      label: 'Status',
      value: props.status
    },
    {
      icon: <FaCalendar />,
      label: 'Date & Time',
      value: getDateString(props.createdAt)
    },
    {
      icon: <Star />,
      label: 'Amount',
      value: props.amount
    }
  ]

  return (
    <Drawer
      title='Details'
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
        <Button variant='secondary'>Close</Button>
      </VaulDrawer.Close>
    </Drawer>
  )
}
