import NavBarHome from "@/components/NavBarCliente";
import Link from "next/link";
import '@/app/cssCliente/producto.css';
import CategoriaNavBar from "@/components/CategoriaNavBar";

export default function ProductoCliente() {
    return (
        <>
            <NavBarHome />

            <section className='productos section_Pagin'>
                <h2 className="title_galeria">Productos</h2>

            <CategoriaNavBar />
            
                <div className='galeria'>
                    <div className='galeria_content'>
                        <Link href='/cliente/detalleProducto'>
                            <img src='../img/colonia_01.jpg' class='galeria_img' alt='imagen producto' />

                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>JAQUE</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 6</h3>
                            <h6 className='galeria_precio'>$230.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>

                    <div className='galeria_content'>
                        <Link href='detalleProducto.html'>
                            <img src='../img/colonia_01.jpg' class='galeria_img' alt='imagen producto' />

                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>JAQUE</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 6</h3>
                            <h6 className='galeria_precio'>$230.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>

                    <div className='galeria_content'>
                        <Link href='detalleProducto.html'>
                            <img src='../img/colonia_01.jpg' class='galeria_img' alt='imagen producto' />

                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>JAQUE</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 6</h3>
                            <h6 className='galeria_precio'>$230.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>

                    <div className='galeria_content'>
                        <Link href='detalleProducto.html'>
                            <img src='../img/colonia_01.jpg' class='galeria_img' alt='imagen producto' />

                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>JAQUE</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 6</h3>
                            <h6 className='galeria_precio'>$230.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>
                </div>
            </section>
        </>
    )
}
{/* <nav className='menu'>
                    <Link href="">
                        <p>Todas las categorías</p>
                    </Link>
                    <Link href="">
                        <p>Pedidos Realizados</p>
                    </Link>
                    <Link href="">
                        <p>Vendedores Favoritos</p>
                    </Link>
                    <div className='submenu'>
                        <span>Categorias</span>
                        <ul>
                            <li>
                                <Link href="/productos/perfumes">
                                    <p>Cuidado Personal</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/colonias">
                                    <p>Protección Solar</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/maquillaje">
                                    <p>Tratamiento Facial</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/cremas">
                                    <p>Desodorantes</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/colonias">
                                    <p>Delineador</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/colonias">
                                    <p>Maquillaje</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/colonias">
                                    <p>Colonias</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/colonias">
                                    <p>Perfumes</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/colonias">
                                    <p>Joyeria</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/productos/colonias">
                                    <p>Labial</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu'>
                        <span>Stock:</span>
                        <ul>
                            <li>
                                <Link href="/stock/precio-menos">
                                    <p>Precio menos</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/stock/precio-mas">
                                    <p>Precio más</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='submenu'>
                        <span>Precio:</span>
                        <ul>
                            <li>
                                <Link href="/precio/por-mayor">
                                    <p>Por mayor</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/precio/por-menor">
                                    <p>Por menor</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}
