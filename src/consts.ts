import { Star } from '@/components/Icons'
import { BiTask } from 'react-icons/bi'
import { FaGift } from 'react-icons/fa'
import { FaDiceFive } from 'react-icons/fa6'
import { IoPeopleCircle } from 'react-icons/io5'
import { RiTelegram2Fill } from 'react-icons/ri'

export const ITEM_WIDTH = 150
export const REPEAT_COUNT = 3

export const taskIcons = {
  subscribe_channel: {
    icon: RiTelegram2Fill,
    color: '#1689ff'
  },
  invite_friend: {
    icon: IoPeopleCircle,
    color: '#af51de'
  },
  daily_reward: {
    icon: FaGift,
    color: '#49df64'
  },
  play_three_games: {
    icon: FaDiceFive,
    color: '#5ac5fa'
  },
  spend_hundred_stars: {
    icon: Star,
    color: undefined
  },
  default: {
    icon: BiTask,
    color: '#f1aa05'
  }
} as const
