import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  const article = props.article;
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <header>
        <h1>{article.title}</h1>
        <address>
          by {article.author} (
          <a href={article.authorEmail}>{article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={article.timeStamp}>{article.displayDate}</time>
      </header>
      <HTMLText text={article.text} />
    </article>
  );
};

export default DynamicArticle;
