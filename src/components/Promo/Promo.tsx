import { PromoBanner } from './PromoBanner'
import { PromoForm } from './PromoForm'
import { PromoInfo } from './PromoInfo'
import { Drawer } from '@/components/Drawer'

export const Promo = () => {
  return (
    <Drawer
      title='Promo Code'
      trigger={<PromoBanner />}
      className='flex flex-col gap-6'
    >
      <PromoInfo />
      <PromoForm />
    </Drawer>
  )
}
