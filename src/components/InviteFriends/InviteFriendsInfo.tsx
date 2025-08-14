import { Star } from '@/components/Icons'

export const InviteFriendsInfo = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2'>
        <h2>Earn stars</h2> <Star size={20} />
      </div>
      <p className='text-sm text-neutral-400'>
        Earn 4% of the stars from every deposit your referrals make
      </p>
    </div>
  )
}
