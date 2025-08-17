import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { getMe, withdrawStars } from '@/services/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, type FormEvent } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { toast } from 'sonner'

export const WithdrawStars = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(0)

  const queryClient = useQueryClient()
  const { data, isSuccess } = useQuery({ queryKey: ['me'], queryFn: getMe })
  const { mutate, isPending } = useMutation({
    mutationFn: withdrawStars,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['actions'] })

      setIsOpen(false)
      toast.info('Your withdrawal is being processed.')
    },
    onError: (error) => {
      toast.error(error.message || 'Something went wrong...', {
        description:
          error.message.includes('internal') && 'Please contact support.'
      })
    }
  })

  const isSufficient = isSuccess && value <= data.balance

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    mutate(value)
  }

  return (
    <Drawer
      title='Withdraw'
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button variant='secondary' className='flex items-center gap-1'>
          Withdraw <FaArrowUpLong size={14} />
        </Button>
      }
      minHeightPercent={40}
      className='flex flex-col'
    >
      <form
        onSubmit={onSubmit}
        className='flex h-full flex-auto flex-col items-center justify-center'
      >
        <div className='flex flex-auto flex-col items-center justify-center'>
          <StarsInput
            value={value}
            setValue={setValue}
            error={!isSufficient ? 'Insufficient balance' : undefined}
          />
          {isSuccess && (
            <button
              type='button'
              onClick={() => setValue(data.balance)}
              className='cursor-pointer p-1 font-medium hover:underline'
            >
              Max
            </button>
          )}
          <span className='text-sm text-neutral-400'>Fee 10%</span>
        </div>
        <Button
          type='submit'
          disabled={value === 0 || !isSufficient}
          isLoading={isPending}
          className='flex w-full flex-col items-center gap-0.5'
        >
          <span className='leading-none'>Withdraw</span>
          <div className='flex items-center gap-0.5 text-xs leading-none text-neutral-400'>
            You recieve {Math.floor(value * 0.9)} <Star size={12} />
          </div>
        </Button>
      </form>
    </Drawer>
  )
}
