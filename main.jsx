import { createRoot } from "react-dom/client";
import AppLayout from "./src/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<AppLayout />);
