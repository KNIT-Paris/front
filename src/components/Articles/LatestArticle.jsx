import React from "react";
import "./article.scss";

export default function LatestArticle({ article }) {
  console.log(article);
  return (
    article && (
      <div className="latest-article__wrapper">
        <div className="image">
          <img src={article.image} alt="" />
        </div>
        <div className="text">
          <div className="title">{article.title}</div>
          <div className="content">{article.content}</div>
          <div className="tags__wrapper">
            {article.tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
