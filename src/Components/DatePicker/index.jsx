import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function DatePicker() {
  return (
    <div className="bg-zinc-800 flex flex-row flex-1 items-center rounded h-14 shadow">
      <div className="px-4 cursor-pointer">
        <IoMdArrowDropleft color="white" size={28} />
      </div>
      <p className="flex-1 font-poppins text-zinc-300 text-center">Junho de 2022</p>
      <div className="px-4 cursor-pointer">
        <IoMdArrowDropright size={28} color="white" />
      </div>
    </div>
  );
}
