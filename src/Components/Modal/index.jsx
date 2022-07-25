import { XIcon } from "@heroicons/react/outline";
import { useContext, useEffect } from "react";
import ReactModal from "react-modal";
import { TransactionContext } from "../../contexts/Transaction";
import { ICONS_COLOR, TEXT_PRIMARY_COLOR } from "../../utils/colors";
import Form from "../Form";
import IconButton from "../IconButton";
import "./index.css";

ReactModal.setAppElement("#root");

export default function Modal({ title }) {
  const {
    isModalOpened,
    setIsModalOpened,
    getTransactions,
    selectedTransaction,
    setSelectedTransaction,
  } = useContext(TransactionContext);
  const theme = JSON.parse(localStorage.getItem("theme"));
  console.log(theme);

  const handleClose = () => {
    setIsModalOpened(false);
    getTransactions();
    setSelectedTransaction(null);
  };

  useEffect(() => {
    if (selectedTransaction) {
      setIsModalOpened(true);
    }
  }, [selectedTransaction]);

  return (
    <ReactModal
      isOpen={isModalOpened}
      onRequestClose={handleClose}
      overlayClassName={`${
        theme === "dark" ? "modal-overlay-dark" : "modal-overlay-light"
      }`}
      className={`${
        theme === "dark" ? "modal-content-dark" : "modal-content-light"
      }`}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <h2
          className={`font-poppins ${TEXT_PRIMARY_COLOR} font-semibold text-2xl`}
        >
          {title}
        </h2>
        <IconButton onButtonClick={handleClose}>
          <XIcon className={`h-7 w-7 ${ICONS_COLOR}`} />
        </IconButton>
      </div>
      <Form />
    </ReactModal>
  );
}
