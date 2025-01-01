import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Mais(){
    const { incrementar } = useContext(ContadorContext)
    return(
        <Area titulo="Valor" cor="green">
            <button className="bg-green-700 text-white py-4 px-5 rounded-full"
                onClick={incrementar}
            > +1
            </button>
        </Area>
    )
}