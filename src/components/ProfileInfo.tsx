import { Image } from '@/components/Image'

export const ProfileInfo = () => {
  return (
    <div className='flex flex-col items-center self-center'>
      <Image
        src='https://tailwindcss.com/_next/static/media/cover.de1997f7.png'
        className='w-26 overflow-hidden rounded-full'
      />
      <h3>username</h3>
      <span className='text-xs font-bold'>42/250 XP</span>
    </div>
  )
}
