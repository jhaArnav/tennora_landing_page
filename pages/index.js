// pages/index.js
import Head from 'next/head'
import Component from '../components/component' // Adjust the path if necessary
import icon from '../public/logo.png';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tennora | Faster Estimations for Loan Officers</title>
      </Head>
      <Component />
    </div>
  )
}
