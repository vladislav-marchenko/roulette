import { RecentActionsItemButton } from './RecentActionsItemButton'
import { RecentActionsItemDetails } from './RecentActionsItemDetails'
import { useInvoice } from '@/hooks/useInvoice'
import type { Transaction } from '@/types/api'
import type { FC } from 'react'

export const RecentActionsItem: FC<Transaction> = (props) => {
  const { handleInvoice } = useInvoice()

  if (props.status === 'pending') {
    return (
      <RecentActionsItemButton
        {...props}
        onClick={() => handleInvoice({ invoiceLink: props.invoiceLink })}
      />
    )
  }

  return <RecentActionsItemDetails {...props} />
}
