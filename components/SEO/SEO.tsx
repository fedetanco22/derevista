import React, { FC } from 'react'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
}

const SEO: FC<SEOProps> = ({ title, description, keywords }) => {
  const metaDescription =
    description ||
    'Espacio cultural y social en las villas de Cordoba Captial. Santiago Garzon el artista. Denominado el artista del pueblo'
  const defaultTitle = title || 'Atelier De Revista - Social y Cultural'
  const defaultKeywords =
    keywords ||
    'Atelier, Revista, Social, Cultural, Santiago, Garzón, garza, obras de arte, gallo, arguello, villas, arte en las villas, artista del pueblo '

  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={defaultTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
