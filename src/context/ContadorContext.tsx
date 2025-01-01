import { createContext, useState } from "react"

interface ContadorCOntextProps{
    numero: number
    incrementar: () => void
    decrementar: () => void
}

const ContadorContext = createContext( {} as ContadorCOntextProps)

export function ContadorProvider(props: any){
    const [numero, setNumero] = useState(3)

    function incrementar(){
        setNumero(numero + 1)
    }
    function decrementar(){
        if(numero > 0){
            setNumero(numero - 1)
        }
    }
    return(
        <ContadorContext.Provider value={
            { numero, incrementar, decrementar}
        }>
            {props.children}
        </ContadorContext.Provider>
    )
}

export default ContadorContext