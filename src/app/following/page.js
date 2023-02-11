import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

let page = "Following"

export const metadata = {
  title: `${page}`,
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <Sidebar page="following" />
    </main>
  )
}
