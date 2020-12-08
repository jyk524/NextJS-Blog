import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout Home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <section className={utilStyles.headingMd}>
        <p>Hi. Nice to meet you</p>
        <p>
          I'm James
        </p>
      </section>
    </Layout>
  )
}