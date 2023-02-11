import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

let page = 'Home'

export const metadata = {
  title: `${page} - Wyvern`,
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <Sidebar page="home" />
    </main>
  )
}
