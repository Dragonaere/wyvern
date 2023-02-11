import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

let page = "Explore"

export const metadata = {
  title: `${page}`,
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <Sidebar page="explore" />
    </main>
  )
}