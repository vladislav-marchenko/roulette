import { Loader } from './Icons'
import { cn } from '@/utils'
import { Link } from '@tanstack/react-router'
import type { FC, ReactNode } from 'react'

export interface ButtonProps {
  to?: string
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  isLoading?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'base'
}

interface LinkProps extends ButtonProps {
  to: string
}

const variants = {
  common:
    'flex cursor-pointer justify-center items-center gap-2 font-semibold transition-colors duration-200',
  primary: 'bg-white text-black hover:bg-white/85 active:bg-white/85',
  secondary: 'bg-white/15 text-white hover:bg-white/35 active:bg-white/35'
}

const sizes = {
  sm: 'rounded-full px-2 py-1.5 text-sm',
  base: 'rounded-xl px-6 py-2.5'
}

export const Button: FC<ButtonProps | LinkProps> = ({
  children,
  onClick,
  className,
  disabled,
  isLoading = false,
  variant = 'primary',
  size = 'base',
  ...props
}) => {
  const classNameStyles = cn(
    variants.common,
    variants[variant],
    sizes[size],
    {
      'cursor-not-allowed opacity-50 hover:bg-none active:bg-none':
        disabled || isLoading
    },
    className
  )

  if (props.to) {
    return (
      <Link
        to={props.to}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={classNameStyles}
      >
        {isLoading && <Loader />}
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classNameStyles}
    >
      {isLoading && <Loader />}
      {children}
    </button>
  )
}
