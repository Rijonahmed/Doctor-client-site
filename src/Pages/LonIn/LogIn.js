import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';
import Loading from '../Shared/Loading';

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {

    signInWithEmailAndPassword(data.email, data.password)
  };

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {

    navigate(from, { replace: true });

  }

  if (loading || gLoading) {
    return <Loading></Loading>
  }

  let signInError;


  if (error || gError) {
    signInError = <p className='text-red-500'>{error.message}</p>

  }

  return (
    <div className='flex justify-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-bold">Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>

              </label>
              <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    massage: 'email is required'
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    massage: 'Provide a valid email'
                  }
                })}

              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.massage}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.massage}</span>}


              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>

              </label>
              <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    massage: 'password is required'
                  },
                  minLength: {
                    value: 6,
                    massage: 'six chareacter '
                  }
                })}

              />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.massage}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.massage}</span>}


              </label>
            </div>

            {signInError}


            <input className='btn w-full max-w-xs' type="submit" value='Log In' />
          </form>

          <p><small>New to Doctor site <Link className='text-primary' to="/signup">Create a new Account</Link></small></p>

          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue google</button>



        </div>
      </div>
    </div>
  );
};

export default LogIn;