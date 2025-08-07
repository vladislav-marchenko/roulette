import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'

export const Deposit = () => {
  const [value, setValue] = useState(0)

  return (
    <Drawer
      title='Deposit'
      trigger={
        <Button className='flex items-center gap-1'>
          Deposit <HiPlus size={22} />
        </Button>
      }
      className='flex flex-col items-center justify-center'
    >
      <StarsInput value={value} setValue={setValue} />
      <Button disabled={value === 0} className='flex w-full items-center gap-1'>
        Deposit <Star />
      </Button>
    </Drawer>
  )
}
