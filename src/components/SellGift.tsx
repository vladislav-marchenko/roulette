import { Button, type ButtonProps } from './Button'
import { Drawer } from './Drawer'
import { GiftPreview } from './GiftPreview'
import { Star } from './Icons'
import { sellReward } from '@/services/api'
import type { Prize } from '@/types/api'
import { cn } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, type FC } from 'react'
import { toast } from 'sonner'
import { Drawer as DrawerVaul } from 'vaul'

interface SellGiftProps {
  rewardId: string
  prize: Prize
  className?: string
  triggerSize?: ButtonProps['size']
  onSell?: () => void
}

export const SellGift: FC<SellGiftProps> = ({
  rewardId,
  prize,
  className,
  triggerSize,
  onSell
}) => {
  const { name, image, lottie, price } = prize
  const [isOpen, setIsOpen] = useState(false)

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: () => sellReward(rewardId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['rewards'] })

      onSell && onSell()
      setIsOpen(false)

      toast.success('Gift sold successfully!', {
        description: `Your balance is ${data.balance} stars`
      })
    },
    onError: (error) => {
      toast.error(error.message || 'Something went wrong...')
    }
  })

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      title={name}
      description='Are you sure you want to sell this gift?'
      trigger={
        <Button
          size={triggerSize}
          className={cn('flex w-full items-center gap-1', className)}
        >
          Sell for {price}
          <Star />
        </Button>
      }
      className='flex flex-col gap-4'
    >
      <GiftPreview name={name} lottie={lottie} image={image} />
      <div className='flex flex-col gap-2'>
        <Button onClick={mutate} className='flex items-center gap-1'>
          Sell for {price} <Star />
        </Button>
        <DrawerVaul.Close asChild>
          <Button variant='secondary'>Cancel</Button>
        </DrawerVaul.Close>
      </div>
    </Drawer>
  )
}
