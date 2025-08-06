import { cn } from '@/utils'
import type { FC, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex min-w-48 cursor-pointer justify-center rounded-xl bg-sky-600 px-6 py-2.5 font-medium text-white transition-colors duration-200',
        {
          'cursor-not-allowed opacity-50': disabled,
          'hover:bg-sky-500 active:bg-sky-500': !disabled
        },
        className
      )}
    >
      {children}
    </button>
  )
}
