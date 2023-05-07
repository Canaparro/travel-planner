import { Inter } from 'next/font/google'
import { useState } from 'react'
import dynamic from "next/dynamic"
import Chart from '@/components/chart/chart'
import CurrentPosition from '@/components/currentPosition'

const inter = Inter({ subsets: ['latin'] })

const TravelMap = dynamic(() => import("@/components/map/travelMap"), { ssr: false })

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState<CurrentPosition | null>(null)

  return (
    <main className={inter.className}>
      <Chart currentPosition={currentPosition}/>
      <TravelMap setCurrentPosition={setCurrentPosition}/>
    </main>
  )
}
