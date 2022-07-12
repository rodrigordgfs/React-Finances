import { AiOutlinePlus } from "react-icons/ai";
import Transaction from "../Transaction";

export default function Transactions() {
  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-6">
      <div className="flex flex-row items-center space-x-2">
        <AiOutlinePlus color="white" />
        <p className="font-poppins text-white">Minhas Transações</p>
      </div>
      <div className="bg-zinc-800 rounded shadow my-4 p-4 space-y-2">
        <p className="font-poppins text-zinc-300 text-center">
          Nesse mês foi cadastrado{" "}
          <span className="font-semibold text-white">3</span> itens.
        </p>
        <div className="space-y-5">
            <Transaction
                isRecept={true}
                title="Pagamento da Empresa"
                type="Salário"
                value={3456.25}
                date="2022-07-12"
            />
            <Transaction
                title="Compras do Mês"
                type="Alimentação"
                value={650.48}
                date="2022-07-10"
            />
            <Transaction
                title="Aluguel da Cadsa"
                type="Moradia"
                value={1200.00}
                date="2022-07-6"
            />
        </div>
      </div>
    </div>
  );
}
