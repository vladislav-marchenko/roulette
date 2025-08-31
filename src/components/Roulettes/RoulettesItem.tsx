import { Star } from '@/components/Icons'
import { Image } from '@/components/Image'
import type { Roulette } from '@/types/api'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const RoulettesItem: FC<Omit<Roulette, 'prizes'>> = ({
  name,
  price,
  image,
  color,
  code
}) => {
  const { t } = useTranslation()

  return (
    <Link
      to='/roulettes/$id'
      params={{ id: code }}
      className='group block cursor-pointer rounded-xl p-px'
      style={{
        background: `linear-gradient(to top, ${color} 0%, #404040 55%)`
      }}
    >
      <div
        className='flex h-full flex-col items-center rounded-xl p-1.5'
        style={{
          background: `linear-gradient(to top, ${color}66 0%, #262626 50%)`
        }}
      >
        <Image src={image} className='w-full' />
        <h4 className='text-center leading-none'>
          {t(`play.cases.${code}`, { defaultValue: `${name} Box` })}
        </h4>
        <div className='my-2 flex items-center gap-1 rounded-full bg-white/40 px-2 py-0.5'>
          <span className='text-xs font-medium'>{price}</span>
          <Star size={12} />
        </div>
      </div>
    </Link>
  )
}
