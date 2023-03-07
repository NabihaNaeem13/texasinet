import React from "react";

const TopBox = () => {
  return (
    <div className="row">
      <div id="blog-container">
        <h1 className="text-center">
          Welcome To TexasiNet Blog
          <p id="blog-p">
            <em>Knowledge at your fingertips…</em>
          </p>
        </h1>
      </div>
      <h2 className="text-center">
        Provide digital content to educate users about our
        <h2>range of solutions and technology</h2>
        <img
          width="800"
          height="50"
          src="https://www.texasinet.com/wp-content/uploads/2021/09/Blog-Cover-Animation.gif"
          alt=""
          loading="lazy"
          className="img-fluid"
        />
      </h2>
    </div>
  );
};
export default TopBox;

