import React from "react";

const BlogBottom = () => {
  return (
    <>
      <div id="wave">
        <div className="col-md-6">
          <h1 className="wave-title">
            SIGN UP TO THE
            <h2 id="wave-title2">TEXASiNET NEWSLETTER</h2>
          </h1>
        </div>
        <div className="col-md-6">
          <img
            width="473"
            height="332"
            src="https://www.texasinet.com/wp-content/uploads/2021/09/Newslatter-Illustration-8.png"
            className="attachment-large"
            id="wave-img"
            alt=""
            loading="lazy"
            srcset="https://www.texasinet.com/wp-content/uploads/2021/09/Newslatter-Illustration-8.png 473w, https://www.texasinet.com/wp-content/uploads/2021/09/Newslatter-Illustration-8-300x211.png 300w"
            sizes="(max-width: 473px) 100vw, 473px"
          />
        </div>
      </div>
    </>
  );
};
export default BlogBottom;
