import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Display(){
    const { numero } = useContext(ContadorContext) 
    return(
        <Area titulo="Valor total" cor="blue">
            <span className="font-black text-6xl text-white">{ numero }</span>
        </Area>
    )
}