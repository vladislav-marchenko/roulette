import { Star } from '@/components/Icons'
import { Image } from '@/components/Image'
import type { Roulette } from '@/types/api'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

export const RoulettesItem: FC<Omit<Roulette, 'prizes'>> = ({
  name,
  price,
  image,
  color,
  code
}) => {
  return (
    <Link
      to='/roulette/$id'
      params={{ id: code }}
      className='group block cursor-pointer rounded-xl p-px'
      style={{
        background: `linear-gradient(to top, ${color} 0%, #404040 55%)`
      }}
    >
      <div
        className='flex flex-col items-center rounded-xl p-1.5'
        style={{
          background: `linear-gradient(to top, ${color}66 0%, #262626 50%)`
        }}
      >
        <Image src={image} className='w-full' />
        <h4>{name} Box</h4>
        <div className='flex items-center gap-1 rounded-full bg-white/40 px-2 py-0.5'>
          <span className='text-xs font-medium'>{price}</span>
          <Star size={12} />
        </div>
      </div>
    </Link>
  )
}
