import localFont from 'next/font/local'

export const satoshi = localFont({
  src: [
    // Regular
    {
      path: './Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    // Medium
    {
      path: './Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },

    // Bold
    {
      path: './Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },

    // Black
    {
      path: './Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },

    // Regular Italic (only one needed)
    {
      path: './Satoshi-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})
