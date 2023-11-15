'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PercentageChartSmall from "./PercentageChartSmall";
import PercentageChartBig from "./PercentageChartBig"
import HistoricalChart from "./HistoricalChart"
import infoMark from "../assets/info-circle.png";
import { metrics } from "../api/metrics";

export default function ProgressBox(props) {
  const userId = "653eefb2e27ae8459e3a65e1";
  const [data, setData] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const [historyLabels, setHistoryLabels] = useState(null);
  
  var fetchData = function () {
    return {metrics}.metrics(userId);
  };

  var getHistoryData = function (json){
    const identikitHistory = json.identikit.history;
    const values = Object.values(identikitHistory).map((value) => (value !== null ? value * 100 : 0));
    setHistoryData(values);
    const labels = Object.keys(identikitHistory);
    setHistoryLabels(labels);
  }

  useEffect(() => {
    fetchData().then((jsonData) => {
      setData(jsonData);
      getHistoryData(jsonData);
    });
  }, []);
  
  return (
    <div>
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
                <PercentageChartSmall title="Reconocimiento ante contenido inapropiado" description="Evalúa la habilidad de reconocer y estar alerta ante la presencia de contenido inapropiado en línea." value={data ? data.simulation.exposure.score : 0} />
                <PercentageChartSmall title="Conciencia de privacidad de datos personales" description="Indica la conciencia de un menor en lo que respecta a la privacidad de sus datos personales en línea, incluyendo información sensible como nombres, correos electrónicos, direcciones y números de teléfono." value={data ? data.simulation.personalData.score : 0} />
          </div>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                <PercentageChartSmall title="Precaución al compartir multimedia" description="Se refiere a cuánto cuidado tiene el menor al compartir fotos y videos propios en plataformas digitales." value={data ? data.simulation.multimediaSharing.score : 0} />
                <PercentageChartSmall title="Estabilidad en las amistades" description="Indica alteraciones en los vínculos y amistades del menor, que podrían ser el resultado de interacciones en línea o fuera de línea." value={data ? data.simulation.friendship.score : 0} />
          </div>
      </div>

      <div style={{alignSelf: 'stretch', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word', marginTop: 56}}>
        Capacidad de reconocimiento
      </div>
      
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex', marginTop: 16}}>
        <PercentageChartBig title="Reconocimiento de perfil sospechoso" value={data ? data.identikit.totalScore : 0} />

        <HistoricalChart title="Promedio histórico reconocimiento" labels={historyLabels} data={historyData}/>
      </div>

      <div style={{alignSelf: 'stretch', color: '#EBEBEC', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word', marginTop: 24}}>
        Escenario actual
      </div>
      
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', marginTop: 16}}>
        <PercentageChartBig title="Indicador de situación" value={data ? data.parentForm.totalScore : 0} />
        <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <PercentageChartSmall title="Evaluación de bienestar del menor" description="Combina indicadores y sintomatología para evaluar la situación del menor en el contexto del grooming." value={data ? data.parentForm.categories.welfare.score : 0} />
              <PercentageChartSmall title="Tendencia en los hábitos" description="Se proporciona una visión del comportamiento y actividades del menor a cargo." value={data ? data.parentForm.categories.habits.score : 0} />
            </div>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <PercentageChartSmall title="Dinámica de relaciones del menor" description="Visión general de sus interacciones sociales y puede ayudar a identificar patrones y tendencias en sus relaciones." value={data ? data.parentForm.categories.socialInteractions.score : 0} />
              <PercentageChartSmall title="Análisis del comportamiento" description="Ofrece una perspectiva sobre cómo ciertos comportamientos pueden afectar su bienestar y desarrollo." value={data ? data.parentForm.categories.behaviour.score : 0} />
            </div>
        </div>
      </div>

  </div>
  );
}
