"use client"
import { useState } from "react";
import '@/app/cssCliente/cliente.css';
import Link from "next/link"


function NavBarHome() {
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
                            <p className='header_cliente'>cliente</p>
                        </div>
                        <img src='img/vendedor_02.jpg' alt='foto cliente' className='header_img' />
                        <div className='icon_cart' onClick={toggleCart}>
                            <i class='bx bxs-cart-alt cart_icon'></i>
                            <span className='cart_num'>0</span>
                        </div>
                    </div>

                    <Link href='/cliente' className='header_logo'>SGVC</Link>
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

            {/* carrito */}
            <div className={`cartTab ${isCartOpen ? 'showCart' : ''}`}>
                <h1 className='cart_title'>Shopping Cart</h1>
                <div className='list_Cart'>
                    <div className='cart_item'>
                        <div className='cart_image'>
                            <img className='cart_image_client' src='img/colonia_01.jpg' alt='producto' />
                        </div>
                        <div className='cart_name'>
                            <p className='cart_name_text'>carolina herrera</p>
                        </div>
                        <div className='cart_precio'>
                            <p className='cart_precio_col'>$230.000</p>
                        </div>
                        <div className='cart_cantidad'>
                            <span className='minus'>-</span>
                            <span className='cantidad_lote'>1</span>
                            <span className='plus'>+</span>
                        </div>
                        <div className='cart_delete'>
                            <button><i class='bx bxs-trash delete_icon'></i></button>
                        </div>
                    </div>
                    <div className='cart_item'>
                        <div className='cart_image'>
                            <img className='cart_image_client' src='img/colonia_01.jpg' alt='producto' />
                        </div>
                        <div className='cart_name'>
                            <p className='cart_name_text'>carolina herrera</p>
                        </div>
                        <div className='cart_precio'>
                            <p className='cart_precio_col'>$230.000</p>
                        </div>
                        <div className='cart_cantidad'>
                            <span className='minus'>-</span>
                            <span className='cantidad_lote'>1</span>
                            <span className='plus'>+</span>
                        </div>
                        <div className='cart_delete'>
                            <button><i class='bx bxs-trash delete_icon'></i></button>
                        </div>
                    </div>
                </div>
                <div className='cart_total'>
                    <h3 className='cart_title_total'>
                        <span className='spanColorTotal'>Total:</span>
                        423.000 Col$</h3>
                </div>
                <div className='cart_btn'>
                    <button className='cart_check'>
                        <Link href='' className="btn_cesta">Ir a la Cesta</Link>
                    </button>
                </div>
            </div>

            {/* NAVEGACION */}
            <div className={`nav ${isMenuOpen ? 'show-menu' : ''} `} id='navbar'>
                <nav className='nav_container'>
                    <div>
                        <Link href='/cliente' className='nav_link nav_logo'>
                            <i class="bx bx-disc nav_icon"></i>
                            <span className='nav_logo-name'>SGVC</span>
                        </Link>

                        <div className='nav_list'>
                            <div className='nav_items'>
                                <h3 className='nav_subtitle'>Menu</h3>
                                <Link href="/cliente" className='nav_link'>
                                    <i className="bx bx-home nav_icon"></i>
                                    <span className='nav_name'>Home</span>
                                </Link>

                                <Link href='/cliente/vendedor' className='nav_link'>
                                    <i className="bx bxs-group nav_icon"></i>
                                    <span className='nav_name'>Vendedores</span>
                                </Link>

                                <Link href='/cliente/productos' className='nav_link'>
                                    <i class="bx bx-store nav_icon"></i>
                                    <span className='nav_name'>Productos</span>
                                </Link>
                                <Link href='/cliente/pedidos' className='nav_link'>
                                <i class="fa-solid fa-table nav_icon"></i>
                                    <span className='nav_name'>Pedidos</span>
                                </Link>
                                {/* <!----> */}

                                <Link href='' className='nav_link'>
                                    <i class="bx bx-message-rounded nav_icon"></i>
                                    <span className='nav_name'>Mensaje</span>
                                </Link>
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
                                            <Link href='/cliente/formulario' className='nav_link nav_dropdown-item'>Actualizar Datos</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Politica y Privacidad</Link>
                                            <Link href='' className='nav_link nav_dropdown-item'>Accounts</Link>
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



                                <Link href='' className='nav_link'>
                                    <i className='bx bx-compass nav_icon'></i>
                                    <span className='nav_name'>Explorar</span>
                                </Link>

                                <Link href='' className='nav_link'>
                                    <i class='bx bx-bookmark nav_icon'></i>
                                    <span className='nav_name'>Guardar</span>
                                </Link>
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

export default NavBarHome;