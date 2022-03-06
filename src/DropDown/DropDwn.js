import { useRef, useState } from "react";
import "./Dropdown.css";

export default function Dropdown({ options, title }) {
  const [open, setOpen] = useState(false);
  const dropDown = useRef();

  // const close = () => setOpen(false);

  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     if (!dropDown.current.contains(e.target)) close();
  //   });
  //   return () => {
  //     window.removeEventListener("click", close);
  //   };
  // });

  return (
    <div className="dropdown" ref={dropDown}>
      <button className="btn" onClick={() => setOpen(!open)}>
        {title}
      </button>
      {open && (
        <ul className="options">
          {options.map((option) => (
            <li key={option.url}>
              <a href={option.url}> {option.label}</a>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
