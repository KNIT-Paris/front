import React from "react";
import "./article.scss";

export default function ArticleCard({ article }) {
  return (
    article && (
      <div className="article-card">
        <img src={article.image} alt="" />
        <div className="title">{article.title}</div>
        <div className="content">{article.content}</div>
      </div>
    )
  );
}
