import NavBarVendedor from '@/components/NavBarVendedor';
import '@/app/cssVendedor/formAdd.css';
import React from 'react'

export default function FormAgregar() {
    return (
        <>
            <NavBarVendedor />
            <section className='section_Pagin'>
                <h1 className=' text-center font-medium text-2xl'>Agregar Producto</h1>
                <div className='bg_formAdd my-5'>
                    <form className='contenedor px-11 py-2'>
                        <div class="space-y-3">
                            <div class="col-span-full border-b border-gray-900/10 pb-5">
                                <label for="photo" class="block text-xl font-medium leading-6 text-gray-900">Foto Producto</label>
                                <div class="mt-2 flex items-center gap-x-3">
                                    <img src='../img/producto_form.svg' className=' rounded-full w-20 h-20' />
                                    <input type="file" class=' w-5/12 file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50' />
                                </div>
                            </div>


                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-gray-900"><span className='text-red-600 text-lg'>*</span> Ingrese Los Datos del Producto</h2>


                                <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-2">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre Producto</label>
                                        <div class="mt-2">
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Categoría</label>
                                        <div class="mt-2">
                                            <select id="category" name="category" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                                                <option disabled>-- Seleccione la Categoría</option>
                                                <option>Colonia</option>
                                                <option>Tratamiento Facial</option>
                                                <option>Perfume</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Marca</label>
                                        <div class="mt-2">
                                            <select id="description" name="description" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                                                <option disabled>-- Seleccione la Marca</option>
                                                <option>Carolina Herrera</option>
                                                <option>Man Box</option>
                                                <option>GUPAX</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                                        <div class="mt-2">
                                        <textarea id="message" rows="4" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Escribe aquí..."></textarea>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="cantidad" class="block text-sm font-medium leading-6 text-gray-900">Cantidad</label>
                                        <div class="mt-2">
                                            <input type="number" name="cantidad" id="cantidad" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="precio" class="block text-sm font-medium leading-6 text-gray-900">Precio</label>
                                        <div class="mt-2">
                                            <input type="number" name="precio" id="precio" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-5">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Política y Privacidad</h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes.</p>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm font-semibold leading-6 text-white bg-red-600 p-2 rounded-md hover:bg-red-500">Cancel</button>
                            <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}
