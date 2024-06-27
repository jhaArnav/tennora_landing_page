// pages/index.js
import Head from 'next/head'
import Component from '../components/component' // Adjust the path if necessary

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tennora Website</title>
      </Head>
      <Component />
    </div>
  )
}
