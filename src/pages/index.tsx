import MenuItem from "@/components/template/MenuItem";
import { IconArrowDown, IconForms } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="
      flex flex-col justify-center items-center h-screen
      bg-gradient-to-br from-zinc-800 to-black
      text-white gap-20
    "
    >
      <div className="text-6xl">
        <span className="opacity-40 font-thin">Gerenciamento de </span>
        <span className="font-black gradientText">Estado</span>
      </div>
      <div className="flex flex-wrap w-3/6 justify-around">
        <MenuItem icone={ <IconForms /> } texto="Estado" url="/revisao/estado" />
        <MenuItem icone={ <IconArrowDown /> } texto="Comunicacao" url="/revisao/comunicacao" />
      </div>
    </div>
  );
}
