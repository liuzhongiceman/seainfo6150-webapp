import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import styles from "../ArticleList/ArticleList.module.css";

const ArticleList = (props) => {
  
  let displayContent;
  
  if (props.articles.length) {
    displayContent = (
      <div className={styles.list}>
        {props.articles.map((article, index) => {
          return <ArticleListItem article={article} key={index}></ArticleListItem>
        })}
      </div>
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
