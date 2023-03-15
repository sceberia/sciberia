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
        <body className="bg-bg-primary">{children}</body>
      </html>
  )
}
