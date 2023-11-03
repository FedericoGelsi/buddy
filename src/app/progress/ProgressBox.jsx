'use client';
import React, { useState } from "react";
import Image from "next/image";
import PercentageChartSmall from "./PercentageChartSmall";
import PercentageChartBig from "./PercentageChartBig"
import HistoricalChart from "./HistoricalChart"
import infoMark from "../assets/info-circle.png";

export default function ProgressBox(props) {
  return (
    <div style={{}}>
      <div style={{width: '100%', flex: '1 1 0', color: '#EBEBEC', fontSize: 24, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word', marginTop: 24}}>
        Progreso de las actividades
      </div>
      <div style={{width: '100%', flex: '0 1 0', color: '#EBEBEC', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word', marginTop: 16}}>
        Aquí podrás observar los resultados de las actividades. Sigue realizando las actividades para observar el progreso y evaluar la situación del menor a cargo.
      </div>
      <div style={{width: '100%', padding: 16, background: '#2A4B62', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex', marginTop: 16}}>
        <div style={{alignSelf: 'stretch', height: 78, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 17, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 18, height: 18, left: 3, top: 3, position: 'absolute'}}>
                      <Image src={infoMark} alt="Información" />
                    </div>
                </div>
                <div style={{flex: '1 1 0'}}>Es crucial que, si los indicadores se encuentran en estado crítico o en alerta, te pongas en contacto con un especialista. Puedes enviarnos un mensaje a consulta@buddy.com.ar, y te asistiremos en la gestión de una cita con un psicólogo especializado.</div>
            </div>
        </div>
      </div>

      <div style={{alignSelf: 'start', flex: '0 1 0', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word', marginTop: 32}}>
        Susceptibilidad
      </div>

      <div style={{alignSelf: 'stretch', height: 346, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex', marginTop: 15}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                <PercentageChartSmall title="Exposición a contenido inapropiado" description="Evalúa el riesgo de que el menor se encuentre con contenido en línea inapropiado o perjudicial." value={88} />
                <PercentageChartSmall title="Divulgación de datos personales" description="Expone la inclinación de los menores a compartir datos personales delicados, como nombres, emails, direcciones o números de teléfono." value={24} />
          </div>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                <PercentageChartSmall title="Compartir multimedia" description="Se refiere a la acción de compartir fotos y videos a través de plataformas digitales." value={59} />
                <PercentageChartSmall title="Cambios en las amistades" description="Indica alteraciones en los vínculos y amistades del menor, que podrían ser el resultado de interacciones en línea o fuera de línea." value={92} />
          </div>
      </div>

      <div style={{alignSelf: 'stretch', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word', marginTop: 56}}>
        Capacidad de reconocimiento
      </div>
      
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex', marginTop: 16}}>
        <PercentageChartBig title="Reconocimiento de perfil sospechoso" value={77} />

        <HistoricalChart title="Promedio histórico reconocimiento" data={[20, 40, 40, 50, 60, 80, 50, 90]}/>
      </div>

      <div style={{alignSelf: 'stretch', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word', marginTop: 24}}>
        Escenario actual
      </div>
      
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', marginTop: 16}}>
        <PercentageChartBig title="Indicador de situación" value={65} />
        <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <PercentageChartSmall title="Evaluación de bienestar del menor" description="Combina indicadores y sintomatología para evaluar la situación del menor en el contexto del grooming." value={88} />
              <PercentageChartSmall title="Tendencia en los hábitos" description="Se proporciona una visión del comportamiento y actividades del menor a cargo." value={24} />
            </div>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <PercentageChartSmall title="Dinámica de relaciones del menor" description="Visión general de sus interacciones sociales y puede ayudar a identificar patrones y tendencias en sus relaciones." value={95} />
              <PercentageChartSmall title="Análisis del comportamiento" description="Ofrece una perspectiva sobre cómo ciertos comportamientos pueden afectar su bienestar y desarrollo." value={67} />
            </div>
        </div>
      </div>

  </div>
  );
}
