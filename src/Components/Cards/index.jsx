import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { AiFillBank } from "react-icons/ai";
import Card from "../Card";
import { formatedMoney } from "../../utils/moneyFormat";
import {
  SECONDARY_COLOR,
  NEGATIVE_COLOR,
  POSITIVE_COLOR,
  WHITE,
} from "../../utils/colors";

export default function Cards({ revenue = 0, expense = 0, balance = 0 }) {
  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2">
      <div className="flex md:flex-row flex-col items-center gap-5">
        <Card
          title="Receita"
          description={formatedMoney(revenue || 0)}
          color={SECONDARY_COLOR}
        >
          <HiArrowNarrowUp size={28} color={WHITE} />
        </Card>
        <Card
          title="Despesa"
          description={formatedMoney(expense || 0)}
          color={SECONDARY_COLOR}
        >
          <HiArrowNarrowDown size={28} color={WHITE} />
        </Card>
        <Card
          title="Balanço"
          description={formatedMoney(balance || 0)}
          color={
            balance === 0
              ? `${SECONDARY_COLOR}`
              : balance < 0
              ? `${NEGATIVE_COLOR}`
              : `${POSITIVE_COLOR}`
          }
        >
          <AiFillBank size={28} color={WHITE} />
        </Card>
      </div>
    </div>
  );
}
