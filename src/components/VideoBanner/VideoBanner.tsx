import { BannerButton } from '../BannerButton'
import WebApp from '@twa-dev/sdk'
import { useTranslation } from 'react-i18next'

export const VideoBanner = () => {
  const { t } = useTranslation()

  return (
    <a
      href='https://t.me/giftica_official/33'
      target='_blank'
      onClick={() => WebApp.HapticFeedback.impactOccurred('soft')}
      className='cursor-pointer rounded-xl bg-gradient-to-tr from-neutral-700 from-60% to-sky-500 p-px md:basis-2/5'
    >
      <div className='flex flex-auto cursor-pointer flex-col items-start gap-2 rounded-xl bg-neutral-700 bg-[url("./assets/videos-background.png")] bg-cover p-3'>
        <h3 className='leading-none'>{t('play.videoBanner.title')}</h3>
        <p className='text-sm leading-tight font-medium text-neutral-300'>
          {t('play.videoBanner.description')}
        </p>
        <BannerButton>{t('play.videoBanner.button')}</BannerButton>
      </div>
    </a>
  )
}
