import React from "react";
import articles from "../../../public/assets/data/articles";
import { useEffect } from "react";
import LatestArticle from "../../components/Articles/LatestArticle";
import "./discover.scss";
import ArticleCard from "../../components/Articles/ArticleCard";
export default function Discover() {
  return articles.length > 0 ? (
    <div className="discover__wrapper">
      <div className="hero-article__wrapper">
        <h3>Latest article</h3>
        <LatestArticle article={articles[1]} />
      </div>
      <div className="tagged-articles__wrapper">
        <h3>Latests</h3>
        <div className="article-cards__wrapper">
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
        <h3>Mode</h3>
        <div className="article-cards__wrapper">
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
        <h3>Paris</h3>
        <div className="article-cards__wrapper">
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
}
