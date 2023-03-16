"use client";

import { Button, MediumCard } from "ui"
import Image from 'next/image'

export default function CardProduct({ title, description, img }: { title: string, description: string, img?: any }) {

    return (
        <MediumCard >
            <div className="grid gap-2 grid-cols-12 h-full relative">
                <div className="col-span-8 relative ">
                    <div className="mb-20">
                        <h1 className="text-lg font-semibold mb-4">{title}</h1>
                        <div className="text-base font-regular">{description}</div>
                    </div>
                    <div className="w-3/4 absolute bottom-0">
                        <Button label="Смотреть продукт" type="default" onClick={(e) => { }} arrowRight />
                    </div>
                </div>
                {img ? (<div className="col-span-4">
                    <Image src={img} className="absolute right-0 w-48 bottom-0" alt=""/>
                </div>) : ""}

            </div>
        </MediumCard>
    )
}