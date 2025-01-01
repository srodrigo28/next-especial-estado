import Link from "next/link";

export default function NotFound404(){
    return(
        <div className="bg-black text-white h-screen flex flex-col gap-4 p-10 items-center w-screen ">
            <h1> Página não encontrada </h1>
            <Link href="/" className="bg-red-700 p-3 rounded-xl text-white">Voltar</Link>
        </div>
    )
}