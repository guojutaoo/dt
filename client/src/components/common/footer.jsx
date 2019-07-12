import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer
        className="py-4 bg-primary"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
              {" "}
              <p>
                <a href="/home" style={{ color: "black" }}>
                  Back
                </a>
              </p>
            </div>
            <div className="col-md-5 mt-md-0 mt-3">
              <p>
                {" "}
                <a href="/home" title="youtube" style={{ color: "black" }}>
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
              </p>
            </div>
            <div className="col-md-3 mt-md-0 mt-3">
              <p>
                {" "}
                <a href="/home" title="twitter" style={{ color: "black" }}>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </p>
              <p>
                {" "}
                <a href="/home" title="wechat" style={{ color: "black" }}>
                  <i className="fa fa-weixin" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="https://www.google.com/search?source=hp&ei=1eYbXfbwJY3AsAXHurPgDQ&q=gracepoint+church&oq=gracepoint+church&gs_l=psy-ab.3..0l10.2548.7521..7665...2.0..2.729.3124.4j12j2j0j1j0j1......0....1..gws-wiz.....0..0i10.I4YxQxsEFGE">
            {" "}
            GracePoint
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
