import { useState } from "react";
import Area from "../template/Area";
import GerarNumero from "./GerarNumero";

export default function Mostrador() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [resultado, setResultado] = useState(0)

    function exibirResultado(numero: number){
        setResultado(numero)
    }
    return(
        <div className="p-20 bg-black h-screen">
            <Area titulo="Revisão Estado" cor="red" sumario="Mostrador">
                <div className="text-6xl text-white flex justify-center items-center font-bold">
                    {resultado}
                </div>
                <div className="flex gap-5 p-5">
                    <input type="number" className="input" placeholder="n1"
                        value={n1} onChange={e => setN1(+e.target.value)}
                    />
                    <input type="number" className="input" placeholder="n2"
                        value={n2} onChange={e => setN2(+e.target.value)}
                    />
                </div>
                <GerarNumero numero1={n1} numero2={n2}  gerarNumero={exibirResultado}/>
            </Area>
        </div>
    )
}