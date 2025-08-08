import CakeLottie from '@/assets/gifts/cake/cake.json'
import CakeImage from '@/assets/gifts/cake/cake.png'
import ChampagneLottie from '@/assets/gifts/champagne/champagne.json'
import ChampagneImage from '@/assets/gifts/champagne/champagne.png'
import CupLottie from '@/assets/gifts/cup/cup.json'
import CupImage from '@/assets/gifts/cup/cup.png'
import DiamondLottie from '@/assets/gifts/diamond/diamond.json'
import DiamondImage from '@/assets/gifts/diamond/diamond.png'
import FlowersLottie from '@/assets/gifts/flowers/flowers.json'
import FlowersImage from '@/assets/gifts/flowers/flowers.png'
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
import type { Gift as GiftType } from '@/types'

export const ITEM_WIDTH = 150
export const REPEAT_COUNT = 3

export const gifts: GiftType[] = [
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
    image: FlowersImage,
    lottie: FlowersLottie
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
