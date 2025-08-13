import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { useInvoice } from '@/hooks/useInvoice'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'

export const DepositStars = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(0)

  const { openInvoiceLink, isPending } = useInvoice(() => {
    setValue(0)
    setIsOpen(false)
  })

  return (
    <Drawer
      title='Deposit'
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button className='flex items-center gap-1'>
          Deposit <HiPlus size={22} />
        </Button>
      }
      minHeightPercent={40}
      className='flex flex-col items-center justify-center'
    >
      <StarsInput
        value={value}
        setValue={setValue}
        className='flex-auto justify-center'
      />
      <Button
        disabled={value <= 0}
        isLoading={isPending}
        onClick={() => openInvoiceLink(value)}
        className='flex w-full items-center gap-1'
      >
        Deposit <Star />
      </Button>
    </Drawer>
  )
}
