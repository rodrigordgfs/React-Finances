import ReactModal from "react-modal";
import IconButton from "../IconButton";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";
import Form from "../Form";
import { v4 as uuidv4 } from "uuid";
import TransactionService from "../../services/transactions";
import { errorMessage, successMessage } from "../../utils/toastify";

ReactModal.setAppElement("#root");

export default function Modal({
  isOpen,
  onRequestClose,
  title,
  selectedTransaction,
}) {
  const handleClose = (newTransaction = false) => {
    if (onRequestClose) {
      onRequestClose(newTransaction);
    }
  };

  const handleSubmitData = (data) => {
    const body = {
      id: selectedTransaction ? selectedTransaction.id : uuidv4(),
      title: data.title,
      amount: data.value,
      category: data.category,
      type: data.type,
      date: data.date,
    };
    if (selectedTransaction) {
      TransactionService.patch(selectedTransaction.id, body)
        .then(() => {
          successMessage("Transação atualizada com sucesso!");
          handleClose(true);
        })
        .catch(({ message }) => {
          errorMessage(message);
        });
    } else {
      TransactionService.post(body)
        .then(() => {
          successMessage("Transação adicionada com sucesso!");
          handleClose(true);
        })
        .catch(({ message }) => {
          errorMessage(message);
        });
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="font-poppins text-zinc-50 font-semibold text-2xl">
          {title}
        </h2>
        <IconButton onButtonClick={handleClose}>
          <AiOutlineClose size={28} color="white" />
        </IconButton>
      </div>
      <Form
        onSubmitData={handleSubmitData}
        selectedTransaction={selectedTransaction}
      />
    </ReactModal>
  );
}
