import styles from '../styles/Home.module.css'
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ['latin'] })

const TravelMap = dynamic(() => import("@/components/map/travelMap"), { ssr: false })

export default function Home() {
  return (
    <main className={inter.className}>
      <div id="temperature-chart" className={styles.temperatureChart}><canvas id="weather"></canvas></div>
      <TravelMap />
    </main>
  )
}
