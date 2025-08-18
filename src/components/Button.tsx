import { Loader } from './Icons'
import { cn } from '@/utils'
import { Link, type LinkOptions } from '@tanstack/react-router'
import WebApp from '@twa-dev/sdk'
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  MouseEvent,
  ReactNode
} from 'react'

const variants = {
  common:
    'flex cursor-pointer justify-center items-center gap-2 font-semibold transition-all duration-200 hover:opacity-85 active:opacity-85',
  primary: 'bg-white text-black',
  secondary: 'bg-white/15 text-white'
}

const sizes = {
  sm: 'rounded-full px-2 py-1.5 text-sm',
  base: 'rounded-xl px-6 py-2.5'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
type LinkProps = LinkOptions

export type Props = {
  children: ReactNode
  onClick?: (event: MouseEvent) => void
  className?: string
  disabled?: boolean
  isLoading?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'base'
  style?: React.CSSProperties
} & (ButtonProps | LinkProps)

export const Button: FC<Props> = ({
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

  const handleClick = (event: MouseEvent) => {
    WebApp.HapticFeedback.impactOccurred('soft')
    onClick && onClick(event)
  }

  if ('href' in props) {
    return (
      <a
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={props.href}
        onClick={handleClick}
        //disabled={disabled || isLoading}
        className={classNameStyles}
      >
        {isLoading && <Loader />}
        {children}
      </a>
    )
  }

  if ('to' in props) {
    return (
      <Link
        {...(props as LinkProps)}
        to={props.to}
        onClick={handleClick}
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
      {...(props as ButtonProps)}
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={classNameStyles}
    >
      {isLoading && <Loader />}
      {children}
    </button>
  )
}
