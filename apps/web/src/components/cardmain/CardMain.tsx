"use client";

import { MediumCard } from "ui";

export default function CardMain({ label, description }: { label: string, description: string }) {
    return (
        <MediumCard primary>
            <div className="h-36">
                <h1 className="text-lg font-extrabold">{label}</h1>
                <div className="text-base font-regular">{description}</div>
            </div>
        </MediumCard>
    )
}