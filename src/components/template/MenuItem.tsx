import Link from "next/link";
import React from "react";

interface MenuItemProps{
    icone: any
    texto: string
    url: string
}

export default function MenuItem( props : MenuItemProps){
    return(
        <Link href={props.url} className="flex flex-col items-center gap-2">
            <span className=" rounded-full p-5
                bg-gradient-to-r from-blue-500 to-green-500 animate-pulse ">
                {React.cloneElement(props.icone, {
                    size: 70, stroke: 1, className: 'opacity-40'
                })}
            </span>
            <span className="opacity-30 text-white text-3xl mt-2 gradientText">
                {props.texto}
            </span>
        </Link>
    )
}