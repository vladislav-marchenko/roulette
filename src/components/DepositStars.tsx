import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { getInvoiceLink } from '@/services/api'
import { useMutation } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'

export const DepositStars = () => {
  const [value, setValue] = useState(0)
  const { mutate } = useMutation({
    mutationFn: getInvoiceLink,
    onSuccess: (data) => {
      WebApp.openInvoice(data.invoiceLink, (status) => {
        if (status === 'paid') {
          console.log('paid')
        }
      })
    }
  })

  return (
    <Drawer
      title='Deposit'
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
        disabled={value === 0}
        onClick={() => mutate(value)}
        className='flex w-full items-center gap-1'
      >
        Deposit <Star />
      </Button>
    </Drawer>
  )
}
