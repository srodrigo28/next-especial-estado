import Area from "@/components/template/Area";
import { useState } from "react";

export default function ResisaoEstado() {
    const [texto, setTetxto] = useState('')
    return(
        <div className="p-20 bg-black h-screen">
            <Area titulo="Revisão Estado" cor="sky" sumario="UseState #01">
                <input type="text" className="input" 
                    value={texto} onChange={ e => setTetxto(e.target.value)}
                />
                <p>{texto}</p>
            </Area>
        </div>
    )
}