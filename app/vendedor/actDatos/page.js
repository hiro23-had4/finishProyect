import NavBarVendedor from '@/components/NavBarVendedor'
import React from 'react'

export default function ActualizarDatos() {
    return (
        <div>
            <NavBarVendedor />
            <section className='section_Pagin'>
                <h1 className=' text-center font-medium text-2xl'>Actualiza Tus Datos</h1>
                <div className='bg_formAdd my-5'>
                    <form className='contenedor px-11 py-2'>
                        <div class="space-y-3">

                            <div class="col-span-full border-b border-gray-900/10 pb-5">
                                <label for="photo" class="block text-xl font-medium leading-6 text-gray-900">Foto</label>
                                <div class="mt-2 flex items-center gap-x-3">
                                    <img src='../img/producto_form.svg' className=' rounded-full w-20 h-20' />
                                    <input type="file" class=' w-5/12 file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50' />
                                </div>
                            </div>


                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Ingrese los Datos</h2>


                                <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                                        <div class="mt-2">
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Nombre'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="apellido" class="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
                                        <div class="mt-2">
                                            <input type="text" name="apellido" id="apellido" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Apellido'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="documento" class="block text-sm font-medium leading-6 text-gray-900">Tipo de Cedula</label>
                                        <div class="mt-2">
                                            <select id="documento" name="documento" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                                                <option disabled>-- Seleccione el Tipo</option>
                                                <option>Cedula de Ciudadania</option>
                                                <option>Extranjero</option>
                                                <option>Registro Civil</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="docuNum" class="block text-sm font-medium leading-6 text-gray-900">Número Documento</label>
                                        <div class="mt-2">
                                            <input type="number" name="docuNum" id="docuNum" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Numero Documento'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="telefono" class="block text-sm font-medium leading-6 text-gray-900">Teléfono</label>
                                        <div class="mt-2">
                                            <input type="tel" name="telefono" id="telefono" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Teléfono'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="edad" class="block text-sm font-medium leading-6 text-gray-900">Edad</label>
                                        <div class="mt-2">
                                            <input type="number" name="edad" id="edad" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Edad'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="pais" class="block text-sm font-medium leading-6 text-gray-900">País</label>
                                        <div class="mt-2">
                                            <select id="pais" name="pais" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                                                <option disabled>-- Seleccione País</option>
                                                <option>Ecuador</option>
                                                <option>Colombia</option>
                                                <option>Venezuela</option>
                                                <option>España</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="ciudad" class="block text-sm font-medium leading-6 text-gray-900">Ciudad</label>
                                        <div class="mt-2">
                                            <input type="text" name="ciudad" id="ciudad" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Ciudad'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="direccion" class="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
                                        <div class="mt-2">
                                            <input type="text" name="direccion" id="direccion" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Dirección'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label for="pago" class="block text-sm font-medium leading-6 text-gray-900">Medios de Pago (Daviplata o Nequi)</label>
                                        <div class="mt-2">
                                            <input type="text" name="pago" id="pago" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Nequi'/>
                                            <input type="text" name="pago" id="pago" autocomplete="given-name" class="block w-full my-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Daviplata'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="correo" class="block text-sm font-medium leading-6 text-gray-900">Correo</label>
                                        <div class="mt-2">
                                            <input type="text" name="correo" id="correo" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Email' />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                                        <div class="mt-2">
                                            <input type="password" name="password" id="password" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Contraseña'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirmar Contraseña</label>
                                        <div class="mt-2">
                                            <input type="password" name="password" id="password" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Confirmar Contraseña'/>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-6">
                                        <label for="code" class="block text-sm font-medium leading-6 text-gray-900">Codigo de Seguridad</label>
                                        <div class="mt-2">
                                            <input type="number" name="code" id="code" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Codigo de Seguridad'/>
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
        </div>
    )
}
