import React from "react";
import ReactDOMClient from "react-dom/client";
import { MacbookAir } from "./screens/MacbookAir";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MacbookAir />);
