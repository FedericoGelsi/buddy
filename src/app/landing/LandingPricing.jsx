import React from "react";
import { GoCheck } from "react-icons/go";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";

const LandingPricing = () => {
  const plans = [
    {
      title: "Plan Básico",
      subtitle: "Acceso a tres niveles de juego educativo. Ideal para empezar",
      price: 12,
      currency: "USD",
      includedFeatures: [
        "Evaluación y seguimiento del progreso",
        "Recursos informativos sobre el grooming",
        "Soporte técnico básico",
        "Actualizaciones periódicas",
      ],
      isFeatured: false,
    },
    {
      title: "Plan Avanzado",
      subtitle:
        "Acceso a tres niveles de juegos educativos. Más contenido y aprendizaje",
      price: 18,
      currency: "USD",
      includedFeatures: [
        "Evaluación y seguimiento detallado del progreso",
        "Recursos informativos avanzados sobre el grooming",
        "Soporte técnico prioritario",
        "Actualizaciones regulares y contenido adicional",
      ],
      isFeatured: true,
    },
    {
      title: "Plan Premium",
      subtitle:
        "Acceso tres niveles de juegos educativos. La mejor opción para una educación completa",
      price: 24,
      currency: "USD",
      includedFeatures: [
        "Evaluación y seguimiento avanzado del progreso",
        "Recursos informativos premium sobre el grooming",
        "Soporte técnico premium con respuesta rápida",
        "Actualizaciones frecuentes y contenido exclusivo",
        "Acceso a una comunidad en línea para compartir experiencias y consejos",
      ],
      isFeatured: false,
    },
  ];
  return (
    <div id="pricing" className="my-24">
      <div className="flex flex-col items-center">
        <h4 className="uppercase text-[#628A2C] text-xl">Plan de precios</h4>
        <h1 className="font-bold text-black text-[2.5rem] ">
          Elige el plan perfecto para proteger a tu familia en línea
        </h1>
        <div className="mt-16 grid grid-cols-3 gap-x-4 place-items-stretch">
          {plans.map((plan, index) => (
            <PricingCard key={index} data={plan} isFeatured={plan.isFeatured} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPricing;

const PricingCard = (props) => {
  const { data, isFeatured, key } = props;
  return (
    <div key={key} className="rounded-3xl ring-1 ring-gray-200">
      <div
        className={
          isFeatured
            ? "h-full rounded-2xl bg-[#B1C4D180] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-start lg:py-16"
            : "h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-start lg:py-16"
        }
      >
        <div className="max-w-xs mx-16">
          <h5 className="text-lg font-bold text-gray-600">{data.title}</h5>
          <p className="text-base font-light text-gray-600 min-h-[5rem]">
            {data.subtitle}
          </p>
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              ${data.price}
            </span>
            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
              {data.currency} /mes.
            </span>
          </p>
          <Button
            type="submit"
            className="mt-10 w-full"
            color="primary"
            radius="sm"
          >
            Empezar ahora
          </Button>
          <Divider className="my-4 bg-B200" />
          <div className="lg:flex-auto">
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                ¿Qué está incluido?
              </h4>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600"
            >
              {data.includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <GoCheck
                    className="h-6 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
