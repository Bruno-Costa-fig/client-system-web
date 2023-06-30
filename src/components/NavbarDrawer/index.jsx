import { useState } from "react";
import MenuLeftIcon from "../icons/MenuLeftIcon";
import MenuRightIcon from "../icons/MenuRightIcon";
import HomeIcon from "../icons/HomeIcon";
import MapIcon from "../icons/MapIcon";
import NavItem from "./NavItem";
import MenuProfile from "./MenuProfile";

function NavbarDrawer() {
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen((state) => !state)
  }

  return ( 
    <header style={{zIndex: 1000}} title="Cabeçalho com menu de navegação" className="fixed header-component w-screen h-16 bg-white shadow-lg shadow-slave-100 flex justify-center align-center">
      {open && <nav className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg shadow-gray-100">
        <div className="w-full h-16 px-5 mb-5 flex items-center justify-between">
          <img src="/logo.svg" width={180} alt="Logo" />
          <MenuRightIcon handleclick={handleDrawer} title="Ícone Menu"/>
        </div>
        <div>
          <p className="paragraph-sm uppercase ms-5 mb-5">Principal</p>
          <ul className="">
            <NavItem to="/" text="Página Inicial">
              <HomeIcon />
            </NavItem>
            <NavItem to="/mapa-lojas" text="Lojas parceiras">
              <MapIcon />
            </NavItem>
          </ul>
        </div>
      </nav>}
      <div aria-label="appbar" className="w-full mx-5 flex justify-between">
        <MenuLeftIcon handleclick={handleDrawer} title="Ícone Menu"/>
        <MenuProfile />
      </div>
    </header>
  );
}

export default NavbarDrawer;