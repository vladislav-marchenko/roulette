import { Star } from '@/components/Icons'
import { RoulettesItem } from '@/components/Roulettes/RoulettesItem'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

const data = [
  {
    code: 'classic',
    name: 'Classic',
    price: 25,
    image: 'https://storage.yandexcloud.net/giftica/cases/classic.png',
    color: '#973c00'
  },
  {
    code: 'snoop',
    name: 'Snoop',
    price: 25,
    image: 'https://storage.yandexcloud.net/giftica/cases/snoop.png',
    color: '#8e51ff'
  },
  {
    code: 'sweet',
    name: 'Sweet',
    price: 25,
    image: 'https://storage.yandexcloud.net/giftica/cases/sweet.png',
    color: '#fb64b6'
  },
  {
    code: 'spooky',
    name: 'Spooky',
    price: 25,
    image: 'https://storage.yandexcloud.net/giftica/cases/spooky.png',
    color: '#a6a09b'
  },
  {
    code: 'love',
    name: 'Love',
    price: 25,
    image: 'https://storage.yandexcloud.net/giftica/cases/love.png',
    color: '#ff2056'
  },
  {
    code: 'rich',
    name: 'Rich',
    price: 25,
    image: 'https://storage.yandexcloud.net/giftica/cases/rich.png',
    color: '#d4d4d4'
  }
]

function RouteComponent() {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4'>
      {data.map((item) => (
        <RoulettesItem {...item} />
      ))}
    </div>
  )
}
