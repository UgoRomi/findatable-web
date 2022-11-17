import SearchBar from '@/components/SearchBar';

async function getData() {
  const res = await fetch('/api/restaurants');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <SearchBar className='flex md:hidden' />
      {JSON.stringify(data)}
    </>
  );
}
