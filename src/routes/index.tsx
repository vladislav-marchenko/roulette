import Bouquet from '@/assets/gifts/bouquet/bouquet.png'
import Cake from '@/assets/gifts/cake/cake.png'
import Champagne from '@/assets/gifts/champagne/champagne.png'
import Cup from '@/assets/gifts/cup/cup.png'
import Diamond from '@/assets/gifts/diamond/diamond.png'
import Gift from '@/assets/gifts/gift/gift.png'
import Heart from '@/assets/gifts/heart/heart.png'
import Ring from '@/assets/gifts/ring/ring.png'
import Rocket from '@/assets/gifts/rocket/rocket.png'
import Rose from '@/assets/gifts/rose/rose.png'
import TeddyBear from '@/assets/gifts/teddy-bear/teddy-bear.png'
import { Star } from '@/components/Icons'
import { PrizeOverlay } from '@/components/PrizeOverlay'
import { useRoulette } from '@/hooks/useRoulette'
import type { Gift as GiftType } from '@/types'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App
})

const items: GiftType[] = [
  { id: 1, name: 'Rose', price: 25, image: Rose },
  { id: 2, name: 'Teddy Bear', price: 15, image: TeddyBear },
  { id: 3, name: 'Cake', price: 50, image: Cake },
  { id: 4, name: 'Gift', price: 25, image: Gift },
  { id: 5, name: 'Heart', price: 15, image: Heart },
  { id: 6, name: 'Bouquet', price: 50, image: Bouquet },
  { id: 7, name: 'Rocket', price: 50, image: Rocket },
  { id: 8, name: 'Cup', price: 100, image: Cup },
  { id: 9, name: 'Ring', price: 100, image: Ring },
  { id: 10, name: 'Diamond', price: 100, image: Diamond },
  { id: 11, name: 'Champagne', price: 50, image: Champagne }
]

const ITEM_WIDTH = 150
const REPEAT_COUNT = 3

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [prize, setPrize] = useState<GiftType>()
  const { offset, scroll, isSpinning } = useRoulette({
    itemWidth: ITEM_WIDTH,
    itemCount: items.length,
    onSpinEnd: () => setIsOverlayVisible(true)
  })

  const spin = () => {
    const randomItemIndex = Math.floor(Math.random() * items.length)
    setPrize(items[randomItemIndex])
    scroll(randomItemIndex)
  }

  return (
    <>
      {isOverlayVisible && prize && (
        <PrizeOverlay prize={prize} close={() => setIsOverlayVisible(false)} />
      )}
      <div className='flex flex-col items-center gap-4 p-4'>
        <div className='relative w-full overflow-hidden rounded-md bg-neutral-950 p-2'>
          <div className='absolute top-0 left-0 z-10 flex h-full w-full justify-between'>
            <div className='h-full w-1/12 bg-gradient-to-r from-black to-transparent' />
            <div className='h-full w-1/12 bg-gradient-to-r from-transparent to-black' />
          </div>
          <div className='absolute top-0 bottom-0 left-1/2 z-10 w-[3px] -translate-x-1/2 bg-neutral-200/70' />
          <div
            className='flex gap-2'
            style={{
              width: items.length * ITEM_WIDTH * REPEAT_COUNT + 'px',
              transform: `translateX(-${offset}px)`,
              transition: isSpinning ? 'none' : 'transform 0.1s ease-out'
            }}
          >
            {Array(REPEAT_COUNT)
              .fill(items)
              .flat()
              .map(({ id, name, image, price }: GiftType, index) => (
                <div
                  key={index}
                  data-id={id}
                  className='flex flex-col items-center justify-center gap-1 rounded-md bg-neutral-800 p-3'
                  style={{ width: ITEM_WIDTH + 'px' }}
                >
                  <img src={image} className='w-3/4' alt={name} />
                  <div className='flex items-center gap-1 rounded-full bg-neutral-500/50 px-2 py-1'>
                    <span className='text-xs leading-tight font-bold text-neutral-200'>
                      {price}
                    </span>
                    <Star size={12} />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button
          onClick={spin}
          className='min-w-24 cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-blue-500 active:bg-blue-500'
        >
          Spin
        </button>
      </div>
    </>
  )
}
