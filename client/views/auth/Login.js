import React from "react";
import { FaTwitter } from "react-icons/fa";

import { twitterLoginIcon } from "../assets/image/image";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="bg_login align-middle">
          <div className="container border border-primary">
            {this.props.error ? alert(this.props.error) : ""}

            <div className="row ">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
                <div className="card card-signin my-5">
                  <h5 className="card-title text-center">Sign In</h5>
                  <div className="login_image_section">
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
                      <FaTwitter className="mr-5" />
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
