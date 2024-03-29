import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';

import Logo from '../assets/sxd-header-logo-16.svg';

interface TopNavInterface {
  addBottomBorder?: boolean;
  cls?: string;
}

export const TopNav: FC<TopNavInterface> = ({ addBottomBorder, cls }) => {
  const router = useRouter();

  const bottomBorder = useMemo(() => {
    if (router.pathname === '/survey/[surveyId]' || addBottomBorder) {
      return true;
    }
    return false;
  }, [router.pathname, addBottomBorder]);

  return (
    <nav
      className={clsx(`${cls ?? 'bg-white'}`, {
        'ring-2 ring-xd-neutral-300': bottomBorder,
      })}
    >
      <div
        className={clsx(
          'page-max-xl px-4 flex items-center justify-between min-h-[64px]'
        )}
      >
        <Link href={'/'}>
          <span className='cursor-pointer'>
            <Logo />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export const TopNavComingSoon: FC = () => {
  const router = useRouter();
  return (
    <nav
      className={clsx({
        'bg-white ring-1 ring-neutral-300 sticky top-0 z-10':
          router.pathname.includes('/response'),
      })}
    >
      <div
        className={clsx(
          'p-4 flex justify-center items-center min-h-[64px]',
          'page-max-xl'
        )}
      >
        <Link href={'/'}>
          <div className='cursor-pointer flex flex-col items-center justify-center'>
            <Logo />
            <p className='text-xd-primary-black/[.65]'>Coming Soon</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
