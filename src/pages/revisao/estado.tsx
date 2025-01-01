import Area from "@/components/template/Area";

export default function ResisaoEstado() {
    return(
        <div className="p-20 bg-black h-screen">
            <Area titulo="Revisão Estado" cor="sky">
                <input type="text" className="input" />
            </Area>
        </div>
    )
}