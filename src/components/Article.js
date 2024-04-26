import React from "react";

function Article({ title, date, preview }) {
  // If date prop is not provided, use the default value "January 1, 1970"
  const formattedDate = date ? date : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
