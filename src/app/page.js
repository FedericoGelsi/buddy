import Image from 'next/image'
import ActivitiesHome from './pages/ActivitiesHome'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ActivitiesHome/>
    </main>
  )
}
