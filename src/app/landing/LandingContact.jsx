"use client";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LandingContact = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <div id="contact" className="flex bg-T500 w-full">
      <div className="p-8 pl-32 max-w-[50%]">
        <h4 className="uppercase text-S300 text">Contáctanos</h4>
        <h1 className="text-[2.5rem] font-bold mb-16">
          Estamos aquí para ayudarte
        </h1>
        <p className="text-lg font-light my-4">
          ¿Tienes preguntas o comentarios?
        </p>
        <p className="text-lg font-light my-4">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros para
          obtener más información o asistencia.
        </p>
        <p className="text-lg font-light my-4 flex items-center gap-8">
          <FaEnvelope className="text-S300 text-2xl" />
          <a href="mailto:info@buddy.com.ar" className="text-S300 underline">
            info@buddy.com.ar
          </a>
        </p>
      </div>
      <div className="bg-white grow">
        <form action="#" method="POST" className="mx-auto p-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Apellido
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Empresa
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Mensaje
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch isSelected={agreed} onValueChange={setAgreed}>
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                  <div className="text-sm leading-6 text-gray-600">
                    Al seleccionar, usted está de acuerdo con nuestra{" "}
                    <a className="font-semibold text-primary">
                      política de privacidad
                    </a>
                    .
                  </div>
                </Switch>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              className="w-full"
              color="primary"
              radius="sm"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LandingContact;
