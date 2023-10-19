export default function EncuestaBox(props){
    return (<div className="w-[1360px] h-[803px] px-10 py-6 bg-slate-500 bg-opacity-20 rounded-2xl flex-col justify-center items-center gap-10 inline-flex">
    <div className="self-stretch h-[457px] flex-col justify-center items-end gap-14 flex">
        <div className="self-stretch h-[353px] flex-col justify-center items-center gap-14 flex">
            <div className="self-stretch h-[125px] flex-col justify-center items-center gap-6 flex">
                <div className="self-stretch text-center text-stone-50 text-3xl font-normal font-['Poppins'] leading-[39px]">¿Notas que el menor tiene problemas de incontinencia, como enuresis o encopresis?</div>
                <div className="self-stretch text-center text-zinc-400 text-2xl font-normal font-['Poppins'] leading-[31.20px]">La enuresis es la incapacidad de controlar la orina y la encopresis es la incontinencia fecal en niños que ya han alcanzado una edad en la que se espera que tengan control sobre estas funciones.</div>
            </div>
            <div className="self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-[74px] px-4 py-6 bg-stone-50 rounded-lg justify-start items-center gap-4 flex">
                        <div className="w-5 h-5 rounded-xl justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                        </div>
                        <div className="grow shrink basis-0 text-zinc-800 text-xl font-normal font-['Poppins'] leading-relaxed">No sabe, no contesta.</div>
                    </div>
                    <div className="grow shrink basis-0 h-[74px] px-4 py-6 bg-stone-50 rounded-lg justify-start items-center gap-4 flex">
                        <div className="w-5 h-5 rounded-xl justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                        </div>
                        <div className="grow shrink basis-0 text-zinc-800 text-xl font-normal font-['Poppins'] leading-relaxed">No tiene problema.</div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-[74px] px-4 py-6 bg-stone-50 rounded-lg justify-start items-center gap-4 flex">
                        <div className="w-5 h-5 rounded-xl justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                        </div>
                        <div className="grow shrink basis-0 text-zinc-800 text-xl font-normal font-['Poppins'] leading-relaxed">Sí, frecuentemente.</div>
                    </div>
                    <div className="grow shrink basis-0 h-[74px] px-4 py-6 bg-stone-50 rounded-lg justify-start items-center gap-4 flex">
                        <div className="w-5 h-5 rounded-xl justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                        </div>
                        <div className="grow shrink basis-0 text-zinc-800 text-xl font-normal font-['Poppins'] leading-relaxed">Solo ocurrió una vez.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-12 px-[17px] py-3.5 bg-stone-50 rounded-md shadow border border-gray-200 justify-center items-center inline-flex">
            <div className="justify-center items-center gap-2 flex">
                <div className="text-center text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Siguiente</div>
                <img className="w-6 h-6 relative" src="Arrow right.png"/>
            </div>
        </div>
    </div>
</div>);
}