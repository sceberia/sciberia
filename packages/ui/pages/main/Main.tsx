import React from 'react';
import { MainImage } from '../..';
import { Button } from '../../components/button/Button';
import { Header } from '../../components/header/Header';

type User = {
  name: string;
};

export const Main: React.VFC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
        onAccount={() => { }}
      />

      <section className="mx-32">
        <div className="grid max-w-screen-xl mx-auto xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="mb-4 font-extrabold text-custom-black leading-none md:text-5xl xl:text-4xl 2xl:text-6xl uppercase">Программное обеспечение для здравоохранения</h1>
            <p className="mb-6 font-normal text-secondary xl:text-xl 2xl:text-xl lg:mb-8 ">На основе компьютерного зрения и машинного обучения</p>
            <Button label="Ознакомиться" type="default" />
          </div>
          <div className="lg:mt-0 lg:col-span-7 lg:flex">
            <img src={MainImage} alt="image"/>
          </div>
        </div>
      </section>
    </article>
  );
};
