import './globals.css'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: {
    default: 'Wyvern',
    template: '%s - Wyvern'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
