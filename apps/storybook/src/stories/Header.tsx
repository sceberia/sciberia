import React from 'react';

import { Button, Icon, Logo, MenuLink } from 'ui'

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  onAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount, onAccount }: HeaderProps) => (
  <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <img src={Icon} />
          <img src={Logo} />
        </div>
        <div className="flex items-center lg:order-2">
          {user ?
            <>
              <Button
                label="Вход"
                onClick={onLogin}
                size="medium"
              />
              <Button
                label="Регистрация"
                onClick={onCreateAccount}
                primary
                size="medium"
              />
            </>
            :
            <>
              <Button
                label="Личный кабинет"
                onClick={onAccount}
                primary
                size="medium"
              />
            </>
          }

        </div>
        <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <MenuLink label="О нас" href="#" />
            </li>
            <li>
              <MenuLink label="Продукты" href="#" arrow />
            </li>
            <li>
              <MenuLink label="Статьи" href="#" />
            </li>
            <li>
              <MenuLink label="Контакты" href="#" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
