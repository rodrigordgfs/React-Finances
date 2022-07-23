import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransactionProvider } from "../contexts/Transaction";
import Home from "../Pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TransactionProvider>
              <Home />
            </TransactionProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
