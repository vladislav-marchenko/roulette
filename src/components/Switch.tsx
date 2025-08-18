import { cn } from '@/utils'
import WebApp from '@twa-dev/sdk'
import type { ChangeEvent, FC } from 'react'

interface SwitchProps {
  name: string
  checked: boolean
  toggle: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Switch: FC<SwitchProps> = ({ name, checked, toggle }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    WebApp.HapticFeedback.impactOccurred('soft')
    toggle(event)
  }

  return (
    <>
      <input
        type='checkbox'
        id={name}
        checked={checked}
        onChange={handleChange}
        hidden
        className='peer'
      />
      <label
        htmlFor={name}
        className={cn(
          'flex w-12 cursor-pointer rounded-full bg-neutral-600 p-1 transition-all duration-200',
          {
            'bg-green-600': checked
          }
        )}
      >
        <div
          className={cn(
            'aspect-square h-5 w-5 rounded-full bg-white shadow-2xl transition-transform duration-300',
            {
              'translate-x-5': checked
            }
          )}
        />
      </label>
    </>
  )
}
