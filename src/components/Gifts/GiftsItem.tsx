import { Image } from '@/components/Image'
import { SellGift } from '@/components/SellGift'
import { WithdrawGift } from '@/components/WithdrawGift'
import type { Reward } from '@/types/api'
import { getDateString } from '@/utils'
import { type FC, type Ref } from 'react'
import { useTranslation } from 'react-i18next'

interface GiftsItemProps extends Reward {
  ref: Ref<HTMLDivElement>
}

export const GiftsItem: FC<GiftsItemProps> = ({ ref, ...reward }) => {
  const { i18n } = useTranslation()
  const { name, image } = reward.prize

  return (
    <div className='flex max-w-3xs flex-col gap-2 justify-self-center rounded-xl bg-neutral-800 p-1.5'>
      <Image src={image} className='icon h-full w-full p-4' />
      <div className='flex flex-col'>
        <h4 className='leading-none'>{name}</h4>
        <span className='text-xs font-medium text-neutral-400'>
          {getDateString(reward.createdAt, i18n.language)}
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <SellGift triggerSize='sm' reward={reward} />
        <WithdrawGift reward={reward} />
      </div>
    </div>
  )
}
