import { LINKS } from './Header.constants';
import { ROUTE } from '@config/routes';
import WEB3DevsPolandLogo from '@images/icons/WEB3DevsPolandLogo.svg';
import Link from 'next/link';
import { useAccount, useConnect, useEnsName, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import React, { Fragment } from 'react';

import { Button } from '@components/Button';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Header: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });

  const { disconnect } = useDisconnect();
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <header className="top-0 z-50 m-auto flex w-full justify-around">
      <div className="flex w-10/12 flex-row justify-between">
        <div className="w-36">
          <Link href={ROUTE.home}>
            <WEB3DevsPolandLogo className="scale-75 lg:scale-100" />
          </Link>
        </div>

        <div className="my-auto hidden lg:block">
          {LINKS.map(({ label, route }) => (
            <Button type="Link" key={label} href={route}>
              {label}
            </Button>
          ))}
        </div>

        <div className="my-auto hidden w-36 lg:block">
          <Button onClick={isConnected ? disconnect : connect} className="w-36 truncate">
            {isConnected ? ensName ?? address : !isLoading ? 'Connect Wallet' : null}
            {isLoading ? <FontAwesomeIcon icon={faSpinner} color="white" className="animate-spin" /> : null}
          </Button>
        </div>

        <div className="my-auto block lg:hidden">
          <Menu>
            {({ close }) => (
              <>
                <Menu.Button>
                  <FontAwesomeIcon icon={faBars} color="white" size="2x" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  {/* eslint-disable-next-line max-len */}
                  <Menu.Items className="absolute left-0 right-0 mx-auto my-12 w-10/12 rounded-lg border-2 border-brand-purple2 bg-black p-2 drop-shadow-glow">
                    {LINKS.map(({ label, route }) => (
                      <div key={label} className="w-full border-b-[1px] border-brand-purple2 p-6 text-center text-xl">
                        <Button type="Link" href={route} onClick={close}>
                          {label}
                        </Button>
                      </div>
                    ))}

                    <div className="w-full p-6 text-center text-xl ">
                      <Button onClick={isConnected ? disconnect : connect} className="w-full truncate">
                        {isConnected ? ensName ?? address : 'Connect Wallet'}
                      </Button>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};
