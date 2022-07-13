import DatePicker from "../DatePicker";
import IconButton from "../IconButton";
import { AiFillPrinter, AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal";
import { useState } from "react";

export default function Options({
  handleNewTransaction = null,
  date,
  onDateChange,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal(newTransaction) {
    setIsModalOpen(false);
    if (newTransaction) {
      handleNewTransaction();
    }
  }

  function handleOnChageDate(date) {
    if (onDateChange) {
      onDateChange(date);
    }
  }

  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-4">
      <div className="max-w-full md:w-2/4 w-full flex flex-row items-center space-x-4">
        <DatePicker currentDate={date} onDateChange={handleOnChageDate} />
        <IconButton onButtonClick={handleOpenModal}>
          <AiOutlinePlusCircle size={28} color="white" />
        </IconButton>
        <IconButton>
          <AiFillPrinter size={28} color="white" />
        </IconButton>
      </div>
      <Modal
        title="NOVA TRANSAÇÃO"
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </div>
  );
}
