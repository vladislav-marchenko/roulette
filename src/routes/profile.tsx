import { Balance } from '@/components/Balance'
import { ProfileInfo } from '@/components/ProfileInfo'
import { SettingsButton } from '@/components/SettingsButton'
import { Tasks } from '@/components/Tasks/Tasks'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <SettingsButton />
        <Balance />
      </div>
      <ProfileInfo />
      <Tasks />
    </div>
  )
}
