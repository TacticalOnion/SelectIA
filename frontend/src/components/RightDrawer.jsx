import React, { useState } from "react";
import GalleryToolbar from "./GalleryToolbar";
import GalleryScrollArea from "./GalleryScrollArea";
import PostForm from "./PostForm";

function RightDrawer({ open, event, date, content, onClose }) {
  // Estados controlados
  const [postTitle, setPostTitle] = useState(event?.title || "");
  const [prompt, setPrompt] = useState(event?.prompt || "");
  const [galleryItems, setGalleryItems] = useState(content);

  // Al cambiar checks
  const handleToggleCheck = (id) => {
    setGalleryItems(items =>
      items.map(it => it.id === id ? { ...it, checked: !it.checked } : it)
    );
  };

  // Filtrar contenido (simulado)
  const handleFilter = () => {
    // Aquí conectarías el fetch a tu API Django pasando el prompt, date, etc
    alert("Filtrar contenido: (simulado)");
  };

  // Descargar (simulado)
  const handleDownload = () => {
    alert("Descargar contenido: (simulado)");
  };

  // Contador seleccionados
  const selectedPhotos = galleryItems.filter(it => it.checked && it.type === "image").length;
  const selectedVideos = galleryItems.filter(it => it.checked && it.type === "video").length;

  // Si no abierto, no renderizar (mejora rendimiento)
  if (!open) return null;

  // Formato de fecha (opcional, personalizable)
  const formattedDate = date ? (new Date(date)).toLocaleDateString("es-MX", { weekday:"long", year:"numeric", month:"long", day:"numeric" }) : "";

  return (
    <aside className="w-[420px] min-w-[350px] bg-white shadow-lg h-full fixed right-0 top-0 p-5 border-l flex flex-col z-50">
      <button onClick={onClose} className="absolute right-4 top-2 text-xl text-gray-400 hover:text-red-400">&times;</button>
      <PostForm
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        prompt={prompt}
        setPrompt={setPrompt}
        date={formattedDate}
      />
      <GalleryToolbar
        selectedPhotos={selectedPhotos}
        selectedVideos={selectedVideos}
        onFilter={handleFilter}
        onDownload={handleDownload}
      />
      <GalleryScrollArea
        items={galleryItems}
        onToggleCheck={handleToggleCheck}
      />
      <GalleryToolbar
        selectedPhotos={selectedPhotos}
        selectedVideos={selectedVideos}
        onDownload={handleDownload}
        bottom
      />
    </aside>
  );
}

export default RightDrawer;
