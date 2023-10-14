import BannerSuperior from './components/BannerSuperior';
import EncuestaBox from './components/EncuestaBox';
import Espacio from './components/Espacio';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BannerSuperior />
      <Espacio />
      <EncuestaBox />
    </main>
  )
}