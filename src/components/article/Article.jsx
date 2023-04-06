import './article.css'
import React from 'react'

const Article = ({ imgUrl, date, text}) => {
  return (
    <div className="gpt__blog-container_article">
      <div className="gpt__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
        <div className="gpt__blog-container_article-content">
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
            </div>
            <p>Read full article</p>
        </div>
    </div>
  )
}

export default Article