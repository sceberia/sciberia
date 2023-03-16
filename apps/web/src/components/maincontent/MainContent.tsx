
import { Button, MainImage } from "ui";
import Image from 'next/image'

export default function MainContent() {
    return (
        <section className="mx-32">
            <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                <div className="mt-4 md:mt-0">
                    <h1 className="mb-4 font-extrabold text-custom-black text-xl uppercase">Программное обеспечение для здравоохранения</h1>
                    <p className="mb-6 text-secondary font-regular text-base lg:mb-8 ">На основе компьютерного зрения и машинного обучения</p>
                    <div className="md:w-1/2">

                        <Button label="Ознакомиться" type="default" />
                    </div>
                </div>
                <Image src={MainImage} className="w-full" alt=""/>
            </div>
        </section>
    )
}