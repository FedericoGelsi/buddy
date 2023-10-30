'use client';
import React, { useState } from "react";
import GraphDetail from "./GraphDetail";
import infoMark from "../assets/Information circle.png";

export default function ProgressBox(props) {
  return (
    <div style={{}}>
      <div style={{width: '100%', flex: '1 1 0', color: '#EBEBEC', fontSize: 24, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Progreso de las actividades</div>
      <div style={{width: '100%', flex: '0 1 0', color: '#EBEBEC', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Aquí podrás observar los resultados de las actividades. Sigue realizando las actividades para observar el progreso y evaluar la situación del menor a cargo.</div>
      <div style={{width: '100%', padding: 16, background: '#2A4B62', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 78, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 17, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 24, height: 24, position: 'relative'}}>
                    <div style={{width: 18, height: 18, left: 3, top: 3, position: 'absolute', border: '2px #9DD5D7 solid'}}>
                    <image src={infoMark} alt="information" />
                    </div>
                </div>
                <div style={{flex: '1 1 0'}}>Es crucial que, si los indicadores se encuentran en estado crítico o en alerta, te pongas en contacto con un especialista. Puedes enviarnos un mensaje a consulta@buddy.com.ar, y te asistiremos en la gestión de una cita con un psicólogo especializado.</div>
            </div>
        </div>
      </div>
      <div style={{alignSelf: 'start', flex: '0 1 0', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Susceptibilidad</div>

      <div style={{alignSelf: 'stretch', height: 346, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <GraphDetail title="Exposición a contenido inapropiado" description="Evalúa el riesgo de que el menor se encuentre con contenido en línea inapropiado o perjudicial." value={88} />
              </div>
              <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <GraphDetail title="Divulgación de datos personales" description="Expone la inclinación de los menores a compartir datos personales delicados, como nombres, emails, direcciones o números de teléfono." value={24} />
              </div>
          </div>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <GraphDetail title="Compartir multimedia" description="Se refiere a la acción de compartir fotos y videos a través de plataformas digitales." value={59} />
              </div>
              <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                <GraphDetail title="Cambios en las amistades" description="Indica alteraciones en los vínculos y amistades del menor, que podrían ser el resultado de interacciones en línea o fuera de línea." value={92} />
              </div>
          </div>
      </div>

      <div style={{alignSelf: 'stretch', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Capacidad de reconocimiento</div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <GraphDetail title="Reconocimiento de perfil sospechoso" value={77} />

          <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 24, background: 'white', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>

          </div>
      </div>

      <div style={{alignSelf: 'stretch', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Escenario actual</div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <GraphDetail title="Indicador de situación" value={65} />
                  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                          <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <GraphDetail title="Evaluación de bienestar del menor" description="Combina indicadores y sintomatología para evaluar la situación del menor en el contexto del grooming." value={88} />
                          </div>
                          <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <GraphDetail title="Tendencia en los hábitos" description="Se proporciona una visión del comportamiento y actividades del menor a cargo." value={24} />
                          </div>
                      </div>
                      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                          <div style={{flex: '1 1 0', alignSelf: 'stretch', padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <GraphDetail title="Dinámica de relaciones del menor" description="Visión general de sus interacciones sociales y puede ayudar a identificar patrones y tendencias en sus relaciones." value={95} />
                          </div>
                          <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <GraphDetail title="Análisis del comportamiento" description="Ofrece una perspectiva sobre cómo ciertos comportamientos pueden afectar su bienestar y desarrollo." value={67} />
                          </div>
                      </div>
                  </div>
              </div>

  </div>
  );
}
