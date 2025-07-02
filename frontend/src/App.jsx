import React, { useState } from "react";
import CalendarSidebar from "./components/CalendarSidebar";
import RightDrawer from "./components/RightDrawer";

// Mock data inicial
const EVENTS = [
  { id: 1, date: "2025-06-02", title: "Feria de sociedades edición 2025", prompt: "Fotos para un video edit que muestre los high lights de la Feria de sociedades 2025, las fotos deben ser principalmente alegres y mínimo una vez tiene que aparecer Julián Alvarez" },
  { id: 2, date: "2025-06-03", title: "Entrevista a Takashi" },
  { id: 3, date: "2025-06-04", title: "Collage de Peraj" },
  { id: 4, date: "2025-06-04", title: "Entrevistas Peraj" }
];

const MOCK_CONTENT = [
  { id: 1, type: "image", url: "https://placehold.co/120", checked: true },
  { id: 2, type: "image", url: "https://placehold.co/90x160", checked: true },
  { id: 3, type: "video", url: "https://placehold.co/120", checked: true },
  { id: 4, type: "image", url: "https://placehold.co/120", checked: false },
  { id: 5, type: "image", url: "https://placehold.co/120", checked: false },
  { id: 6, type: "video", url: "https://placehold.co/90x160", checked: false }
];

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Para simular fetch, filtramos evento por fecha
  const handleDaySelect = (date) => {
    setSelectedDate(date);
    setDrawerOpen(true);
    const ev = EVENTS.find(e => e.date === date);
    setSelectedEvent(ev);
  };

  return (
    <div className="flex h-screen bg-white">
      <CalendarSidebar
        events={EVENTS}
        selectedDate={selectedDate}
        onSelectDate={handleDaySelect}
      />
      <RightDrawer
        open={drawerOpen}
        event={selectedEvent}
        date={selectedDate}
        content={MOCK_CONTENT}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}

export default App;
