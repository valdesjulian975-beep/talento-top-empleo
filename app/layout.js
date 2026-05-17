import './globals.css'

export const metadata = {
  title: 'Talento Top Empleo | Plataforma de Empleos en Colombia',
  description: 'Encuentra oportunidades laborales rápidas y seguras en Colombia y Latinoamérica',
  keywords: 'empleo, trabajo, Colombia, ofertas laborales, plataforma de empleos',
  authors: [{ name: 'Talento Top Empleo' }],
  openGraph: {
    title: 'Talento Top Empleo',
    description: 'Plataforma de búsqueda de empleos en Colombia y Latinoamérica',
    url: 'https://talento-top-empleo.vercel.app',
    siteName: 'Talento Top Empleo',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
