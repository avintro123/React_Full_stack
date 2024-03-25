import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  childern: "Click me to visit google",
};

const MyApp = () => {
  return (
    <div>
      <h1>Custim react app</h1>
    </div>
  );
};

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
