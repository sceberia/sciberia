import { Icon, Logo, Mail, Phone } from "ui";
import Link from 'next/link'

export default function FooterMain() {
    return (
        <footer className="p-4 bg-custom-white sm:p-6">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href={"/"} className="flex items-center">
                            <img src={Icon.src} className="mr-2" />
                            <img src={Logo.src} />
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <Link href={"/products"} className="text-sm font-regular">Продукты</Link>
                        <Link href={"/about"} className="text-sm font-regular">О нас</Link>
                        {/* <div className="text-sm font-regular">Контакты</div> */}
                        <Link href={"/community"} className="text-sm font-regular">Комньюнити</Link>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex items-center">
                            <img src={Mail.src} /><div className="ml-2 mr-4 text-sm font-regular">info@sciberia-plus.ru</div>
                        </div>

                        <div className="flex items-center">
                            <img src={Phone.src} />                        
                            <div className="ml-2 text-sm font-regular">+7 (914) 300-61-62</div>
                        </div>

                    </div>
                </div>
                <div className="flex sm:items-center justify-between my-6">
                    <span className="text-sm font-regular text-text-secondary sm:text-center mr-4">г. Якутск, пр. Ленина, 1, IT PARK, каб. 512
                    </span>
                    <div>
                        <span className="text-sm font-regular text-text-secondary sm:text-center mr-4">Все права защищены
                        </span>
                        <span className="text-sm font-regular text-text-secondary sm:text-center">© 2023 ООО “Сайберия”
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    )
}