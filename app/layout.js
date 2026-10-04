import './globals.css'

export const metadata = {
  title: 'Yash & Vandana | Anniversary',
  description: 'A romantic anniversary celebration for Yash and Vandana.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
