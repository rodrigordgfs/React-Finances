import Axios from "../adapters/axios";

class TransactionsService extends Axios {
  constructor() {
    super({
      url : "transactions",
      config : {
        baseURL : "http://localhost:8888/",
      },
    });
  }
}

export default new TransactionsService();
