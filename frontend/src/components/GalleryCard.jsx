import React from "react";

function GalleryCard({ url, type, checked, onCheck }) {
  return (
    <div className={`relative rounded border flex items-center justify-center h-[100px] bg-white`}>
      <input
        type="checkbox"
        className="absolute left-1 top-1 w-4 h-4 accent-blue-600 rounded-full"
        checked={checked}
        onChange={onCheck}
      />
      {type === "image" ? (
        <img src={url} alt="img" className="object-cover rounded w-16 h-16 mx-auto" />
      ) : (
        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M10 8.64v6.72c0 .46.54.74.92.46l5.12-3.36a.54.54 0 000-.92L10.92 8.64a.54.54 0 00-.92.46z" fill="#9CA3AF" /></svg>
        </div>
      )}
    </div>
  );
}

export default GalleryCard;
