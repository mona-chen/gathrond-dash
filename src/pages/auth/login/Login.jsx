import React from 'react'
import '../../../theme/assets/css/libs.min.css'
import '../../../theme/assets/css/nairobi.css'
import brand1 from '../../../assets/images/brands/01.png'
import brand2 from '../../../assets/images/brands/02.png'
import brand3 from '../../../assets/images/brands/03.png'
import auth1 from '../../../assets/images/auth/01.png'
import logo from '../../../assets/images/logo.svg'



function Login() {
  return (

      <div className="wrapper">
        <section className="vh-100">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-6">
                <img
                  src={auth1}
                  className="bottom-img1"
                  alt="images"
                />
              </div>
              <div className="col-md-6 mt-5">
              <div className="text-center mt-3 mb-5">
                         <img src={logo} alt="logo" />
                        </div>
                <div className="card">
                  <div className="card-body">
                    <div className="auth-form">
                      <h2 className="text-center mb-4 ">Sign In</h2>
                      <form>
                        <p className="text-center">Sign in to stay connected</p>
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="email"
                            placeholder=" "
                          />
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              aria-describedby="password"
                              placeholder=" "
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between  align-items-center flex-wrap">
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="Remember"
                              />
                              <label className="form-check-label" htmlFor="Remember">
                                Remember me?
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <a href="#page-forgot-password.html">Forgot Password?</a>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="button" className="btn btn-primary ">
                            Sign In
                          </button>
                        </div>
                        {/* <div className="text-center mt-3">
                          <p>or sign in with others account?</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                          <ul className="list-group list-group-horizontal list-group-flush">
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#">
                                <img
                                  src={brand1}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="img60"
                                />
                              </a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#">
                                <img
                                  src={brand2}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="gm"
                                />
                              </a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#">
                                <img
                                  src={brand3}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="im"
                                />
                              </a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#">
                                <img
                                  src="../../assets/images/brands/04.png"
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="li"
                                />
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </form>
                      {/* <div className="new-account mt-3 text-center">
                        <p>
                          Don't have an account?{' '}
                          <a className="" href="../../dashboard/auth/sign-up.html">
                            Click here to sign up
                          </a>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-bottom">
            <a href="../../dashboard/index.html">
              <svg
                width="100"
                viewBox="0 0 197 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your SVG path and other SVG elements go here */}
              </svg>
            </a>
          </div>
        </section>
      </div>
  
  )
}

export default Login