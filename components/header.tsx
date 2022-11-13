import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/apple-touch-icon.png';
import { SITE_NAME } from '../lib/constants';

export default function Header() {
  return (
    <header className='s-header'>
      <div className='s-container'>
        <Link href='/' className='s-brand'>
          <Image src={Logo} alt='Logo' width={32} height={32} />
          <strong>{SITE_NAME}</strong>
        </Link>
        <nav>
          <Link href='/about/'>About</Link>
        </nav>
      </div>
    </header>
  );
}
