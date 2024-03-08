import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [tempoTotal, setTempoTotal] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    let timer;
    if (!pausado) {
      timer = setInterval(() => {
        setTempoTotal(prevTempo => prevTempo + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [pausado]);

  const handlePausar = () => {
    setPausado(true);
  };

  const handleContinuar = () => {
    setPausado(false);
  };

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  };

  return (
    <div>
      <h2>Timer: {formatarTempo(tempoTotal)}</h2>
        <div className="button-timer-2">
            <button className="button-timer" onClick={handlePausar}>Pausar</button>
            <button className="button-timer" onClick={handleContinuar}>Continuar</button>
        </div>
    </div>
  );
};

export default Timer;