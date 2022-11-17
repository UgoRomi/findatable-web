import { UserIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className='w-screen font-heading bg-green-50 flex justify-between items-center px-3 h-[65px] border-b-4 border-green-500 mb-7'>
      <Logo />
      <SearchBar className='!hidden md:!flex' />
      <UserIcon className='h-8 w-8 fill-zinc-800 mr-6' />
    </header>
  );
}
