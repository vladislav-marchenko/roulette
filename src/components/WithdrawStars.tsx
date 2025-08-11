import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { getMe } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

export const WithdrawStars = () => {
  const [value, setValue] = useState(0)
  const { data, isSuccess } = useQuery({ queryKey: ['me'], queryFn: getMe })
  const isSufficient = isSuccess && value <= data.balance

  return (
    <Drawer
      title='Withdraw'
      trigger={
        <Button variant='secondary' className='flex items-center gap-1'>
          Withdraw <FaArrowUpLong size={14} />
        </Button>
      }
      minHeightPercent={40}
      className='flex flex-col items-center justify-center'
    >
      <div className='flex flex-auto flex-col items-center justify-center'>
        <StarsInput
          value={value}
          setValue={setValue}
          error={!isSufficient ? 'Insufficient balance' : undefined}
        />
        {isSuccess && (
          <button
            onClick={() => setValue(data.balance)}
            className='cursor-pointer p-1 font-medium hover:underline'
          >
            Max
          </button>
        )}
      </div>
      <Button
        disabled={value === 0 || !isSufficient}
        className='flex w-full items-center gap-1'
      >
        Withdraw <Star />
      </Button>
    </Drawer>
  )
}
