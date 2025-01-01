interface AreaProps{
    titulo: string
    sumario?: string
    children: any
    cor?: string
}
export default function Area( props:  AreaProps, ){
    return(
        <div className={`
            bg-${props.cor}-500
            flex mb-10 flex-col items-center
            rounded-md w-full
        `}>
            <div className={
                ` p-5 ${props.sumario ? 'justify-between' : 'justify-center'}
                  flex w-full items-center h-14 text-3xl font-black opacity-75
                 bg-black bg-opacity-20 `
            }>
                <span className="px-4">{props.titulo}</span>
                {props.sumario && ( <span className="
                    rounded-md py-2 hover:opacity-100 px-2 ml-2 
                    font-semibold tracking-widest"> {props.sumario} </span>
                )}
            </div>
            <div className="p-7 flex items-center gap-3">{ props.children }</div>
        </div>
    )
}