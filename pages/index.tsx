import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import ServicesIntro from '@/components/ServicesIntro'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Boodh | Digital product and workforce </title>
        <meta name="description" content="Leading platform for your product and workforce together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
      <Hero></Hero>
      <ServicesIntro></ServicesIntro>
      </main>
    </Layout>
  )
}
