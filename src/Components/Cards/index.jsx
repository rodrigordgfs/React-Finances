import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { AiFillBank } from "react-icons/ai";
import Card from "../Card";

export default function Cards() {
  return (
    <div className="text-white flex flex-col max-w-5xl my-0 mx-auto px-2">
      <div className="flex flex-row items-center space-x-4">
        <Card title="Receita" description="R$ 4.500,00" color="bg-zinc-800">
          <HiArrowNarrowUp size={28} />
        </Card>
        <Card title="Despesa" description="R$ 4.500,00" color="bg-zinc-800">
          <HiArrowNarrowDown size={28} />
        </Card>
        <Card title="Balanço" description="R$ 4.500,00" color="bg-green-700">
          <AiFillBank size={28} />
        </Card>
      </div>
    </div>
  );
}
