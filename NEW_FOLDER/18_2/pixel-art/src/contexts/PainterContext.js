import { createContext } from 'react';

export const colors = [
  { name: "white", hex: "#fff" },
  { name: "black", hex: "#000" },
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#00ff00" },
  { name: "blue", hex: "#0000ff" },
  { name: "pink", hex: "#ffa6c9" },
  { name: "yellow", hex: "#ffff00" },
  { name: "brown", hex: "#a52a2a" },
  { name: "light blue", hex: "#add8e6" },
  { name: "purple", hex: "#9370db" }
];

export const PainterContext = createContext();
