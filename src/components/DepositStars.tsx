import { Button } from './Button'
import { Drawer } from './Drawer'
import { Star } from './Icons'
import { StarsInput } from './StarsInput'
import { useInvoice } from '@/hooks/useInvoice'
import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { HiPlus } from 'react-icons/hi'

export const DepositStars = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(0)

  const { openInvoiceLink, isPending } = useInvoice(() => {
    setValue(0)
    setIsOpen(false)
  })

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    openInvoiceLink(value)
  }

  return (
    <Drawer
      title={t('balance.deposit.title')}
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button className='flex items-center gap-1'>
          {t('balance.buttons.deposit')} <HiPlus size={22} />
        </Button>
      }
      minHeightPercent={40}
      className='flex flex-col'
    >
      <form
        onSubmit={onSubmit}
        className='flex h-full flex-auto flex-col items-center justify-center'
      >
        <StarsInput
          value={value}
          setValue={setValue}
          className='flex-auto justify-center py-4'
        />
        <Button
          type='submit'
          disabled={value <= 0}
          isLoading={isPending}
          className='flex w-full items-center gap-1'
        >
          {t('balance.buttons.deposit')} <Star />
        </Button>
      </form>
    </Drawer>
  )
}
