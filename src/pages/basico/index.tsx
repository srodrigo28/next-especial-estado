import Mais from "@/components/basico/Mais";
import Menos from "@/components/basico/Menos";
import Display from "@/components/basico/Valor";
import {ContadorProvider} from "@/context/ContadorContext";

export default function Valor(){
    return(
        <div className="p-20 bg-black h-screen">
            <ContadorProvider>
                <Display />
                <div className="flex gap-5">
                    <Menos  />
                    <Mais />
                </div>
            </ContadorProvider>
        </div>
    )
}