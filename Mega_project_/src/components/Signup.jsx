import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authservice from '../appwrite/auth'
import { login } from '../store/slice'
import { Button, Input, Logo } from './index'


function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");

    const createAcc = async (data) => {
        setError("")
        try {
            const userData = await authservice.creatAccount(data)
            if (userData) {
                const userData = await authservice.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width ="100%"/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign in
                    </Link>
            </p>
            {error && <p className='text-red-600 mt-6 text-center'>
                {error}
            </p> }
            
            <form onSubmit={handleSubmit(createAcc)}>
                <div className='space-y-5'>

                {/* Name Input  */}
                <Input
                    label = "Full name"
                    placeholder = "Enter your full name"
                    {...register("name", {
                        required: true,
                    })}/>

                {/* Email Input  */}
                <Input
                    label = "Email"
                    placeholder = "Enter your email"
                    type = "email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) 
                            || 
                            "Email address must be a valid address",
                        }
                            
                    })}/>


                {/* Password Input  */}
                <Input
                    label = "Password"
                    placeholder = "Enter your password"
                    {...register("password", {
                        required: true,
                    })}/>

                <Button type="submit" className='w-full'>Create Account</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup
