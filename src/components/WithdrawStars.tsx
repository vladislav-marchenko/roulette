import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

export const WithdrawStars = () => {
  const [value, setValue] = useState(0)

  return (
    <Drawer
      title='Withdraw'
      trigger={
        <Button variant='secondary' className='flex items-center gap-1'>
          Withdraw <FaArrowUpLong size={14} />
        </Button>
      }
      className='flex flex-col items-center justify-center'
    >
      <StarsInput value={value} setValue={setValue} />
      <Button disabled={value === 0} className='flex w-full items-center gap-1'>
        Withdraw <Star />
      </Button>
    </Drawer>
  )
}
