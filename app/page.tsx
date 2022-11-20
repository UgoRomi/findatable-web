import SearchBar from '@/components/SearchBar';
import prisma from '@/lib/prisma';

async function getData() {
  try {
    return await prisma?.restaurant.findMany();
  } catch (error) {
    console.log(error);
    throw new Error(
      'There was an error fetching the restaurants. Please refresh the page.'
    );
  }
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
