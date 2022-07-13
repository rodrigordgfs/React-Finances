import Axios from "../adapters/axios";

class TransactionsService extends Axios {
  constructor() {
    super({
      url: "transactions",
      config: {
        baseURL: "https://capable-fish-meat.glitch.me/",
      },
    });
  }
}

export default new TransactionsService();
