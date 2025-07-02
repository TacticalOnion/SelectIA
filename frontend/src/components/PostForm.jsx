import React from "react";

function PostForm({ postTitle, setPostTitle, prompt, setPrompt, date }) {
  return (
    <div>
      <input
        type="text"
        className="w-full rounded mb-1 px-2 py-1 bg-blue-100 text-blue-700 font-semibold"
        placeholder="Título del post"
        value={postTitle}
        onChange={e => setPostTitle(e.target.value)}
      />
      <div className="text-sm mb-1 px-1 py-1 rounded bg-gray-200 text-gray-600">{date}</div>
      <textarea
        className="w-full mb-2 px-2 py-1 rounded border border-gray-300 bg-gray-50"
        rows={3}
        placeholder="Prompt para seleccionar contenido"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
    </div>
  );
}

export default PostForm;
