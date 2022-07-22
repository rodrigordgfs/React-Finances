import Axios from "../adapters/axios";

class TransactionsService extends Axios {
  constructor() {
    super({
      url: "transactions",
      config: {
        baseURL: "https://api-finance-react.herokuapp.com/",
      },
    });
  }
}

export default new TransactionsService();
 