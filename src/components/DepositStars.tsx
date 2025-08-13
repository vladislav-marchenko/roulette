import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { getInvoiceLink } from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { toast } from 'sonner'

export const DepositStars = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(0)

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: getInvoiceLink,
    onSuccess: handleInvoice,
    onError: (error) => toast.error(error.message ?? 'Something went wrong...'),
    onSettled: () => {
      setIsOpen(false)
      setValue(0)
    }
  })

  function handleInvoice({ invoiceLink }: { invoiceLink: string }) {
    WebApp.openInvoice(invoiceLink, (status) => {
      if (status !== 'paid') return

      toast.success('Deposit successful!')
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['me'] })
      }, 1000)
    })
  }

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
        onClick={() => mutate(value)}
        className='flex w-full items-center gap-1'
      >
        Deposit <Star />
      </Button>
    </Drawer>
  )
}
