import { useState } from "react";
import Link from "../Link/Link";
import { FaBeer } from 'react-icons/fa';
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
   const [open, setOpen] = useState(true)

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:userId", name: "User Profile" },
  ];
  return (
    <nav className="text-2xl text-black p-3 bg-yellow-600">
      <FaBeer></FaBeer>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {
           open === true ? "open" : "close"
        }
        <MdMenuOpen></MdMenuOpen>
      </div>

      <ul className={`md:flex duration-1000  absolute ${open ? 'top-30' : '-top-60'} bg-yellow-600 px-3 shadow-lg`}>
        {
          routes.map(route => <Link  key={route.id} route={route} ></Link> )
        }
      </ul>
    </nav>
  );
};

//

export default Navbar;
