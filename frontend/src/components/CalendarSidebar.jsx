import React from "react";

// Util para obtener la semana completa a partir de una fecha (domingo a sábado)
function getWeekDates(dateStr) {
  const date = new Date(dateStr || "2025-06-02");
  const week = [];
  const firstDay = new Date(date);
  firstDay.setDate(date.getDate() - date.getDay()); // Domingo
  for (let i = 0; i < 7; i++) {
    const d = new Date(firstDay);
    d.setDate(firstDay.getDate() + i);
    week.push(new Date(d));
  }
  return week;
}

function CalendarSidebar({ events, selectedDate, onSelectDate }) {
  // Fijo la semana del mockup para demo
  const weekDates = getWeekDates("2025-06-02");

  // Helper para encontrar eventos de un día
  const getEvents = (dayStr) => events.filter(ev => ev.date === dayStr);

  return (
    <div className="w-1/2 max-w-2xl border-r bg-gray-50 p-4">
      {/* Selector de vista */}
      <div className="mb-1 flex gap-2">
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-500" disabled>Mes</button>
        <button className="px-3 py-1 rounded bg-blue-100 text-blue-600 font-semibold" disabled>Semana</button>
      </div>
      {/* Mes/Año */}
      <h2 className="text-xl text-center font-bold mb-1">Junio 2025</h2>
      <div className="grid grid-cols-7 border-b text-center font-semibold text-gray-500">
        {["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map((d, i) => (
          <div key={i} className="py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 h-full text-center text-gray-700">
        {weekDates.map((date, i) => {
          const dayNum = date.getDate();
          const dateStr = date.toISOString().slice(0,10);
          const evs = getEvents(dateStr);
          return (
            <div key={i} className={`
              border-t min-h-[110px] flex flex-col items-center p-1
              ${selectedDate === dateStr ? "bg-blue-50 border-blue-300" : "bg-gray-50"}
            `}>
              <button
                className={`rounded-full w-6 h-6 text-xs mb-1 ${selectedDate === dateStr ? "bg-blue-200" : ""}`}
                onClick={() => onSelectDate(dateStr)}
              >{dayNum}</button>
              <div className="flex flex-col gap-1 mt-1">
                {evs.map(ev => (
                  <button
                    key={ev.id}
                    onClick={() => onSelectDate(dateStr)}
                    className="text-xs px-1 bg-blue-100 text-blue-600 rounded hover:underline truncate"
                  >
                    {ev.title.length > 20 ? ev.title.slice(0,17)+"..." : ev.title}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default CalendarSidebar;
