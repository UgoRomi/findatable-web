import RestaurantCard from '@/components/RestaurantCard';
import SearchBar from '@/components/SearchBar';
import prisma from '@/lib/prisma';

async function getData() {
  try {
    const restaurants = await prisma.restaurant.findMany();
    return { restaurants };
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
      <div className='flex-center mt-6 flex-col gap-y-10'>
        {data.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </>
  );
}
