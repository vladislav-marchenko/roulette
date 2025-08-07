import { cn } from '@/utils'
import type { FC, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex cursor-pointer justify-center rounded-xl px-6 py-2.5 font-semibold transition-colors duration-200',
        {
          'cursor-not-allowed opacity-50': disabled,
          'bg-white text-black hover:bg-white/85': variant === 'primary',
          'bg-white/15 text-white hover:bg-white/35': variant === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
