import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export async function generateMetadata(a) {
  console.log(a);
  console.log(a.searchParams);
  console.log(a.searchParams.search_query);
  return { title: `${a.searchParams.search_query} - Wyvern`, }
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Sidebar page="results" />
    </main>
  )
}
