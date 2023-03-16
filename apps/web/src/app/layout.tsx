// import { ToastContainer } from 'react-toastify'
import LayoutMain from '@/components/LayoutMain/LayoutMain'
import './globals.css'
export const metadata = {
  title: 'Sciberia+',
  description: 'Сервис для преобретения продукта Sciberia',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">

      <body className="bg-bg-primary">      <LayoutMain />{children}</body>
    </html>
  )
}
