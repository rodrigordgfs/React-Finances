import {
  ArrowNarrowDownIcon, ArrowNarrowUpIcon, ScaleIcon
} from "@heroicons/react/outline";
import {
  ICONS_COLOR, NEGATIVE_COLOR,
  POSITIVE_COLOR, SECONDARY_COLOR
} from "../../utils/colors";
import { formatedMoney } from "../../utils/moneyFormat";
import Card from "../Card";

export default function Cards({ revenue = 0, expense = 0, balance = 0 }) {
  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2">
      <div className="flex md:flex-row flex-col items-center gap-5">
        <Card
          title="Receita"
          description={formatedMoney(revenue || 0)}
          color={SECONDARY_COLOR}
        >
          <ArrowNarrowUpIcon className={`h-9 w-9 ${ICONS_COLOR}`} />
        </Card>
        <Card
          title="Despesa"
          description={formatedMoney(expense || 0)}
          color={SECONDARY_COLOR}
        >
          <ArrowNarrowDownIcon className={`h-9 w-9 ${ICONS_COLOR}`} />
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
          <ScaleIcon className={`h-9 w-9 ${ICONS_COLOR}`} />
        </Card>
      </div>
    </div>
  );
}
