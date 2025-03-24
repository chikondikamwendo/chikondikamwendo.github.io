import headshot from '@/assets/images/headshot.png';
import { Dart } from '@/components/icons/dart';
import { Flutter } from '@/components/icons/flutter';
import { Laravel } from '@/components/icons/laravel';
import { PHP } from '@/components/icons/php';
import { React } from '@/components/icons/react';
import { Tailwind } from '@/components/icons/tailwind';
import { Typescript } from '@/components/icons/typescript';
import { Vue } from '@/components/icons/vue';

const fluencies = [
    {
        icon: PHP,
    },
    {
        icon: Dart,
    },
    {
        icon: Typescript,
    },
    {
        icon: Laravel,
    },
    {
        icon: Flutter,
    },
    {
        icon: React,
    },
    {
        icon: Vue,
    },
    {
        icon: Tailwind,
    },
];

export default function Home() {
    return (
        <div className="relative flex h-full w-full items-end justify-start overflow-clip">
            <div className="h-[60%]">
                <h2 className="text-8xl">
                    Fullstack
                    <br />
                    <span className="font-bold">Developer</span>
                </h2>
                <div className="mt-8 flex items-center gap-4 space-x-4">
                    {fluencies.map((item, index) => (
                        <span key={index}>
                            {item.icon({
                                className: 'text-4xl text-secondary-foreground/80',
                            })}
                        </span>
                    ))}
                </div>
            </div>

            <img src={headshot} alt="Chikondi Kamwendo" className="absolute right-0 -bottom-[10%] h-full object-cover" />
        </div>
    );
}
