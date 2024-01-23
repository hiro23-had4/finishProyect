import '@/app/cssLogin/registro.css';
import Link from 'next/link';
import React from 'react';

export default function FormRegistro() {
    return (
        <div className='bg_signUp'>
            <section>
                <div className='center_registro'>
                    <div className='bg_formAdd container_registro'>
                        <h1 className='titulo_registro'>Regístrate</h1>
                        <form className='contenedor px-11 py-2'>
                            <div class="space-y-3">
                                <div class="col-span-full border-b border-gray-900/10 pb-5">
                                    <label for="photo" class="block text-xl font-medium leading-6">Foto</label>
                                    <div class="mt-2 flex items-center gap-x-3">
                                        <img src='../img/producto_form.svg' className=' rounded-full w-20 h-20' />
                                        <input type="file" class=' w-5/12 file:bg-gradient-to-b file:from-green-500 file:to-green-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-green-600/50' />
                                    </div>
                                </div>


                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 ">Ingrese los Datos</h2>


                                    <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                        <div class="sm:col-span-2">
                                            <label for="documento" class="block text-sm font-medium leading-6">Seleccione el Rol</label>
                                            <div class="mt-2">
                                                <select id="documento" name="documento" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5  ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                                                    <option disabled>-- Elige el Rol</option>
                                                    <option>Cliente</option>
                                                    <option>Vendedor</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="first-name" class="block text-sm font-medium leading-6">Nombre</label>
                                            <div class="mt-2">
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Nombre' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="apellido" class="block text-sm font-medium leading-6">Apellido</label>
                                            <div class="mt-2">
                                                <input type="text" name="apellido" id="apellido" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Apellido' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="telefono" class="block text-sm font-medium leading-6">Teléfono</label>
                                            <div class="mt-2">
                                                <input type="tel" name="telefono" id="telefono" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Teléfono' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="edad" class="block text-sm font-medium leading-6">Edad</label>
                                            <div class="mt-2">
                                                <input type="number" name="edad" id="edad" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Edad' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="pais" class="block text-sm font-medium leading-6">País</label>
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
                                            <label for="ciudad" class="block text-sm font-medium leading-6">Ciudad</label>
                                            <div class="mt-2">
                                                <input type="text" name="ciudad" id="ciudad" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Ciudad' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="direccion" class="block text-sm font-medium leading-6">Dirección</label>
                                            <div class="mt-2">
                                                <input type="text" name="direccion" id="direccion" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Dirección' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="correo" class="block text-sm font-medium leading-6">Correo</label>
                                            <div class="mt-2">
                                                <input type="text" name="correo" id="correo" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Email' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="password" class="block text-sm font-medium leading-6">Contraseña</label>
                                            <div class="mt-2">
                                                <input type="password" name="password" id="password" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Contraseña' />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="password" class="block text-sm font-medium leading-6">Confirmar Contraseña</label>
                                            <div class="mt-2">
                                                <input type="password" name="password" id="password" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Confirmar Contraseña' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-b border-gray-900/10 pb-5">
                                    <h2 class="text-base font-semibold leading-7">Política y Privacidad</h2>
                                    <div className='flex'>
                                        <input type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-300 border-zinc-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-1' />
                                        <p class="text-sm leading-6">Acepto los Términos y Condiciones, y autorizo a SVGA a realizar el tratamiento de mis datos personales, de conformidad con la Política de Protección de Datos Personales.</p>
                                    </div>

                                </div>
                            </div>

                            <div class="mt-6 flex items-center justify-between gap-x-6">
                                <p className=''>
                                    Ya tienes una Cuenta?
                                    <Link className='link_cuenta' href='/login/singUp'>Iniciar Sesión</Link>
                                </p>
                                <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>

        </div>
    )
}
