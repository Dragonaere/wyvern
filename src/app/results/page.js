import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export async function generateMetadata(a) {
  return { title: `${a.searchParams.search_query}`, }
}

export const runtime = 'nodejs';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Sidebar page="results" />
    </main>
  )
}
