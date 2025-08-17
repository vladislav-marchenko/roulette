import type { FC } from 'react'

export const WithdrawStarsMaxButton: FC<{ onClick: () => void }> = ({
  onClick
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='cursor-pointer p-1 font-medium hover:underline'
    >
      Max
    </button>
  )
}
