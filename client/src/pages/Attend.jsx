import {React, useEffect, useState} from 'react'
import Navigation_Attend from '../components/Navigation_Attend'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Attend = () => {
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {

    const fetchQuestions = async () => {
      const response = await axios.get('http://localhost:3000/api/v2/quizz/questions/1');
      setQuestions(response.data)
    }

    fetchQuestions();


  }, [])
  


  console.log(questions)

  return (
    <>
      <Navigation_Attend />
      <div className='h-[100vh] w-full bg-gradient-to-b  from-PopYellow to-KindaWhite flex items-center'>
        <div className='Quizz w-[80%] mx-auto h-[80%]'>
          <h1 className='text-[50px] font-extrabold text-GreenBrown mb-10'>Title of the quiz</h1>
          <div className='questions w-[95%] mx-auto'>

            <h2 className='text-2xl font-semibold text-GreenBrown'>Question 1</h2>
            <div className='my-2'>
              <label className='font-medium'>option 1</label>
              <input className='mx-4 accent-GreenBrown ' type="radio" name = "question1"  />

              <label className='font-medium'>option 2</label>
              <input className='mx-4 accent-GreenBrown ' type="radio" name = "question1"  />

              <label className='font-medium'>option 3</label>
              <input className='mx-4 accent-GreenBrown ' type="radio" name = "question1"  />

              <label className='font-medium'>option 4</label>
              <input className='mx-4 accent-GreenBrown ' type="radio" name = "question1"  />
            </div>



          </div>
        </div> 

      </div>
    </>
  )
}

export default Attend
