import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'


const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav>
          <ul>
            <li>Mexico</li>
            <li>Chile</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
