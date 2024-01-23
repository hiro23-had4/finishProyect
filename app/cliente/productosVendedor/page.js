import NavBarHome from '@/components/NavBarCliente';
import '../../cssCliente/producto.css';
import Link from 'next/link';

export default function ProductosVendedor() {
    return (
        <>
            <NavBarHome />
            <section className='product section_Pagin'>
                <h2 className='title_galeria'>Productos Vendedor</h2>
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
                        <Link href=''>
                            <img src='https://m.media-amazon.com/images/I/51vBCQuuxkL.jpg' class='galeria_img'
                                alt='imagen producto' />
                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>OHM BLACK</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis
                                possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 8</h3>
                            <h6 className='galeria_precio'>$240.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>

                    <div className='galeria_content'>
                        <Link href=''>
                            <img src='https://m.media-amazon.com/images/I/51vBCQuuxkL.jpg' class='galeria_img'
                                alt='imagen producto' />
                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>OHM BLACK</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis
                                possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 8</h3>
                            <h6 className='galeria_precio'>$240.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>

                    <div className='galeria_content'>
                        <Link href=''>
                            <img src='https://m.media-amazon.com/images/I/51vBCQuuxkL.jpg' class='galeria_img'
                                alt='imagen producto' />
                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>OHM BLACK</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis
                                possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 8</h3>
                            <h6 className='galeria_precio'>$240.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>

                    <div className='galeria_content'>
                        <Link href=''>
                            <img src='https://m.media-amazon.com/images/I/51vBCQuuxkL.jpg' class='galeria_img'
                                alt='imagen producto' />
                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>OHM BLACK</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis
                                possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 8</h3>
                            <h6 className='galeria_precio'>$240.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>

                    <div className='galeria_content'>
                        <Link href=''>
                            <img src='https://m.media-amazon.com/images/I/51vBCQuuxkL.jpg' class='galeria_img'
                                alt='imagen producto' />
                            <h4 className='galeria_tipo'>Colonia</h4>
                            <h3 className='galeria_marca'>OHM BLACK</h3>
                            <p className='galeria_descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                debitis
                                possimus impedit.</p>
                            <h3 className='galeria_cantidad'>Cantidad: 8</h3>
                            <h6 className='galeria_precio'>$240.000</h6>
                        </Link>
                        <button className='btn_buy'>Agregar al Carrito</button>
                    </div>
                </div>

            </section>
        </>
    )
}
