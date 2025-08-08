import { Button } from '../Button'
import { cn } from '@/utils'
import type { FC, ReactNode } from 'react'

interface SettingsButtonProps {
  children: ReactNode
  className?: string
}

export const SettingsButton: FC<SettingsButtonProps> = ({
  children,
  className
}) => {
  return (
    <Button
      variant='secondary'
      className={cn('rounded-full px-4 py-2', className)}
    >
      {children}
    </Button>
  )
}
