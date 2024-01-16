import React from "react";
import "./article.scss";

export default function ArticleCard({ article }) {
  return (
    article && (
      <div className="article-card">
        <img src={article.attributes.image} alt="" />
        <div className="title">{article.attributes.title}</div>
        <div className="content">{article.attributes.content[0].children[0].text}</div>
      </div>
    )
  );
}
