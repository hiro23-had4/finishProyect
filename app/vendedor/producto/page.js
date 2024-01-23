import NavBarVendedor from '@/components/NavBarVendedor';
import '@/app/cssVendedor/productos.css';
import React from 'react'
import Link from 'next/link';

export default function productoVendedor() {
    return (
        <div>
            <NavBarVendedor />
            <main class="card_product section_Pagin">
                <h1 class="form_title text-center text-4xl font-medium">Productos</h1>

                <div class="grid_contenido">
                    <div class="card_contenido">
                        <div class="card_image">
                            <img className='img_foto' src="/img/colonia_01.jpg" alt="producto" />
                        </div>
                        <div class="producto_detalle">
                            <p class="producto_marca">Yanbal</p>
                            <span class="producto_category">Colonia</span>
                            <h4 class="producto_title">JAQUE</h4>
                            <p class="producto_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit
                                laudantium ipsam.</p>
                            <p class="producto_cantidad">Cantidad: 6</p>
                            <p class="producto_precio">$ 60.000</p>
                        </div>
                        <div className='gap_button mb-3'>
                            <button class="mx-2 bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded">
                                <Link href='/vendedor/formActualizar'>Actualizar</Link>
                            </button>
                            <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Eliminar
                            </button>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    )
}
