import Image from 'next/image';

export default function RestaurantCard({
  banner,
  name,
}: {
  banner: string;
  name: string;
}) {
  return (
    <div className='w-full max-w-[350px] flex flex-col gap-y-3'>
      <div className='relative w-full h-40'>
        <Image
          src={banner}
          alt={`picture of ${name}`}
          fill
          className='object-cover rounded-md'
        />
      </div>
      <h2 className='text-xl font-bold font-main'>{name}</h2>
      <button className='button-outline-secondary'>Book now</button>
    </div>
  );
}
