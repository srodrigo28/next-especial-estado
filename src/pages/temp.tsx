import Area from "@/components/template/Area";

export default function Temp(){
    return(
        <div className="p-20 bg-black gap-5 text-white h-screen">
            <Area titulo="Teste do componente" cor="blue">
                <div>1</div>
                <div>2</div>
                <div>2</div>
            </Area>
            <Area titulo="Teste do componente" cor="red" sumario="R$ 1.200,56">
                <div>1</div>
                <div>2</div>
                <div>2</div>
            </Area>
        </div>
    )
}