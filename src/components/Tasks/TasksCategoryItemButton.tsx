import { Button } from '@/components/Button'
import { checkTask, claimTask } from '@/services/api'
import type { Task } from '@/types/api'
import { cn } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { TFunction } from 'i18next'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa'
import { toast } from 'sonner'

const getButtonText = (
  t: TFunction,
  isClaimed: boolean,
  isCompleted: boolean
) => {
  if (isClaimed) return t('profile.tasks.buttons.claimed')
  if (isCompleted) return t('profile.tasks.buttons.claim')
  return t('profile.tasks.buttons.check')
}

export const TasksCategoryItemButton: FC<
  Pick<Task, 'isClaimed' | 'isCompleted' | 'code'>
> = ({ isCompleted, isClaimed, code }) => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const { mutate: check, isPending: isChecking } = useMutation({
    mutationFn: () => checkTask(code),
    onSuccess: (data) => {
      if (data.isCompleted) {
        queryClient.invalidateQueries({ queryKey: ['tasks'] })
      } else {
        toast.info(t('profile.tasks.info'))
      }
    }
  })

  const { mutate: claim, isPending: isClaiming } = useMutation({
    mutationFn: () => claimTask(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      toast.success(t('profile.tasks.success'))
    },
    onError: (error) => {
      toast.error(`${t('profile.tasks.error')}: ${error.message}`)
    }
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
      {getButtonText(t, isClaimed, isCompleted)}
      {isClaimed && <FaCheck />}
    </Button>
  )
}
