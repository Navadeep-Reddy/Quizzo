import React, { useState } from 'react';

const Login = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(true);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='bg-gradient-to-r from-PopYellow to-KindaWhite h-[100vh] w-full flex items-center justify-center'>
      <div className='box h-[60%] w-[80%] flex '>
        <div className='w-[50%] h-full flex flex-col items-center justify-center'>
          <h1 className='text-[100px] font-extrabold text-GreenBrown -my-3 -mt-[50px]'>Quizzo</h1>
          <p className='font-medium text-[18px]'>Engaging quizzes to test your knowledge across various subjects</p>
        </div>

        <div className='w-[50%] h-full flex items-center justify-center'>
          <div className='w-[500px] h-[310px] bg-transparent border-[3px] border-GreenBrown rounded-md flex flex-col items-center backdrop-blur-md'>
            <h1 className='text-3xl font-semibold my-5'>Login</h1>

            <input className='w-[70%] rounded-md border-2 border-GreenBrown px-4 py-2' placeholder='Username' />

            <div className='relative w-[70%]'>
              <input
                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                className='w-full rounded-md border-2 border-GreenBrown px-4 py-2 my-5'
                placeholder='Password'
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-GreenBrown focus:outline-none'
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button className='border-2 border-GreenBrown px-[50px] rounded-md mt-6 py-[2px] bg-PopYellow font-semibold text-GreenBrown'>Login</button>
            {
                !status && (
                    <div className='text-CoralOrange mt-2'>Invalid Credentials</div> 
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
