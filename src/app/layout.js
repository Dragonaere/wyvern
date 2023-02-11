import './globals.css'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: {
    default: 'Wyvern',
    template: '%s - Wyvern'
  },
  generator: 'Next.js',
  applicationName: 'Wyvern',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  formatDetection: {
    email: 'no',
    address: 'no',
    telephone: 'no',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
