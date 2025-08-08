import { TasksCategory } from './TasksCategory'
import { Star } from '@/components/Icons'
import { FaGift } from 'react-icons/fa'
import { FaDiceFive } from 'react-icons/fa6'
import { IoPeopleCircle } from 'react-icons/io5'
import { RiTelegram2Fill } from 'react-icons/ri'

export const tasks = [
  {
    category: 'One-time',
    tasks: [
      {
        title: 'Subscribe to @username channel',
        icon: RiTelegram2Fill,
        color: '#1689ff',
        reward: 5
      },
      {
        title: 'Invite friend',
        icon: IoPeopleCircle,
        color: '#af51de',
        reward: 10
      }
    ]
  },
  {
    category: 'Daily',
    tasks: [
      {
        title: 'Daily reward',
        icon: FaGift,
        color: '#49df64',
        reward: 1
      },
      {
        title: 'Play 3 games',
        icon: FaDiceFive,
        color: '#5ac5fa',
        reward: 5
      },
      {
        title: 'Spend 100 stars',
        icon: Star,
        reward: 10
      }
    ]
  }
]

export const Tasks = () => {
  return (
    <div className='space-y-4'>
      <h2>Tasks</h2>
      <div className='flex flex-col gap-4 rounded-xl bg-neutral-800 p-3'>
        {tasks.map(({ category, tasks }) => (
          <TasksCategory key={category} name={category} tasks={tasks} />
        ))}
      </div>
    </div>
  )
}
