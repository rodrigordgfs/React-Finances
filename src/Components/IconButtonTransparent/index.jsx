import { SECONDARY_COLOR_HOVER } from "../../utils/colors";

export default function IconButtonTransparent({
  children,
  onButtonClick = null,
}) {
  const handleOnClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <button
      onClick={handleOnClick}
      className={`p-2 rounded-full cursor-pointer ${SECONDARY_COLOR_HOVER} transition-all`}
    >
      {children}
    </button>
  );
}
