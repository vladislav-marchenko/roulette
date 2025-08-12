import { InviteFriends } from '@/components/InviteFriends/InviteFriends'
import { ProfileInfo } from '@/components/ProfileInfo/ProfileInfo'
import { Tasks } from '@/components/Tasks/Tasks'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='flex w-full max-w-2xl flex-col gap-6 self-center'>
      <ProfileInfo />
      <InviteFriends />
      <Tasks />
    </div>
  )
}
