import React, { useContext, useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captchaValue = captchaRef.current.value;

    if (!validateCaptcha(captchaValue)) {
      // If captcha validation fails, show an error
      Swal.fire({
        icon: "error",
        title: "Captcha did not Match!!",
        text: "Something went wrong!",
        footer: '<a href="#">Give Correct Captcha.</a>'
      });
      setDisabled(true);
      return;
    }

    signIn(email, password)
      .then((result) => {
        navigate("/");
        Swal.fire("Logged in successfully!");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;

    if (validateCaptcha(value)) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Captcha Matched",
        showConfirmButton: false,
        timer: 1500
      });
      setDisabled(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Captcha did not Match!!",
        text: "Something went wrong!",
        footer: '<a href="#">Give Correct Captcha.</a>'
      });
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Flair_Feast | Log In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className=" btn btn-outline btn-xs mt-2"
                  type="button"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            {errorMessage && <p className="text-red-300">{errorMessage.message}</p>}
            <p>
              <small>New Here</small>
              <Link to="/signup"> Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
