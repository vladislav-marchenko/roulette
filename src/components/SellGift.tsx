import { Button, type Props as ButtonProps } from './Button'
import { Drawer } from './Drawer'
import { GiftPreview } from './GiftPreview'
import { Star } from './Icons'
import { sellReward } from '@/services/api'
import type { Reward } from '@/types/api'
import { cn } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Drawer as DrawerVaul } from 'vaul'

interface SellGiftProps {
  reward: Reward
  className?: string
  triggerSize?: ButtonProps['size']
  onSell?: () => void
}

export const SellGift: FC<SellGiftProps> = ({
  reward,
  className,
  triggerSize,
  onSell
}) => {
  const { t } = useTranslation()
  const { name, image, lottie, price } = reward.prize
  const [isOpen, setIsOpen] = useState(false)

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: sellReward,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['rewards'] })

      onSell && onSell()
      setIsOpen(false)

      toast.success(t('inventory.sell.success.title'), {
        description: t('inventory.sell.success.description', {
          amount: data.balance
        })
      })
    },
    onError: (error) => {
      toast.error(`${t('inventory.sell.error.title')}: ${error.message}`, {
        description: t('inventory.sell.error.description')
      })
    }
  })

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      title={name}
      description={t('inventory.sell.warning')}
      trigger={
        <Button
          size={triggerSize}
          className={cn(
            'flex w-full items-center gap-1 whitespace-nowrap',
            className
          )}
        >
          {t('inventory.buttons.sell', { amount: price })}
          <Star />
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
          {t('inventory.buttons.sell', { amount: price })} <Star />
        </Button>
        <DrawerVaul.Close asChild>
          <Button variant='secondary'>{t('inventory.buttons.cancel')}</Button>
        </DrawerVaul.Close>
      </div>
    </Drawer>
  )
}
