import MenuItem from "@/components/template/MenuItem";
import { IconForms } from "@tabler/icons-react";

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
      <div>
        <MenuItem icone={ <IconForms /> } texto="Estado" url="/revisao/estado" />
      </div>
    </div>
  );
}
