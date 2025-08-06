import BouquetLottie from '@/assets/gifts/bouquet/bouquet.json'
import BouquetImage from '@/assets/gifts/bouquet/bouquet.png'
import CakeLottie from '@/assets/gifts/cake/cake.json'
import CakeImage from '@/assets/gifts/cake/cake.png'
import ChampagneLottie from '@/assets/gifts/champagne/champagne.json'
import ChampagneImage from '@/assets/gifts/champagne/champagne.png'
import CupLottie from '@/assets/gifts/cup/cup.json'
import CupImage from '@/assets/gifts/cup/cup.png'
import DiamondLottie from '@/assets/gifts/diamond/diamond.json'
import DiamondImage from '@/assets/gifts/diamond/diamond.png'
import GiftLottie from '@/assets/gifts/gift/gift.json'
import GiftImage from '@/assets/gifts/gift/gift.png'
import HeartLottie from '@/assets/gifts/heart/heart.json'
import HeartImage from '@/assets/gifts/heart/heart.png'
import RingLottie from '@/assets/gifts/ring/ring.json'
import RingImage from '@/assets/gifts/ring/ring.png'
import RocketLottie from '@/assets/gifts/rocket/rocket.json'
import RocketImage from '@/assets/gifts/rocket/rocket.png'
import RoseLottie from '@/assets/gifts/rose/rose.json'
import RoseImage from '@/assets/gifts/rose/rose.png'
import TeddyBearLottie from '@/assets/gifts/teddy-bear/teddy-bear.json'
import TeddyBearImage from '@/assets/gifts/teddy-bear/teddy-bear.png'
import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import { PrizeOverlay } from '@/components/PrizeOverlay'
import { Roulette } from '@/components/Roulette/Roulette'
import { ITEM_WIDTH } from '@/consts'
import { useRoulette } from '@/hooks/useRoulette'
import type { Gift as GiftType } from '@/types'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App
})

const items: GiftType[] = [
  { id: 1, name: 'Rose', price: 25, image: RoseImage, lottie: RoseLottie },
  {
    id: 2,
    name: 'Teddy Bear',
    price: 15,
    image: TeddyBearImage,
    lottie: TeddyBearLottie
  },
  { id: 3, name: 'Cake', price: 50, image: CakeImage, lottie: CakeLottie },
  { id: 4, name: 'Gift', price: 25, image: GiftImage, lottie: GiftLottie },
  { id: 5, name: 'Heart', price: 15, image: HeartImage, lottie: HeartLottie },
  {
    id: 6,
    name: 'Bouquet',
    price: 50,
    image: BouquetImage,
    lottie: BouquetLottie
  },
  {
    id: 7,
    name: 'Rocket',
    price: 50,
    image: RocketImage,
    lottie: RocketLottie
  },
  { id: 8, name: 'Cup', price: 100, image: CupImage, lottie: CupLottie },
  { id: 9, name: 'Ring', price: 100, image: RingImage, lottie: RingLottie },
  {
    id: 10,
    name: 'Diamond',
    price: 100,
    image: DiamondImage,
    lottie: DiamondLottie
  },
  {
    id: 11,
    name: 'Champagne',
    price: 50,
    image: ChampagneImage,
    lottie: ChampagneLottie
  }
]

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
    <div className='flex flex-col items-center gap-4 p-4'>
      {isOverlayVisible && prize && (
        <PrizeOverlay prize={prize} close={() => setIsOverlayVisible(false)} />
      )}
      <Roulette items={items} offset={offset} isSpinning={isSpinning} />
      <Button
        onClick={spin}
        disabled={isSpinning}
        className='flex items-center gap-1'
      >
        Spin for 25 <Star />
      </Button>
    </div>
  )
}
