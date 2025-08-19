import { Button } from '../Button'
import { Star } from '../Icons'
import { useTranslation } from 'react-i18next'
import { FaArrowUpLong } from 'react-icons/fa6'

export const GiftsItemSkeleton = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-2 rounded-xl bg-neutral-800 p-1.5'>
      <div className='skeleton aspect-square w-full rounded-xl' />
      <div className='space-y-1'>
        <div className='skeleton h-4.5 w-24' />
        <div className='skeleton h-3 w-16' />
      </div>
      <div className='flex items-center gap-2'>
        <Button
          size='sm'
          disabled
          className='flex w-full items-center gap-1 whitespace-nowrap'
        >
          {t('inventory.buttons.sell', { amount: '???' })}
          <Star />
        </Button>
        <Button variant='secondary' size='sm' disabled className='p-2.5'>
          <FaArrowUpLong size={13} />
        </Button>
      </div>
    </div>
  )
}
