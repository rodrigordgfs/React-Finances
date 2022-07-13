import DatePicker from "../DatePicker";
import IconButton from "../IconButton";
import { AiFillPrinter, AiOutlinePlusCircle } from "react-icons/ai";

export default function Options() {
  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-4">
      <div className="max-w-full md:w-2/4 w-full flex flex-row items-center space-x-4">
        <DatePicker />
        <IconButton>
          <AiOutlinePlusCircle size={28} color="white" />
        </IconButton>
        <IconButton>
          <AiFillPrinter size={28} color="white" />
        </IconButton>
      </div>
    </div>
  );
}
