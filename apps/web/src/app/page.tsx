import CardMain from "@/components/cardmain/CardMain";
import Oferta from "@/components/oferta/oferta";
import { BigCard, Button, Card, CardPacsImage, CardViewerImage, Frame, Header, MainImage, MenuLink, Tools, Widget } from "ui";
import { getCurrentUser } from "@/lib/session";
import CardProduct from "@/components/cardProduct/CardProduct";
import MainContent from "@/components/maincontent/MainContent";
import HeaderWeb from "@/components/headerWeb/HeaderWeb";
import Image from 'next/image'
import FooterMain from "@/components/Footer/Footer";


export default async function Home() {
  const user = await getCurrentUser()
  return (
    <div >

      <HeaderWeb />
      <MainContent />
      <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <h1 className="mb-4 font-extrabold text-custom-black text-xl uppercase">О продукте</h1>
      </div>

      <section className="bg-main-background bg-center bg-no-repeat h-[1000px] relative rounded-[40px]">
        <div className="flex justify-center">
          <div className="absolute bottom-0">
            <div className="flex justify-center pb-4">
              <Card label="Стандартизация всех процессов и документация" children={<Image src={Tools} className="h-12 w-12 mr-4" alt="" />} />
              <Card label="Компьютерное зрение, машинное обучение и инновационные алгоритмы" children={<Image src={Frame} className="h-12 w-12 mr-4" alt="" />} />
              <Card label="Простой и привычный пользовательский интерфейс" children={<Image src={Widget} className="h-12 w-12 mr-4" alt="" />} />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-32">
        <div className="mx-auto items-center py-8 px-4 sm:py-16 grid gap-2 grid-cols-12">
          <div className="col-span-3"></div>
          <div className="mt-4 md:mt-0 col-span-9">
            <h1 className="mb-4 font-extrabold text-custom-black text-lg uppercase">ООО "Сайберия"</h1>
            <p className="mb-6 text-secondary text-base font-regular lg:mb-8 ">
              Компания-разработчик программного обеспечения медицинского назначения. Основными продуктами являются профессиональные инструменты для врачей-рентгенологов и модули обработки медицинских изображений, использующие методы компьютерного зрения</p>
            <h1 className="mb-4 font-extrabold text-custom-black text-lg uppercase">  Благодаря разработчикам компании</h1>
            <p className="mb-6 text-secondary text-base font-regular lg:mb-8 ">
              Стала возможной автоматизация процессов распознавания различных патологий, что приводит к быстрой постановке диагноза и минимизации рутины врача</p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4" id="products">
        <h1 className="mb-4 font-extrabold text-custom-black text-xl uppercase">Продукты</h1>
        <div className="flex gap-8">
          <CardProduct title="Sciberia Viewer" img={CardViewerImage} description="Входит в реестр отечественного ПО. Не подлежит регистрации в качестве медицинского изделия" />
          <CardProduct title="Sciberia Lungs" description="Программный модуль для обработки рентгеновской компьютерной томографии органов грудной клетки, который формирует количественные и качественные характеристики для классификации неспецифической пневмонии, в том числе вызванной COVID-19" />
        </div>
        <div className="flex gap-8 mt-4">
          <CardProduct title="Sciberia Head" description="Программный модуль для обработки исследований рентгеновской компьютерной томографии головного мозга и быстрого формирования характеристик для диагностики внутримозгового кровоизлияния" />
          <CardProduct title="Sciberia PACS" img={CardPacsImage} description="Входит в реестр отечественного ПО. Не подлежит регистрации в качестве медицинского изделия" />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl flex gap-8 py-8 px-4">
        <Oferta />
        <BigCard primary={true}>
          <div className="p-10">
            <h1 className="text-custom-white text-lg font-semibold">Оставьте свои контактные данные и мы свяжемся с вами через 20 минут!</h1>
          </div>
        </BigCard>
      </div>
      <div className="bg-custom-white mb-24">
        <div className="mx-auto max-w-screen-xl items-center gap-8 py-[80px] px-4">
          <h1 className="mb-4 font-extrabold text-custom-black text-xl uppercase pb-[80px]">Сайберия в цифрах</h1>
          <div className="flex gap-8">
            <CardMain label="98%" description="Точность семантической сегментации" />
            <CardMain label="от 15 секунд" description="Время обработки 1-го изображения" />
            <CardMain label="200 тыс" description="Обработанных снимков" />
            <CardMain label="30+" description="Сотрудников и 4 отдела в компании" />
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  )
}
