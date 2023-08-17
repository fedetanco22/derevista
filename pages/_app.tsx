import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Layout
        title="Atelier De Revista - Social y Cultural"
        description="Espacio cultural y social en las villas de Cordoba Captial. Santiago Garzon el artista. Denominado el artista del pueblo"
        keywords="Atelier, Revista, Social, Cultural, Santiago, Garzón, garza, obras de arte, gallo, arguello, villas, arte en las villas, artista del pueblo "
      >
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
