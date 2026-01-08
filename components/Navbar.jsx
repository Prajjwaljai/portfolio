import React from "react";
import { navLinks } from "#constants";
import dayjs from "dayjs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Prajjwal's Portfolio</p>
        <ul>
          {navLinks.map(({id, name}) => (
          <li key={id}>
            <p>{name}</p>
          </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
            {
                navLinks.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} className="icom-hover" alt={`icon-${id}`} />
                    </li>
                ))
            }
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
