import { PlusCircleIcon, PrinterIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/Transaction";
import { ICONS_COLOR } from "../../utils/colors";
import { infoMessage } from "../../utils/toastify";
import DatePicker from "../DatePicker";
import IconButton from "../IconButton";
import Modal from "../Modal";

export default function Options() {
  const { selectedTransaction, setIsModalOpened } =
    useContext(TransactionContext);

  const modalTitle = () =>
    selectedTransaction ? "EDITAR TRANSAÇÃO" : "NOVA TRANSAÇÃO";

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  const handleCreateReport = () => {
    infoMessage("Em breve!!!");
  };

  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-4">
      <div className="max-w-full md:w-2/4 w-full flex flex-row items-center space-x-4">
        <DatePicker />
        <IconButton onButtonClick={handleOpenModal}>
          <PlusCircleIcon className={`h-8 w-8 ${ICONS_COLOR}`} />
        </IconButton>
        <IconButton onButtonClick={handleCreateReport}>
          <PrinterIcon className={`h-8 w-8 ${ICONS_COLOR}`} />
        </IconButton>
      </div>
      <Modal title={modalTitle()} />
    </div>
  );
}
