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
          <form id="signin-form">
            <input type="text" id="signup-input" placeholder="Name" />
            <input type="text" id="signup-input" placeholder="EMAIL ADRESS" />
            <br />
            <label>
              <input type="checkbox" id="bottomCheck" />
              Get the TexasiNet Newsletter
            </label>
            <br />
            <div className="captchabox">
              <div className="col-1">
                <input type="checkbox" id="capcheck" />
              </div>
              <div className="col-6 m-4 p-2">I'm not a robot</div>
              <div className="col-5 m-1" id="captch-img">
                <h6 className="rc-anchor-logo-text">reCAPTCHA</h6>
                <p className="rc-anchor-pt">
                  <a href="https://www.google.com/intl/en/policies/privacy/">
                    Privacy
                  </a>
                  <span aria-hidden="true" role="presentation">
                    {" "}
                    -{" "}
                  </span>
                  <a href="https://www.google.com/intl/en/policies/terms/">
                    Terms
                  </a>
                </p>
              </div>
            </div>
            <input type="submit" id="submitbtn" value="SIGN UP" />
          </form>
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
