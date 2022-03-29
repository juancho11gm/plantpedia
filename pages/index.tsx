import { useEffect, useState } from 'react'
import { getPlantList } from '@api'
import { Layout } from '@components/Layout'
import { PlantCollection } from '@components/PlantCollection'

export default function Home() {
  const [data, setData] = useState<Plant[]>([])

  useEffect(() => {
    getPlantList({ limit: 10 }).then((receivedData) => setData(receivedData))
  }, [])

  return (
    <Layout>
      <PlantCollection plants={data} variant="square" />
    </Layout>
  )
}
