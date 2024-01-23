'use client';
import NavBarHome from '@/components/NavBarCliente';
import '../../cssCliente/vendedorcliente.css';
import Link from 'next/link';
import { useState } from 'react';

export default function ListaVendedores() {
    const [isFavorito, setIsFavorito] = useState(false);

    const toggleFavorito = () => {
        setIsFavorito((prev) => !prev);
    };

    return (
        <>
            <NavBarHome />

            <section className='vendedor_card section_Pagin'>
                <h2 className='title_card'>Vendedores</h2>
                <div className='grid_card'>
                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='/cliente/productosVendedor' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>

                    <div className='wrapper'>
                        <div className='icon'>
                            <button onClick={toggleFavorito}>
                                {isFavorito ?
                                    <i class="fa-solid fa-bookmark favorite_icon"></i>
                                    : <i class="fa-regular fa-bookmark favorite_icon"></i>
                                }
                            </button>
                        </div>
                        <div className='img_area'>
                            <div className='inner_area'>
                                <Link href='' class='cliente_link'>
                                    <img className='img_bg' src='../img/vendedor_02.jpg' alt='vendedor' />
                                </Link>
                            </div>
                        </div>
                        <div className='name'>Jane Doe</div>
                        <div className='about'>Facatativa, COL</div>
                        <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                        <div className='rol'>Vendedor</div>
                        <div className='social_icons'>
                            <Link href='' className='link_icon yt'><i className='bx bxl-gmail icon_networ'></i></Link>
                            <Link href='' className='link_icon what'><i className='bx bxl-whatsapp icon_networ'></i></Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
