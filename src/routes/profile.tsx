import { InviteFriends } from '@/components/InviteFriends/InviteFriends'
import { ProfileInfo } from '@/components/ProfileInfo/ProfileInfo'
import { Promo } from '@/components/Promo/Promo'
import { Tasks } from '@/components/Tasks/Tasks'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='flex w-full max-w-2xl flex-col gap-6 self-center'>
      <ProfileInfo />
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <div className='flex basis-1/2 items-center justify-center rounded-xl bg-neutral-800 p-3 font-bold'>
            Coming soon
          </div>
          <Promo />
        </div>
        <InviteFriends />
      </div>
      <Tasks />
    </div>
  )
}
