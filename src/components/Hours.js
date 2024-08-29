// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Horarios de apertura
  const hours = {
    weekday: { open: '10:00 AM', close: '4:00 PM' },
    weekend: { open: '9:00 AM', close: '8:00 PM' }
  };

  let openingHours;

  // Determinar si hoy es un día de semana o fin de semana
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Lunes a viernes
    openingHours = hours.weekday;
  } else {
    // Sábado y domingo
    openingHours = hours.weekend;
  }

  return (
    <div>
      <h2>Horario de hoy</h2>
      <p>
        {`El refugio está abierto hoy de ${openingHours.open} a ${openingHours.close}.`}
      </p>
    </div>
  );
};

export default Hours;
