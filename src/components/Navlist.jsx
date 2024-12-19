/* eslint-disable react/prop-types */

import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
export default function Navlist({ li, className, itemclass }) {
  console.log(li);
  return (
    <ul className={className}>
      {li.map((item, index) => (
        <Link
          to={
            item == "Home"
              ? "/"
              : item == "Shop"
              ? "/shop"
              : item == "About"
              ? "/about"
              : item == "Contact"
              ? "/contact"
              : "/"
          }
          key={index}
          className={itemclass}
        >
          {item}
        </Link>
      ))}
    </ul>
  );
}
