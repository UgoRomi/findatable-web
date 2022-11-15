import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div className={`flex-center ${className ?? ''}`}>
      <label htmlFor='search' className='sr-only'>
        Search for a restaurant
      </label>
      <div className='relative mt-1 rounded-md shadow-sm w-[350px]'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <MagnifyingGlassIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </div>
        <input
          type='text'
          name='search'
          id='search'
          className='block w-full rounded-md text-zinc-900 border-gray-300 px-10 focus:border-green-200 focus:ring-green-200 sm:text-sm'
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          <XCircleIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </div>
      </div>
    </div>
  );
}
