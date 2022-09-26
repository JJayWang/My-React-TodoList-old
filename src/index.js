import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="List" element={<List></List>}></Route>
          <Route path="Done" element={<Done></Done>}></Route>
          <Route path="Category" element={<Category></Category>}></Route>
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
