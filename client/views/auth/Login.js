import React from "react";
import { FaTwitter } from "react-icons/fa";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="bg_login ">
          <div className="container" style={{ height: "100vh" }}>
            {this.props.error ? alert(this.props.error) : ""}

            <div className="row ">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
                <div className="card card-signin my-5 shadow">
                  <h5 className="h3 text-center font-weight-bolder my-3">
                    Sign In
                  </h5>
                  <div className="login_image_section mx-auto">
                    <img
                      src="/images/twitter.svg"
                      className="card-img-top responsive_img"
                      alt="login "
                    />
                  </div>
                  <div className="card-body">
                    <a
                      href="/api/v1/users/auth/twitter"
                      className="btn btn-lg btn_twitter btn-block text-uppercase"
                      type="primary">
                      <FaTwitter className="mr-3" />
                      Sign in with twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
