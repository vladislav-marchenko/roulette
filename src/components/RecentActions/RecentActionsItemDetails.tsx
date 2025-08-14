import { RecentActionsItemButton } from './RecentActionsItemButton'
import { Button } from '@/components/Button'
import { Drawer } from '@/components/Drawer'
import { Star } from '@/components/Icons'
import type { Action } from '@/types/api'
import type { FC } from 'react'
import { FaArrowDown, FaArrowUp, FaCalendar } from 'react-icons/fa'
import { Drawer as VaulDrawer } from 'vaul'

export const RecentActionsItemDetails: FC<Action> = (props) => {
  const items = [
    {
      icon: props.type === 'deposit' ? FaArrowDown : FaArrowUp,
      label: 'Type',
      value: props.type
    },
    {
      icon: FaCalendar,
      label: 'Date & Time',
      value: new Date(props.createdAt).toLocaleString('en-US')
    },
    {
      icon: Star,
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
        {items.map(({ icon: Icon, label, value }) => (
          <div className='group flex gap-2'>
            <div className='icon'>
              <Icon />
            </div>
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
