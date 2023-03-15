import CardMain from "@/components/cardmain/CardMain";
import Oferta from "@/components/oferta/oferta";
import { BigCard, Button, Card, CardPacsImage, CardViewerImage, Frame, Header, MainImage, Tools, Widget } from "ui";
import Footer from "ui/components/footer/Footer";
import { getCurrentUser } from "@/lib/session";
import CardProduct from "@/components/cardProduct/CardProduct";
import MainContent from "@/components/maincontent/MainContent";



export default async function Home() {
    const user = await getCurrentUser()
    console.log(user)
    return (
        <div >
            <Header auth={false} />
            <div className="flex mx-32 pt-[120px] pb-[180px] gap-2">
                <BigCard primary={true}>
                    <div className="p-10">
                        <h1 className="text-custom-white text-lg font-semibold">Оставьте свои контактные данные и мы свяжемся с вами через 20 минут!</h1>
                    </div>
                </BigCard>
                <BigCard>
                    <div className="p-10">
                        <div className="mb-20">
                            <h1 className="text-lg font-semibold mb-4">Sciberia Viewer CE (Community Edition)</h1>
                            <div className="">Тип лицензирования: бесплатная бессрочная лицензия</div>
                            <div className="text-base font-regular">Для личного использования, обучения и ознакомления. Кроссплатформенное ПО с поддержкой ОС: x86-64 Windows 7+ / macOS / Linux. Обладает всем необходимым функционалом для работы с медицинскими изображениями:</div>
                        </div>
                        <div className="flex gap-2">
                            <Button label="Скачать для Windows" type="default" />
                            <Button label="Скачать для MacOS" type="default" />
                        </div>
                    </div>
                </BigCard>
            </div>
            <Footer />
        </div>
    )
}
