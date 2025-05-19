import "./src/styles/global.css";
import { initGA } from "./src/utils/analytics";

export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    initGA();
  }
};
