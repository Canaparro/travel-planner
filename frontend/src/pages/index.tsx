import { Inter } from 'next/font/google'
import { useState } from 'react'
import dynamic from "next/dynamic"
import Chart from '@/components/chart/chart'
import CurrentPosition from '@/components/currentPosition'
import { Drawer, Switch } from 'antd'
import { LineChartOutlined } from '@ant-design/icons'

const inter = Inter({ subsets: ['latin'] })

const TravelMap = dynamic(() => import("@/components/map/travelMap"), { ssr: false })

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState<CurrentPosition | null>(null)
  const [isChartOpen, setOpenChart] = useState(false)
  const [isTemperatureSwitchOn, setTemperatureSwitch] = useState(true)

  const closeChart = () => {
    setOpenChart(false)
  }

  return (
    <main className={inter.className}>
      <Switch onChange={setTemperatureSwitch} 
        checked={isTemperatureSwitchOn}
        checkedChildren={<LineChartOutlined />}
        unCheckedChildren={<LineChartOutlined />}
      />
      <Drawer placement={'bottom'} 
        mask={false}
        maskClosable={false}
        onClose={closeChart}
        open={isChartOpen && isTemperatureSwitchOn}
        destroyOnClose={true}>
        <Chart currentPosition={currentPosition} />
      </Drawer>
      <TravelMap setCurrentPosition={setCurrentPosition} setOpenChart={setOpenChart} />
    </main>
  )
}
