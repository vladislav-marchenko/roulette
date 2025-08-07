import { cn } from '@/utils'
import { Link } from '@tanstack/react-router'
import type { FC, ReactNode } from 'react'

interface ButtonProps {
  to?: string
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

interface LinkProps extends ButtonProps {
  to: string
}

const styles = {
  common:
    'flex cursor-pointer justify-center rounded-xl px-6 py-2.5 font-semibold transition-colors duration-200',
  primary: 'bg-white text-black hover:bg-white/85 active:bg-white/85',
  secondary: 'bg-white/15 text-white hover:bg-white/35 active:bg-white/35'
}

export const Button: FC<ButtonProps | LinkProps> = ({
  children,
  onClick,
  className,
  disabled,
  variant = 'primary',
  ...props
}) => {
  const classNameStyles = cn(
    styles.common,
    styles[variant],
    disabled && 'cursor-not-allowed opacity-50 hover:bg-none active:bg-none',
    className
  )

  if (props.to) {
    return (
      <Link
        to={props.to}
        onClick={onClick}
        disabled={disabled}
        className={classNameStyles}
      >
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classNameStyles}>
      {children}
    </button>
  )
}
