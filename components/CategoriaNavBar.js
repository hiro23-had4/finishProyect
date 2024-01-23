"use client"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function CategoriaNavBar() {
    const [isOpen, setIsOpen] = useState({
        menu1: false,
        menu2: false,
        menu3: false,
    });

    const toggleMenu = (menu) => {
        setIsOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const closeMenus = (event) => {
        // Verificar si el clic ocurrió fuera del área del botón y el submenu
        const isClickInsideMenu1 = menuRef1.current?.contains(event.target);
        const isClickInsideMenu2 = menuRef2.current?.contains(event.target);
        const isClickInsideMenu3 = menuRef3.current?.contains(event.target);

        if (!isClickInsideMenu1 && !isClickInsideMenu2 && !isClickInsideMenu3) {
            setIsOpen({
                menu1: false,
                menu2: false,
                menu3: false,
            });
        }
    };

    const menuRef1 = useRef(null);
    const menuRef2 = useRef(null);
    const menuRef3 = useRef(null);

    useEffect(() => {
        document.addEventListener('click', closeMenus);
        return () => {
            document.removeEventListener('click', closeMenus);
        };
    }, []);

    return (
        <>
            <div className='relative flex justify-evenly items-center bg-gray-100'>
                <div>
                    <button>
                        <Link href="">Todas las Categorías</Link>
                    </button>
                </div>
                <div>
                    <button>
                        <Link href="">Pedidos Realizados</Link>
                    </button>
                </div>
                <div>
                    <button>
                        <Link href="">Vendedores Favoritos</Link>
                    </button>
                </div>
                <div ref={menuRef1}>
                    <button onClick={() => toggleMenu('menu1')} className="p-2 hover:bg-slate-400"
                    >Categorías
                        {!isOpen.menu1 ? (
                            <i class="fa-solid fa-chevron-up ml-2"></i>
                        ) : (
                            <i class="fa-solid fa-chevron-down ml-2"></i>
                        )}
                    </button>
                    {isOpen.menu1 && (
                        <div className="bg-slate-200 absolute rounded-lg p-2 w-[180px] cursor-pointer">
                            <ul className="">
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Tratamiento Facial</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Protección Solar</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Cuidado Personal</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Desodorantes</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Delineador</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Maquillaje</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Colonias</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Perfumes</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Joyeria</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Labial</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div ref={menuRef2}>
                    <button onClick={() => toggleMenu('menu2')} className=""
                    >Precio
                        {!isOpen.menu2 ? (
                            <i class="fa-solid fa-chevron-up ml-2"></i>
                        ) : (
                            <i class="fa-solid fa-chevron-down ml-2"></i>
                        )}
                    </button>
                    {isOpen.menu2 && (
                        <div className="bg-slate-200 absolute  rounded-lg p-2 w-[150px] cursor-pointer">
                            <ul className="">
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Por Mayor</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Por Menor</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div ref={menuRef3}>
                    <button onClick={() => toggleMenu('menu3')} className=""
                    >Stock
                        {!isOpen.menu3 ? (
                            <i class="fa-solid fa-chevron-up ml-2"></i>
                        ) : (
                            <i class="fa-solid fa-chevron-down ml-2"></i>
                        )}
                    </button>
                    {isOpen.menu3 && (
                        <div className="bg-slate-200 absolute  rounded-lg p-2 w-[90px] cursor-pointer">
                            <ul className="">
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Stock +</li>
                                <li className="hover:bg-slate-300 rounded-r-lg p-2">Stock -</li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default CategoriaNavBar;
