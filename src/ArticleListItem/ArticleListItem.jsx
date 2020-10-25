import React, { useCallback, useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  
  const [buttonText, setText] = useState("Show more");
  const onClick = useCallback(
    event => {
      event.preventDefault();
      setText(buttonText === "Show less" ? "Show more" : "Show less");
    },
    [buttonText]
  );
  const showLess = buttonText === "Show less";
  let content;
  if (showLess) {
    content = <div>
                <p>{props.article.shortText}</p>
                <time className={styles.time} dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
              </div>;
  } else {
    content = "";
  }
  
  return (
    <li className={styles.article}>
      <h1 className={styles.title}>{props.article.title}</h1>
      {content}
      <ArticleTextToggleButton buttonText={buttonText} onClick={onClick}></ArticleTextToggleButton>
    </li>
  )
};

export default ArticleListItem;