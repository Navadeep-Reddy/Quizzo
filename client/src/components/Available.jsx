import React from 'react';

const Available = () => {
  return (
    <div className="w-[80%] mx-auto h-[100vh] flex flex-col items-center">
      <h1 className="text-[50px] font-extrabold text-GreenBrown mb-10">Available Quizzes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[100px] justify-center">
        <div className="border-GreenBrown border-2 rounded-md w-[300px] h-[200px] flex flex-col items-center">
            <h2 className='text-GreenBrown font-semibold text-[22px] mt-2'>Value Ed</h2>
            <h3 className='text-GreenBrown font-semibold text-[18px] -mt-1 mb-2'>Duration : 150 min</h3>
            <p className='text-center text-[15px]'>Description of the quiz being taken</p>
            <button className='bg-PopYellow px-4 py-1 border-GreenBrown border-2 rounded-md my-5'>Attend</button>
        </div>


        <div className="bg-PopYellow w-[200px] h-[200px] flex items-center justify-center">
          hello
        </div>
        <div className="bg-PopYellow w-[200px] h-[200px] flex items-center justify-center">
          hello
        </div>
        <div className="bg-PopYellow w-[200px] h-[200px] flex items-center justify-center">
          hello
        </div>
        <div className="bg-PopYellow w-[200px] h-[200px] flex items-center justify-center">
          hello
        </div>

      </div>
    </div>
  );
};

export default Available;
