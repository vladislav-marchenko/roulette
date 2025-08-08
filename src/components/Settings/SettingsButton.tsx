import { Button } from '../Button'
import { cn } from '@/utils'
import type { FC, ReactNode } from 'react'

interface SettingsButtonProps {
  children: ReactNode
  className?: string
  isActive?: boolean
  onClick?: () => void
}

export const SettingsButton: FC<SettingsButtonProps> = ({
  children,
  className,
  isActive = false,
  onClick
}) => {
  return (
    <Button
      variant={isActive ? 'primary' : 'secondary'}
      className={cn('rounded-full px-4 py-2', className)}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
