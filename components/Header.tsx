import { UserIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';

export default function Header() {
  return (
    <header className='w-screen font-heading bg-green-50 flex justify-between items-center px-3 h-[65px] border-b-4 border-green-500 mb-7'>
      <Logo />
      <UserIcon className='h-6 w-6 fill-zinc-800' />
    </header>
  );
}
