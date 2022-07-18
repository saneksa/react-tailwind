import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <div className="flex py-4 px-4 justify-center items-start h-full w-full">
      <div className="flex space-x-8 subpixel-antialiased  animate-bounce">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div>
      </div>
    </div>
  );
}
