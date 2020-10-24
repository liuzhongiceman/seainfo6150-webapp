import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import styles from "../ArticleList/ArticleList.module.css";

const ArticleList = (props) => {
  
  let displayContent;
  
  if (props.articles.length) {
    displayContent = (
      <ul className={styles.list}>
        {props.articles.map((article, index) => {
          return <ArticleListItem article={article} key={index}></ArticleListItem>
        })}
      </ul>
    )
  } else {
    displayContent = <div>You have no data!</div>;
  }
  
  return (
    <section>
     {displayContent}
    </section>
  )
};

export default ArticleList;
