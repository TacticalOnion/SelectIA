import React from "react";

function GalleryToolbar({ selectedPhotos, selectedVideos, onFilter, onDownload, bottom }) {
  return (
    <div className={`flex items-center gap-2 my-2 ${bottom ? "justify-between" : "justify-start"}`}>
      {!bottom &&
        <>
          <button
            className="px-2 py-1 rounded bg-blue-100 text-blue-600 font-medium text-sm hover:bg-blue-200"
            onClick={onFilter}
          >Filtrar contenido</button>
          <button
            className="px-2 py-1 rounded bg-blue-100 text-blue-600 font-medium text-sm hover:bg-blue-200"
            onClick={onDownload}
          >Descargar contenido</button>
        </>
      }
      <span className={`flex-1 text-xs rounded bg-gray-200 px-2 py-1 text-gray-700 ${bottom ? "text-center" : ""}`}>
        ({selectedPhotos}) foto(s) y ({selectedVideos}) video seleccionado
      </span>
      {bottom &&
        <button
          className="w-full px-2 py-2 mt-2 rounded bg-blue-100 text-blue-600 font-semibold hover:bg-blue-200"
          onClick={onDownload}
        >Descargar contenido</button>
      }
    </div>
  );
}

export default GalleryToolbar;
