import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInError

    if (loading || gLoading) {
        return <Loading> </Loading>
    }

    if (gUser) {
        console.log(gUser);
    }

    if (error || gError) {
        signInError = <p>{error?.message || gError?.message}  </p>
    }


    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data.email, data.email);
    };



    return (
        <div className='flex h-screen justify-center items-center'>


            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold"> Login </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name */}

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="Text"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>



                        {/* email */}

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>




                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="Password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("Password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.email?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white' type="submit" value='Sign Up' />
                    </form>
                    <p className='text-center'> <small> Already have an account? <Link className='text-primary' to='/Login'>Please Login</Link> </small> </p>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent">CONTINUE WITH GOOGLE</button>

                </div>
            </div>

        </div>
    );
};

export default SignUp;