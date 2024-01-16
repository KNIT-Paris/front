import React from "react";
import "./article.scss";

export default function LatestArticle({ article }) {
  return (
    article && (
      <div className="latest-article__wrapper">
        <div className="image">
          <img src={article.attributes.image} alt="" />
        </div>
        <div className="text">
          <div className="title">{article.attributes.title}</div>
          <div className="content">{article.attributes.content[0].children[0].text}</div>
          <div className="tags__wrapper">
{/*             {article.tags.map((tag) => (
              <p>{tag}</p>
            ))} */}
          </div>
        </div>
      </div>
    )
  );
}
