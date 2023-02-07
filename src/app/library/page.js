import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Sidebar page="library" />
    </main>
  )
}
