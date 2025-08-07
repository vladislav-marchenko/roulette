import { GiftsItem } from '@/components/Gifts/GiftsItem'
import { gifts } from '@/consts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gifts')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4'>
      {gifts.map(({ id, name, image, price, lottie }) => (
        <GiftsItem
          key={id}
          name={name}
          image={image}
          price={price}
          lottie={lottie}
        />
      ))}
    </div>
  )
}
