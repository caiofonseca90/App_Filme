import { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const Hamburguer = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  
  const Menu = [
    {title:'Introdução',link:'#intro'},
    {title:'Sobre',link:'#about'},
    {title:'Skills',link:'#skills'},
    {title:'Projetos',link:'#projects'},
    {title:'Contato',link:'#contacts'},
  ];
  
  function openNav () {
    setOpenNavBar(!openNavBar);
  }
  return (
    
    <div id="menuhamb">
        {openNavBar ? (
          // icon close menu
          <div className=" ">
            <AiOutlineClose
              onClick={openNav}className="custom-menu-hamburguer z-30"
            />  
            <nav className="border h-screen right-0 top-16 fixed z-20 bg-neutral-950 rounded-3xl ">
              <ul className="text-white ">
                {Menu.map((menu,index) => (
                  <a href={menu.link} key={index}
                  className="hover:text-purple-400 font-semibold hover:scale-110 bg-transparent duration-200 flex text-center justify-center px-20">
                    {menu.title}
                  </a>
                ))}
              </ul>
            </nav>
          </div>
        ) : (
          // icon open menu
          <AiOutlineMenu 
            onClick={openNav}className="custom-menu-hamburguer z-30"
          />
        )}
    </div>
)
}

export default Hamburguer