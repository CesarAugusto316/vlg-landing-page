import { Navbar, Footer } from '@/components/index'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'


const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Victoria Line Group',
  description: 'Nos caracterizamos por la consolidación y desconsolidación de cargas, apoyados por nuestros agentes alrededor del mundo desde y hacia el extranjero para nuestros embarques terrestres, aéreos y marítimos.',
}


interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
