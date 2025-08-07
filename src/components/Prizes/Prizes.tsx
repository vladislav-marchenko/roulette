import { PrizesItem } from './PrizesItem'
import { gifts } from '@/consts'

export const Prizes = () => {
  return (
    <div className='space-y-2'>
      <h2>Prizes</h2>
      <ul className='flex flex-col gap-4 rounded-xl bg-neutral-800 p-3'>
        {gifts.map(({ image, name, price }) => (
          <PrizesItem key={name} image={image} name={name} price={price} />
        ))}
      </ul>
    </div>
  )
}
