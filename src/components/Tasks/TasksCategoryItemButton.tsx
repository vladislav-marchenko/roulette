import { Button } from '@/components/Button'
import { checkTask, claimTask } from '@/services/api'
import type { Task } from '@/types/api'
import { cn } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type FC } from 'react'
import { FaCheck } from 'react-icons/fa'
import { toast } from 'sonner'

const getButtonText = (isClaimed: boolean, isCompleted: boolean) => {
  if (isClaimed) return 'Claimed'
  if (isCompleted) return 'Claim'
  return 'Check'
}

export const TasksCategoryItemButton: FC<
  Pick<Task, 'isClaimed' | 'isCompleted' | 'code'>
> = ({ isCompleted, isClaimed, code }) => {
  const queryClient = useQueryClient()

  const { mutate: check, isPending: isChecking } = useMutation({
    mutationFn: () => checkTask(code),
    onSuccess: (data) => {
      if (data.isCompleted) {
        queryClient.invalidateQueries({ queryKey: ['tasks'] })
      } else {
        toast.info('Task not completed yet.')
      }
    }
  })

  const { mutate: claim, isPending: isClaiming } = useMutation({
    mutationFn: () => claimTask(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success('Task reward claimed successfully!')
    },
    onError: () => toast.error('Failed to claim task reward!')
  })

  const handleClick = () => {
    if (isCompleted && isClaimed) return

    if (isCompleted) claim()
    else check()
  }

  return (
    <Button
      size='sm'
      variant={isCompleted && !isClaimed ? 'primary' : 'secondary'}
      disabled={isChecking || isClaiming}
      onClick={handleClick}
      className={cn('px-4', {
        'bg-green-700/30 text-green-400': isClaimed
      })}
    >
      {getButtonText(isClaimed, isCompleted)}
      {isClaimed && <FaCheck />}
    </Button>
  )
}
