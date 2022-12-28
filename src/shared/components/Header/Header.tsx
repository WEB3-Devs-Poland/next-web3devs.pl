import { LINKS } from './Header.constants';
import { ROUTE } from '@config/routes';
import WEB3DevsPolandLogo from '@images/icons/WEB3DevsPolandLogo.svg';
import Link from 'next/link';
import React from 'react';

import { Button } from '@components/Button';

export const Header: React.FC = () => (
  <header className="w-full flex justify-around top-0 z-50 m-auto">
    <div className="w-10/12 flex flex-row justify-between">
      <div className="w-36">
        <Link href={ROUTE.home}>
          <WEB3DevsPolandLogo />
        </Link>
      </div>

      <div className="my-auto">
        {LINKS.map(({ label, route }) => (
          <Button type="Link" key={label} href={route}>
            {label}
          </Button>
        ))}
      </div>

      <div className="my-auto w-36">
        <Button>Connect Wallet</Button>
      </div>
    </div>
  </header>
);
