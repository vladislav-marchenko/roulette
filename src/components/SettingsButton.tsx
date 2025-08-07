import { FaGear } from 'react-icons/fa6'

export const SettingsButton = () => {
  return (
    <button className='cursor-pointer rounded-full bg-neutral-700 p-2 text-neutral-400 transition-colors hover:text-neutral-200'>
      <FaGear size={14} />
    </button>
  )
}
