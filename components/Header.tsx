import { getCurrentUser } from '@/lib/session';
import { UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default async function Header() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <header className='w-screen font-main bg-green-50 flex justify-between items-center px-3 h-[65px] border-b-4 border-green-500 mb-7'>
      <Logo />
      <SearchBar className='!hidden md:!flex' />
      <Link
        href='/api/auth/signin'
        className='text-zinc-800 font-bold underline underline-offset-1'
      >
        Sign In
      </Link>
    </header>
  );
}
