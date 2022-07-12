import ReactModal from "react-modal";
import IconButton from "../IconButton";
import { AiOutlineClose } from "react-icons/ai";
import "./index.css";
import { useRef, useState } from "react";
import moment from "moment";
import { warningMessage } from "../../utils/toast";

ReactModal.setAppElement("#root");

export default function Modal({ isOpen, onRequestClose, title }) {
  const descriptionRef = useRef(null);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(moment().format("yyyy-MM-DD"));

  const categories = [
    { id: 1, name: "Alimentação" },
    { id: 2, name: "Lazer" },
    { id: 3, name: "Transporte" },
    { id: 4, name: "Saúde" },
    { id: 5, name: "Moradia" },
    { id: 6, name: "Outros" },
  ];

  function handleClose() {
    if (onRequestClose) {
      onRequestClose();
    }
  }

  function handleSave() {
    if (description.trim() === "") {
        warningMessage("O campo descrição é obrigatório");
    } else if (value === 0 || value === "") {
        warningMessage("O campo valor é obrigatório");
    } else if (category === "") {
        warningMessage("O campo categoria é obrigatório");
    } else {

    }
    console.log(description, value, category, date);
  }

  function handleClearForm() {
    setDescription("");
    setValue("");
    setCategory("");
    setDate(moment().format("yyyy-MM-DD"));
    descriptionRef.current.focus();
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
      <form className="flex flex-col" onSubmit={handleSave}>
        <label className="font-poppins text-zinc-50 mb-1" htmlFor="title">
          Descrição
        </label>
        <input
          ref={descriptionRef}
          className="font-poppins p-2 rounded shadow"
          type="text"
          id="title"
          maxLength={30}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="font-poppins text-zinc-50 mb-1 mt-2" htmlFor="value">
          Valor
        </label>
        <input
          className="font-poppins p-2 rounded shadow"
          type="number"
          min={1}
          step="any"
          id="value"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label
          className="font-poppins text-zinc-50 mb-1 mt-2"
          htmlFor="categoria"
        >
          Categoria
        </label>
        <select
          className="font-poppins p-2 rounded shadow"
          name="categoria"
          id="categoria"
          required
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {categories.map(({ id, name }) => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <label className="font-poppins text-zinc-50 mb-1 mt-2" htmlFor="date">
          Data
        </label>
        <input
          className="font-poppins p-2 rounded shadow"
          type="date"
          id="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </form>
      <div className="flex flex-row justify-end my-4 gap-4">
        {/* <button className="bg-red-500 hover:bg-red-600 text-zinc-50 transition-all px-6 py-2 rounded shadow font-poppin font-semibold">
          Excluir
        </button> */}
        <button
          onClick={handleClearForm}
          className="bg-blue-500 hover:bg-blue-600 text-zinc-50 transition-all px-6 py-2 rounded shadow font-poppin font-semibold"
        >
          Limpar
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600 text-zinc-50 transition-all px-6 py-2 rounded shadow font-poppin font-semibold"
        >
          Salvar
        </button>
      </div>
    </ReactModal>
  );
}
