import type { FC, ReactNode } from 'react'
import type { IconType } from 'react-icons/lib'

interface InviteFriendsStatsItemProps {
  children: ReactNode
  title: string
  icon: IconType
  color: `#${string}`
}

export const InviteFriendsStatsItem: FC<InviteFriendsStatsItemProps> = ({
  children,
  title,
  icon: Icon,
  color
}) => {
  return (
    <div className='flex basis-1/2 gap-1'>
      <Icon size={18} color={color} />
      <div>
        <h5>{title}</h5>
        {children}
      </div>
    </div>
  )
}
