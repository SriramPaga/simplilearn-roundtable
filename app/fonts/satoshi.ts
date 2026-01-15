import localFont from 'next/font/local'

export const satoshi = localFont({
  src: [
    {
      path: './Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Satoshi-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './Satoshi-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: './Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Satoshi-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Satoshi-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Satoshi-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Satoshi-Italic.woff',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})
