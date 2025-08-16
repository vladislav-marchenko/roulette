import { Button } from '@/components/Button'

export const SettingsButtons = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <Button
        href='https://t.me/giftica_official'
        variant='secondary'
        className='flex-auto whitespace-nowrap'
      >
        Join our community
      </Button>
      <Button
        href='https://t.me/giftica_support'
        className='flex-auto whitespace-nowrap'
      >
        Contact support
      </Button>
    </div>
  )
}
