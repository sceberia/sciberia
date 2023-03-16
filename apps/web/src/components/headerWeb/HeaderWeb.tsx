import { Chat, Header, MenuLink } from "ui";
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderWeb() {
    return (
        <Header auth={false} links={
            <>
                <Link href="/about">
                    <MenuLink label="О нас" />
                </Link>
                <Link href={"/products"}>
                    <MenuLink label="Продукты" arrow />
                </Link>
                {/* <Link href={"/"}>
                <MenuLink label="Статьи" href="#" />
              </Link> */}
                <Link href={"/contacts"}>
                    <MenuLink label="Контакты" />
                </Link>
                <Link className="flex" href={"/community"}>
                    <Image src={Chat} className="mr-[2px]" alt=""/>
                    <MenuLink label="Комьюнити" />
                </Link>
            </>
        } />
    )
}