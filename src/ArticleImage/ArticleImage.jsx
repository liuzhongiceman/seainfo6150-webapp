import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = ({url, title}) => {

  return (
    <div>
      <img src={url} alt="article image"/>
      <h2>{title}</h2>
    </div>
  );
};

export default ArticleImage;