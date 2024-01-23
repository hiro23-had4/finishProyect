"use client"
import { useState } from "react";
import '@/app/cssCliente/cliente.css';
import Link from "next/link"


function NavBarVendedor() {
    //menu responsive
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // carrito compras
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <>
            <header className='header'>
                <div className='header_contenedor'>
                    <div className='header_info'>
                        <div className='header_datos'>
                            <p className='header_datos_per'>Hola <span>Brayan</span></p>
                            <p className='header_cliente'>Vendedor</p>
                        </div>
                        <img src='/img/vendedor_02.jpg' alt='foto cliente' className='header_img' />
                    </div>

                    <Link href='/vendedor' className='header_logo'>SGVC</Link>
                    <div className='header_search'>
                        <input type="search" className='input_search' />
                        <button type='submit' className='search_button'>
                            <svg className='w-4 h-4 m-auto' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
                    {/* <div className='header_search'>
                        <input type='search' placeholder='Buscar' className='header_input' />
                        <i class="bx bx-search header_icon"></i>
                    </div> */}
                    <div className='header_toggle' onClick={toggleMenu}>
                        <i class={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id='header_toggle'></i>
                    </div>
                </div>
            </header>

            {/* NAVEGACION */}
            <div className={`nav ${isMenuOpen ? 'show-menu' : ''} `} id='navbar'>
                <nav className='nav_container'>
                    <div>
                        <Link href='/vendedor' className='nav_link nav_logo'>
                            <i class="bx bx-disc nav_icon"></i>
                            <span className='nav_logo-name'>SGVC</span>
                        </Link>

                        <div className='nav_list'>
                            <div className='nav_items'>
                                <h3 className='nav_subtitle'>Menu</h3>
                                <Link href='/vendedor' className='nav_link'>
                                    <i className="bx bx-home nav_icon"></i>
                                    <span className='nav_name'>Home</span>
                                </Link>

                                <Link href='/vendedor/formAgregar' className='nav_link'>
                                    <i class="fa-solid fa-plus nav_icon"></i>
                                    <span className='nav_name'>Agregar Producto</span>
                                </Link>

                                <Link href='/vendedor/producto' className='nav_link'>
                                    <i class="fa-solid fa-bag-shopping nav_icon"></i>
                                    <span className='nav_name'>Productos</span>
                                </Link>
                                <Link href='/vendedor/pedido' className='nav_link'>
                                    <i class="fa-solid fa-table nav_icon"></i>
                                    <span className='nav_name'>Tabla Pedidos</span>
                                </Link>
                                {/* <!----> */}
                            </div>

                            <div className='nav_items'>
                                <h3 className='nav_subtitle'>Profile</h3>

                                <div className='nav_dropdown'>
                                    <Link href='' className='nav_link'>
                                        <i className="bx bx-user nav_icon"></i>
                                        <span className='nav_name'>Perfíl</span>
                                        <i className="bx bx-chevron-down nav_icon nav_dropdown-icon"></i>
                                    </Link>

                                    <div className='nav_dropdown-collapse'>
                                        <div className='nav_dropdown-content'>
                                            <Link href='/vendedor/actDatos' className='nav_link nav_dropdown-item'>Actualizar Datos</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Politica y Privacidad</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='nav_dropdown'>
                                    <Link href='' className='nav_link'>
                                        <i className='bx bx-bell nav_icon'></i>
                                        <span className='nav_name'>Notificaciones</span>
                                        <i className='bx bx-chevron-down nav_icon nav_dropdown-icon'></i>
                                    </Link>

                                    <div className='nav_dropdown-collapse'>
                                        <div className='nav_dropdown-content'>
                                            <Link href='' className='nav_link nav_dropdown-item'>Blocked</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Silenced</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Publish</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Program</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Link href='' className='nav_link nav_logout'>
                        <i className='bx bx-log-out nav_icon'></i>
                        <span className='nav_name'>Cerrar Sesión</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default NavBarVendedor;