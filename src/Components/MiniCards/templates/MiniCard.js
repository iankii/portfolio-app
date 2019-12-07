import React from 'react';

import classes from './../index.css';

const miniCard = (props) => {
  var { id, datetime } = props;
  return (
    <article className={classes.MiniCard} id={id}>
      <header >
        <div >
          <div >
            Article
            <time dateTime={datetime}>
              Jan 21, 2019
            </time>
          </div>
          <h2 className="">
            <span>
              The Great Divide
            </span>
          </h2>
        </div>
      </header>
      <div className="mini-article-meta">
        <div className="mini-article-byline">
          <div className="author-avatar">
            <span>Author Name</span>
            <svg className="half-circle" width="80px" height="80px">
            </svg>
          </div>
          <div className="author-name-area">
            <div className="author-name-prefix">
              Author
            </div>
            <span>Author name</span>
          </div>
        </div>

        <div className="tags">
          front-end developer
        </div>
      </div>
    </article>
  );
}

export default miniCard;