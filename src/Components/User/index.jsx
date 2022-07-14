import {
  SECONDARY_COLOR,
  SECONDARY_COLOR_HOVER,
  TEXT_PRIMARY_COLOR,
} from "../../utils/colors";

export default function User({ name }) {
  return (
    <div
      className={`flex items-center px-4 py-2 ${SECONDARY_COLOR} ${SECONDARY_COLOR_HOVER} transition-all cursor-pointer rounded shadow`}
    >
      <p className={`${TEXT_PRIMARY_COLOR} font-poppins`}>{name}</p>
    </div>
  );
}
