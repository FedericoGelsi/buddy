"use client";

import { useEffect, useState } from 'react';
import { getInfo } from 'src/app/fetchApi.js';

export default function BannerSuperior(){
    const {nombre, setNombre} = useState(null);
    useEffect(() => {
        getInfo(setNombre);
    },[]);

    return (<div className="w-[1360px] h-28 px-10 py-6 bg-slate-700 bg-opacity-60 rounded-2xl justify-end items-center inline-flex">
    <div className="grow shrink basis-0 h-16 justify-between items-center flex">
        <div className="w-[140.47px] h-14 relative">
            <img src="Logo.png"/>
        </div>
        <div className="justify-start items-center gap-6 flex">
            <div className="w-14 h-14 relative" />
            <div className="pl-8 bg-slate-800 rounded-[32px] justify-start items-center gap-[23px] flex">
                <div className="text-right text-gray-50 text-lg font-normal font-['Poppins']"></div>
                <div className="w-16 h-16 relative">
                    <div className="w-16 h-16 left-0 top-0 absolute bg-lime-50 rounded-full" />
                    <img className="w-[42px] h-[61.64px] left-[11px] top-[2px] absolute shadow" src="Intersect.png" />
                </div>
            </div>
        </div>
    </div>
</div>);
}