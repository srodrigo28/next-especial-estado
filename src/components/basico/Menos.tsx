import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Menos(){
    const { decrementar } = useContext(ContadorContext)
    return(
        <Area titulo="Botão Menos" cor="red">
            <button className="bg-red-700 text-white py-4 px-5 rounded-full"
                onClick={ decrementar }
            > -1 </button>
        </Area>
    )
}