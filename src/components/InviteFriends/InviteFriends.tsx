import { InviteFriendsBanner } from './InviteFriendsBanner'
import { InviteFriendsButtons } from './InviteFriendsButtons'
import { InviteFriendsInfo } from './InviteFriendsInfo'
import { Drawer } from '@/components/Drawer'
import { getMe } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const InviteFriends = () => {
  const { data, isSuccess } = useQuery({ queryKey: ['me'], queryFn: getMe })

  if (!isSuccess) return

  const url = `${window.location.origin}/?startapp=${data.referralCode}`

  return (
    <Drawer title='Invite' trigger={<InviteFriendsBanner />}>
      <div className='flex h-full flex-col gap-6'>
        <InviteFriendsInfo />
        <div className='flex flex-col gap-1'>
          <h5>Your link for friends</h5>
          <input
            type='text'
            readOnly
            value={url}
            className='w-full flex-auto truncate rounded-lg border border-neutral-600 px-2 py-1.5 text-sm text-neutral-200'
          />
        </div>
        <InviteFriendsButtons url={url} />
      </div>
    </Drawer>
  )
}
