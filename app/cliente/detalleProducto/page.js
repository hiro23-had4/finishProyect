import NavBarHome from '@/components/NavBarCliente'
import '../../cssCliente/detalleProduct.css';
import Link from 'next/link';

export default function DetalleProducto() {
    return (
        <>
            <NavBarHome />

            <main className='section_Pagin'>
                <div className='detalle'>
                    <div className='detalle_grid'>
                        <div className='detalle_image'>
                            <div className='detalle_image_foto'>
                                <img className='detalle_img_pro' src='../img/colonia_01.jpg' alt='producto' />
                            </div>
                        </div>

                        <div className='detalle_info'>
                            <h2 className='detalle_nombre'>JAQUE</h2>
                            <h4 className='detalle_empresa'>YANBAL</h4>
                            <span className='detalle_precio'>$58.320</span>
                            <div className='detalle_descripcion'>
                                <p className='detalle_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis
                                    repudiandae,
                                    consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti!
                                    Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit.
                                    Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero
                                    laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
                            </div>
                            <p className='detalle_cantidad'>Cantidad: <span className='number_quanty'>9</span></p>
                            <div className='detalle_option'>
                                <Link className='detalle_btn' href="#">Comprar</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
