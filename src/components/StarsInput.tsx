import { cn } from '@/utils'
import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

interface StarsInputProps {
  value: number
  setValue: Dispatch<SetStateAction<number>>
  className?: string
  error?: string
}

export const StarsInput: FC<StarsInputProps> = ({
  value,
  setValue,
  error,
  className
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const decimal = newValue.split('.')[1] ?? ''

    if (decimal.length > 2) return
    setValue(Math.min(+newValue, 99999999999))
  }

  return (
    <div className={cn('flex flex-col items-center py-4', className)}>
      <div className='flex flex-wrap items-center justify-center font-bold'>
        <input
          id='deposit-value'
          type='number'
          value={String(value)}
          onChange={onChange}
          placeholder='0'
          autoFocus
          className={cn(
            'text-center text-5xl outline-none focus:outline-none',
            error && 'text-red-400'
          )}
          style={{ width: value.toString().length + 0.5 + 'ch' }}
        />
        <label
          className='cursor-text gap-2 text-4xl text-neutral-400'
          htmlFor='deposit-value'
        >
          Stars
        </label>
      </div>
      <span className='text-sm font-medium text-red-400'>{error}</span>
    </div>
  )
}
