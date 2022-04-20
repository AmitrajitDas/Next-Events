import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  )
}

Layout.defaultProps = {
  title: 'Welcome to Events',
  description: 'Find the hottest events nearby',
  keywords: 'music, edm, dj, events, party',
}

export default Layout
