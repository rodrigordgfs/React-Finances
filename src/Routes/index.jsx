import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransactionProvider } from "../contexts/Transaction";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

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
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
