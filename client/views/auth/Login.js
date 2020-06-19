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
        <section className="bg_login">
          <div className="container">
            {this.props.error ? alert(this.props.error) : ""}

            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>

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
