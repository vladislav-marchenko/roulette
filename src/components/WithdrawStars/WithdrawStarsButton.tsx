import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import type { FC } from 'react'

interface WithdrawStarsButtonProps {
  disabled: boolean
  isPending: boolean
  value: number
}

export const WithdrawStarsButton: FC<WithdrawStarsButtonProps> = ({
  disabled,
  isPending,
  value
}) => {
  return (
    <Button
      type='submit'
      disabled={disabled}
      isLoading={isPending}
      className='w-full'
    >
      <div className='flex flex-col items-center gap-0.5'>
        <span className='leading-none'>Withdraw</span>
        <div className='flex items-center gap-0.5 text-xs leading-none text-neutral-400'>
          You recieve {Math.floor(value * 0.9)} <Star size={12} />
        </div>
      </div>
    </Button>
  )
}
