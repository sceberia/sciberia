import React, { ReactElement } from 'react';
import { Button, Chat, Icon, Logo, MenuLink } from '../..';


interface HeaderProps {
  auth: boolean;
  // onLogin: () => void;
  // onLogout: () => void;
  onCreateAccount: () => void;
  // onAccount: () => void;
  book?: boolean
  links: ReactElement
}
export const Header = ({ auth = false, onCreateAccount,  book = false, links }: HeaderProps) => (
  <header className="bg-custom-white">
    <nav className="bg-white border-gray-200 mx-32 py-6">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a className="flex items-center" href="https://sciberia-plus.ru/">
          <img src={book ? Icon : Icon.src} className="mr-2" />
          <img src={book ? Logo : Logo.src} />
        </a>
        <div className="flex items-center lg:order-2">
          {!auth ?
            <>
              <Button
                label="Регистрация"
                onClick={onCreateAccount}
                type="default"
                size="medium"
              />
            </>
            :
            <>
              <Button
                label="Выйти"
                // onClick={onAccount}
                type="default"
                size="medium"
              />
            </>
          }

        </div>
        <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
