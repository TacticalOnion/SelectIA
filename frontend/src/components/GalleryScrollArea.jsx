import React from "react";
import GalleryCard from "./GalleryCard";

function GalleryScrollArea({ items, onToggleCheck }) {
  return (
    <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[300px] pr-2 pb-4 mb-2 border bg-gray-50 rounded">
      {items.map(item => (
        <GalleryCard
          key={item.id}
          {...item}
          onCheck={() => onToggleCheck(item.id)}
        />
      ))}
    </div>
  );
}

export default GalleryScrollArea;
