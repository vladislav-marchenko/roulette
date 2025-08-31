import { WithdrawStarsButton } from './WithdrawStarsButton'
import { WithdrawStarsMaxButton } from './WithdrawStarsMaxButton'
import { Button } from '@/components/Button'
import { Drawer } from '@/components/Drawer'
import { StarsInput } from '@/components/StarsInput'
import { getMe, withdrawStars } from '@/services/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowUpLong } from 'react-icons/fa6'
import { toast } from 'sonner'

export const WithdrawStars = () => {
  const { t } = useTranslation()
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
      toast.info(t('balance.withdraw.info'))
    },
    onError: (error) => {
      toast.error(
        `${t('balance.withdraw.errors.withdrawal.title')}: ${error.message}`,
        {
          description:
            error.message.toLowerCase().includes('internal') &&
            t('balance.withdraw.errors.withdrawal.description')
        }
      )
    }
  })

  const getErrorMessage = () => {
    if (isSuccess && value > data.balance) {
      return t('balance.withdraw.errors.insufficient')
    }

    const max = 5000
    if (value > max) {
      return t('balance.withdraw.errors.max', { amount: max })
    }
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    mutate(value)
  }

  return (
    <Drawer
      title={t('balance.withdraw.title')}
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button variant='secondary' className='flex items-center gap-1'>
          {t('balance.buttons.withdraw')} <FaArrowUpLong size={14} />
        </Button>
      }
      minHeightPercent={40}
      className='flex flex-col'
    >
      <form
        onSubmit={onSubmit}
        className='flex h-full flex-auto flex-col items-center justify-center'
      >
        <div className='flex flex-auto flex-col items-center justify-center py-4'>
          <StarsInput
            value={value}
            setValue={setValue}
            error={getErrorMessage()}
          />
          {isSuccess && (
            <WithdrawStarsMaxButton onClick={() => setValue(data.balance)} />
          )}
          <span className='text-sm text-neutral-400'>
            {t('balance.withdraw.fee', { fee: 10 })}
          </span>
        </div>
        <WithdrawStarsButton
          disabled={value === 0 || !!getErrorMessage()}
          isPending={isPending}
          value={value}
        />
      </form>
    </Drawer>
  )
}
