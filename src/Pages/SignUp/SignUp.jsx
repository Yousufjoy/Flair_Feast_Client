import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data =>{
    console.log("The data",data);
  }
 
   
  
  return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name",{ required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
              
                />
                {errors.name && <span className="text-red-600" >This field is required</span>}
              </div>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email",{ required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
               
              />
              {errors.email && <span className="text-red-600" >This field is required</span>}
            </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password",{ required: true, minLength: 6, maxLength: 20 })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered "
                 
                />
                {errors.password && <span className="text-red-600">Pssword is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
            
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
           <p> <small> Already have an account? </small> <Link to="/login">Login</Link>  </p>
          </div>
      
        </div>
      </div>
    );
};

export default SignUp;