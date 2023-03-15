import React from 'react';
import { Button, Chat, Icon, Logo, MenuLink } from '../..';


interface HeaderProps {
  auth: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  onAccount: () => void;
  book: boolean
}
export const Header = ({ auth = false, onLogin, onLogout, onCreateAccount, onAccount, book = false }: HeaderProps) => (
  <header className="bg-custom-white">
    <nav className="bg-white border-gray-200 mx-32 py-6">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <img src={book ? Icon : Icon.src} className="mr-2" />
          <img src={book ? Logo : Logo.src} />
        </div>
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
                onClick={onAccount}
                type="default"
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
            <li className="flex">
              <img src={book ? Chat : Chat.src} className="mr-[2px]"/>
              <MenuLink label="Комьюнити" href="#" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
