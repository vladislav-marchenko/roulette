import { ProfileInfo } from '@/components/ProfileInfo'
import { Tasks } from '@/components/Tasks/Tasks'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='flex flex-col gap-6'>
      <ProfileInfo />
      <Tasks />
    </div>
  )
}
