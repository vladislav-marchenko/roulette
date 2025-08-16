import { Button } from './Button'
import { Drawer } from './Drawer'
import { GiftPreview } from './GiftPreview'
import { withdrawReward } from '@/services/api'
import type { Reward } from '@/types/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, type FC } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { toast } from 'sonner'
import { Drawer as DrawerVaul } from 'vaul'

export const WithdrawGift: FC<{ reward: Reward }> = ({ reward }) => {
  const { name, image, lottie } = reward.prize
  const [isOpen, setIsOpen] = useState(false)

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: withdrawReward,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rewards'] })

      setIsOpen(false)
      toast.success('Gift withdrawn successfully!')
    },
    onError: (error) => {
      toast.error(`Unable to send gift: ${error.message}`, {
        description: 'Please contact support.'
      })
    }
  })

  return (
    <Drawer
      title={name}
      description='Are you sure you want to withdraw this gift?'
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button variant='secondary' size='sm' className='p-2.5'>
          <FaArrowUpLong size={13} />
        </Button>
      }
      className='flex flex-col gap-4'
    >
      <GiftPreview name={name} lottie={lottie} image={image} />
      <div className='flex flex-col gap-2'>
        <Button
          onClick={() => mutate(reward._id)}
          isLoading={isPending}
          className='flex items-center gap-1'
        >
          Withdraw
        </Button>
        <DrawerVaul.Close asChild>
          <Button variant='secondary'>Cancel</Button>
        </DrawerVaul.Close>
      </div>
    </Drawer>
  )
}
