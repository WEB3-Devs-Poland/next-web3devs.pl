import { Button } from '@components/Button';
import WEB3DevsPolandLogo from '@images/icons/WEB3DevsPolandLogo.svg';
import React from 'react';
import { LINKS, MEDIA } from './Footer.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer: React.FunctionComponent = () => (
  <div className="m-auto flex w-full justify-around bg-black">
    <div className="mt-12 mb-28 w-10/12 ">
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <WEB3DevsPolandLogo className="scale-100" />
          <div className="my-8">
            <h3 className="text-xl text-grayScale-grey4">Newsletter</h3>
            <div className="my-4">
              <input placeholder="text" />
              <Button className="ml-2 py-1 px-4">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="min-w-[175px]">
          <h3 className="mb-4 text-xl text-grayScale-grey4">Useful Links</h3>
          <div className="flex flex-col gap-2">
            {LINKS.map(({ label, route }) => (
              <Button type="Link" key={label} href={route} className="ml-0 text-base">
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between lg:flex-row">
        <h4 className="text-center font-light text-grayScale-grey4 lg:text-left">
          ©2022 web3 Devs Poland. All rights reserved
        </h4>
        <div className="my-8 min-w-[175px] lg:my-0">
          {MEDIA.map(({ icon, link }) => (
            <a key={link} href={link} target="blank">
              <FontAwesomeIcon icon={icon} color="white" size="xl" className="Icon mr-6 cursor-pointer" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);
