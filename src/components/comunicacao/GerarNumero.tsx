import Area from "../template/Area";

interface GerarNumeroProps{
    numero1: number
    numero2: number
    gerarNumero: (resultado: number) => void
}

export default function GerarNumero( props: GerarNumeroProps) {
    const min = Math.min(props.numero1, props.numero2)
    const max = Math.max(props.numero1, props.numero2)

    function gerar() {
        const aleatorio = Math.round(Math.random() * (max - min) + min)
        props.gerarNumero?.(aleatorio)
    }
    return(
        <Area titulo="Gerar Numero" cor="blue">
            <div className="flex gap-5 items-center justify-center">
            <div className="flex gap-10 text-3xl font-bold">
                <span>Min: {min}</span>
                <span>Max: {max}</span>
            </div>
            <button className="bg-zinc-700 w-20 py-2 rounded-xl text-white hover:bg-violet-700" 
                onClick={gerar}>Gerar</button>
            </div>
        </Area>
    )
}