import Header from '@/components/Header'
import { useTheme } from '@/components/ThemeProvider'
import React from 'react'
import Snowfall from 'react-snowfall'

interface Props {
  children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
  const context = useTheme()
  const { theme } = context

  return (
    <div className='flex flex-col min-h-screen'>
      <Snowfall
        color={theme === 'light' ? 'black' : 'white'}
        snowflakeCount={50}
        speed={[0, 2]}
        wind={[0.5, 2]}
        radius={[0.5, 2.5]}
      />
      <Header />
      <main className='flex-grow w-full'>
        <div className='container py-8 px-4'>{children}</div>
      </main>
      <footer className='w-full'>
        <div className='container px-4 py-4'>
          <p className='text-center text-primary'>© 2025 Refslink. Công cụ quản lý link rút gọn.</p>
        </div>
      </footer>
    </div>
  )
}
