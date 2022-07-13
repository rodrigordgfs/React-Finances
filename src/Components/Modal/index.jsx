import ReactModal from "react-modal";
import IconButton from "../IconButton";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";
import Form from "../Form";
import { v4 as uuidv4 } from "uuid";

ReactModal.setAppElement("#root");

export default function Modal({ isOpen, onRequestClose, title }) {
  function handleClose() {
    if (onRequestClose) {
      onRequestClose();
    }
  }

  function handleSubmitData(data) {
    const body = {
      id: uuidv4(),
      title: data.title,
      ammount: data.value,
      category: data.category,
      type: data.type,
      date: data.date,
    };
    console.log(body);
  }

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
      <Form onSubmitData={handleSubmitData} />
    </ReactModal>
  );
}
