import {React, useState, useEffect} from 'react';
import axios from 'axios';

const Available = () => {
  const [quizzes, setQuizzes] = useState([]);
  
  useEffect(() => {
    const fetchQuizz = async () => {
      try{
        const response = await axios.get('http://localhost:3000/api/v2/quizz')
        setQuizzes(response.data)
      }
      catch (error){
        console.log(error.message)
      }
    }

    fetchQuizz();
  }, [])

  console.log(quizzes);

  return (
    <div className="w-[80%] mx-auto h-[100vh] flex flex-col items-center">
      <h1 className="text-[50px] font-extrabold text-GreenBrown mb-10" name = "Available">Available Quizzes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[100px] justify-center">

        {
          quizzes.map(quiz => (
            <div key = {quiz.id} className="border-transparent border-2 rounded-md w-[300px] h-[200px] flex flex-col items-center">
              <h2 className='text-GreenBrown font-semibold text-[22px] mt-2'>{quiz.title}</h2>
              <h3 className='text-GreenBrown font-semibold text-[18px] -mt-1 mb-2'>Duration : {quiz.duration} min</h3>
              <p className='text-center text-[15px]'>{quiz.description}</p>
              <button className='bg-PopYellow px-4 py-1 border-GreenBrown border-2 rounded-md my-5'>Attend</button>
            </div>            

          ))
        }



      </div>
    </div>
  );
};

export default Available;
