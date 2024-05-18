import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet/index.css";
import reportWebVitals from "./reportWebVitals";
import ManageVideoOnCanvas from "./components/ManageVideoOnCanvas";

const root = ReactDOM.createRoot(document.getElementById("root"));    
root.render(<ManageVideoOnCanvas />);

reportWebVitals(console.log);
    

