'use client'
import '@/app/cssVendedor/tablaPedido.css';
import NavBarHome from '@/components/NavBarCliente';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function TablaPedidosCliente() {
    const [data, setData] = useState([
        { idPedido: 1, idVendedor: 1, nombreVendedor: 'John Doe', total: 255.034, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Cancelado" },
        { idPedido: 2, idVendedor: 2, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Aprovado" },
        { idPedido: 3, idVendedor: 3, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Enviado" },
        { idPedido: 4, idVendedor: 4, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Verificando Pago" },
        { idPedido: 5, idVendedor: 5, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Verificando Pago" },
        { idPedido: 6, idVendedor: 6, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Enviado" },
        { idPedido: 7, idVendedor: 7, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Cancelado" },
        { idPedido: 8, idVendedor: 8, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Cancelado" },
        { idPedido: 9, idVendedor: 9, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Enviado" },
        { idPedido: 10, idVendedor: 10, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Cancelado" },
        { idPedido: 11, idVendedor: 11, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Enviado" },
        { idPedido: 12, idVendedor: 12, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Cancelado" },
        { idPedido: 13, idVendedor: 13, nombreVendedor: 'John Doe', total: 25, fechaSolicitada: '22/11/2023', fechaVencimiento: "22/12/2023", estado: "Cancelado" },
        // Agrega más filas según sea necesario
    ]);

    const [rowsLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [rowsToShow, setRowsToShow] = useState([]);

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / rowsLimit));
        updateRowsToShow();
    }, [data, rowsLimit, currentPage]);

    const updateRowsToShow = () => {
        const startIndex = currentPage * rowsLimit;
        const endIndex = startIndex + rowsLimit;
        setRowsToShow(data.slice(startIndex, endIndex));
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const previousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const changePage = (value) => {
        setCurrentPage(Math.max(0, Math.min(value, totalPages - 1)));
    };


    return (
        <>
            <NavBarHome />
            <div className='section_Pagin'>
                <div className="min-h-screen h-full bg-white flex  items-center justify-center pt-10 pb-14">
                    <div className="w-full max-w-5xl px-2">
                        <div className='flex justify-between items-center mb-3'>
                            <h1>Tabla Pedidos</h1>
                            <div className='flex items-center'>
                                <div>
                                    <button className='bg-blue-700 rounded-tl-lg rounded-bl-lg flex items-center p-2'>
                                        <i className="fa-solid fa-magnifying-glass icono_buscar h-5 w-5 text-white"></i>
                                    </button>
                                </div>
                                <input type='search' className='buscador border-blue-800 rounded-r-lg px-2 py-1' placeholder='Buscar...' />
                            </div>
                        </div>
                        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none">
                            <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-2 border-gray-300">
                                <thead className='rounded-lg text-base font-semibold w-full border-b-2 border-gray-300'>
                                    <tr className=" border-x-1 border-t-1 border-gray-400">
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Recibo</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">ID Pedido</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">ID Vendedor</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Nombre Vendedor</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Contacto</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Total</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Fecha Solicitada</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Fecha Vencimiento</th>
                                        <th className="py-3 px-3 text-[#212B36] text-center sm:text-base font-bold whitespace-nowrap">Estado</th>
                                    </tr>
                                </thead>
                                <tbody className="border-x-1 border-gray-400 border-b-1 text-center">
                                    {rowsToShow.map((row, index) => (
                                        <tr className={`${index % 2 == 0 ? "bg-white" : "bg-[#222E3A]/[6%]"}`}
                                            key={index}>
                                            <td className={`py-2 px-3 font-normal text-base ${index == 0
                                                ? "border-t-2 border-gray-300"
                                                : index == rowsToShow?.length
                                                    ? "border-y"
                                                    : "border-t"
                                                } whitespace-nowrap`}>
                                                <Link href=''>
                                                    <i class="fa-regular fa-file"></i>
                                                </Link>
                                            </td>
                                            <td>{row.idPedido}</td>
                                            <td>{row.idVendedor}</td>
                                            <td>{row.nombreVendedor}</td>
                                            <td>
                                                <div className='table_icon'>
                                                    <Link href='' className='contacto yt'>
                                                        <i class='bx bxl-gmail icon_net'></i>
                                                    </Link>
                                                    <Link href='' className='contacto what'>
                                                        <i class='bx bxl-whatsapp icon_net'></i>
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>{'$' + row.total}</td>
                                            <td>{row.fechaSolicitada}</td>
                                            <td>{row.fechaVencimiento}</td>
                                            <td>{row.estado}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='contenido_paginacion'>
                            {/*  justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-2.5 px-1 items-center */}
                            <div>
                                <button className={` mr-1 w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled] ${currentPage == 0
                                    ? "bg-[#cccccc] pointer-events-none"
                                    : " cursor-pointer"
                                    }`}
                                    onClick={previousPage} disabled={currentPage === 0}>
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button className={`mr-1 w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid bg-[#FFFFFF] cursor-pointer ${currentPage == index
                                        ? "text-blue-600  border-sky-500"
                                        : "border-[#E4E4EB] "
                                        }`}
                                        key={index} onClick={() => changePage(index)} disabled={currentPage === index}>
                                        {index + 1}
                                    </button>
                                ))}
                                <button className={`w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${currentPage == totalPages - 1
                                    ? "bg-[#cccccc] pointer-events-none"
                                    : " cursor-pointer"
                                    }`}
                                    onClick={nextPage} disabled={currentPage === totalPages - 1}>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                            <div>
                                <p>
                                    Visualizando {currentPage * rowsLimit + 1} de{' '}
                                    {Math.min((currentPage + 1) * rowsLimit, data.length)} ( {data.length} entradas en total)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};






// export default function TablaPedidosCliente() {

//     return (
//         <>
//             <NavBarHome />
//             <div className='section_Pagin'>
//                 <h1 className=' text-center text-xl'>Pedidos Realizados</h1>

//                 <div class="flex flex-col overflow-x-auto">
//                     <div class="sm:-mx-6 lg:-mx-8">
//                         <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//                             <div class="overflow-x-auto">
//                                 <table class="min-w-full text-left text-sm font-light">
//                                     <thead class="border-b font-medium dark:border-neutral-500">
//                                         <tr className='text-center'>
//                                             <th scope="col" class="px-6 py-4">Recibo</th>
//                                             <th scope="col" class="px-6 py-4">ID Pedido</th>
//                                             <th scope="col" class="px-6 py-4">ID Vendedor</th>
//                                             <th scope="col" class="px-6 py-4">Nombre Vendedor</th>
//                                             <th scope="col" class="px-6 py-4">Contacto</th>
//                                             <th scope="col" class="px-6 py-4">Total</th>
//                                             <th scope="col" class="px-6 py-4">Fecha Solicitada</th>
//                                             <th scope="col" class="px-6 py-4">Fecha Vencimiento</th>
//                                             <th scope="col" class="px-6 py-4">Estado</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr class="border-b dark:border-neutral-500 text-center">
//                                             <td class="whitespace-nowrap px-6 py-4 font-medium">
//                                                 <Link href=''>
//                                                     <i class="fa-regular fa-file"></i>
//                                                 </Link>
//                                             </td>
//                                             <td class="whitespace-nowrap px-6 py-4">1</td>
//                                             <td class="whitespace-nowrap px-6 py-4">1</td>
//                                             <td class="whitespace-nowrap px-6 py-4">Martha</td>
//                                             <td class="whitespace-nowrap px-6 py-4">
//                                                 <div className='table_icon'>
//                                                     <Link href='' className='contacto yt'>
//                                                         <i class='bx bxl-gmail icon_net'></i>
//                                                     </Link>
//                                                     <Link href='' className='contacto what'>
//                                                         <i class='bx bxl-whatsapp icon_net'></i>
//                                                     </Link>
//                                                 </div>
//                                             </td>
//                                             <td class="whitespace-nowrap px-6 py-4">$ 246.000</td>
//                                             <td class="whitespace-nowrap px-6 py-4">22/11/2023</td>
//                                             <td class="whitespace-nowrap px-6 py-4">22/12/2023</td>
//                                             <td class="whitespace-nowrap px-6 py-4">Cancelado</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }
