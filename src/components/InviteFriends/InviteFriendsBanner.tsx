import WebApp from '@twa-dev/sdk'
import type { ButtonHTMLAttributes, FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export const InviteFriendsBanner: FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ onClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={(event) => {
        WebApp.HapticFeedback.impactOccurred('soft')
        onClick && onClick(event)
      }}
      className='cursor-pointer rounded-xl bg-gradient-to-tr from-neutral-700 from-40% to-sky-600 p-px'
    >
      <div className='bg-fit flex items-center justify-between gap-4 rounded-[11px] bg-neutral-900 bg-[url("./assets/invite-background.svg")] bg-cover p-3'>
        <div className='flex flex-col text-start'>
          <h3 className='leading-none'>Invite friends</h3>
          <span className='text-sm font-medium text-neutral-300'>
            Earn 4% from every spin your referrals make
          </span>
        </div>
        <IoIosArrowForward size={22} className='text-neutral-300' />
      </div>
    </button>
  )
}
