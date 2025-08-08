import { Button } from '../Button'
import { Drawer } from '../Drawer'
import { GiftsAnimation } from './GiftsAnimation'
import { Language } from './Language'
import { FaGear } from 'react-icons/fa6'

export const settings = [
  {
    label: 'Language',
    element: Language
  },
  {
    label: 'Gifts animation',
    element: GiftsAnimation
  }
]

export const Settings = () => {
  return (
    <Drawer
      title='Settings'
      trigger={
        <Button
          variant='secondary'
          className='rounded-full p-2 text-neutral-400 hover:text-white'
        >
          <FaGear size={14} />
        </Button>
      }
      className='flex flex-col gap-4'
    >
      {settings.map(({ label, element: Element }) => (
        <div className='flex flex-col gap-2'>
          <h5>{label}</h5>
          <Element />
        </div>
      ))}
    </Drawer>
  )
}
