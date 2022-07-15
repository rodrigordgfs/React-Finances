import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  INFO_COLOR,
  INFO_COLOR_HOVER,
  POSITIVE_COLOR,
  POSITIVE_COLOR_HOVER,
  TEXT_PRIMARY_COLOR,
} from "../../utils/colors";
import { CATEGORIES_OPTIONS, TYPES_OPTIONS } from "../../utils/constants";

export default function Form({ onSubmitData = null, selectedTransaction }) {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (selectedTransaction) {
      setValue("type", selectedTransaction.type);
      setValue("category", selectedTransaction.category);
      setValue("title", selectedTransaction.title);
      setValue("value", selectedTransaction.amount);
      setValue("date", selectedTransaction.date);
    }
  }, [selectedTransaction]);

  const onSubmit = (data) => {
    if (onSubmitData) {
      onSubmitData(data);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label
        className={`font-poppins ${TEXT_PRIMARY_COLOR} mb-1 mt-2`}
        htmlFor="type"
      >
        Tipo
      </label>
      <select
        className="font-poppins p-2 rounded shadow-md"
        name="type"
        id="type"
        required
        {...register("type")}
      >
        {TYPES_OPTIONS.map(({ id, name }) => {
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <label
        className={`font-poppins ${TEXT_PRIMARY_COLOR} mb-1 pt-2`}
        htmlFor="title"
      >
        Descrição
      </label>
      <input
        {...register("title")}
        className="font-poppins p-2 rounded shadow-md"
        type="text"
        id="title"
        maxLength={30}
        required
      />
      <label
        className={`font-poppins ${TEXT_PRIMARY_COLOR} mb-1 mt-2`}
        htmlFor="value"
      >
        Valor
      </label>
      <input
        className="font-poppins p-2 rounded shadow-md"
        {...register("value")}
        type="number"
        step="any"
        id="value"
        required
      />
      <label
        className={`font-poppins ${TEXT_PRIMARY_COLOR} mb-1 mt-2`}
        htmlFor="categoria"
      >
        Categoria
      </label>
      <select
        className="font-poppins p-2 rounded shadow-md"
        name="categoria"
        id="categoria"
        required
        {...register("category")}
      >
        {CATEGORIES_OPTIONS.map(({ id, name }) => {
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <label
        className={`font-poppins ${TEXT_PRIMARY_COLOR} mb-1 mt-2`}
        htmlFor="date"
      >
        Data
      </label>
      <input
        className="font-poppins p-2 rounded shadow-md"
        type="date"
        id="date"
        required
        {...register("date")}
      />
      <div className="flex flex-row justify-end my-4 gap-4 w-full">
        <input
          type="reset"
          className={`${INFO_COLOR} ${INFO_COLOR_HOVER} ${TEXT_PRIMARY_COLOR} transition-all px-6 py-2 rounded shadow-md font-poppin font-semibold cursor-pointer`}
        />
        <input
          type="submit"
          className={`${POSITIVE_COLOR} ${POSITIVE_COLOR_HOVER} ${TEXT_PRIMARY_COLOR} transition-all cursor-pointer px-6 py-2 rounded shadow-md font-poppin font-semibold`}
        />
      </div>
    </form>
  );
}
