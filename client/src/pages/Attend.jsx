  import {React, useEffect, useState} from 'react'
  import Navigation_Attend from '../components/Navigation_Attend'
  import { useParams } from 'react-router-dom'
  import axios from 'axios';

  const Attend = () => {
    const [questions, setQuestions] = useState([]);
    const {quizz_id} = useParams(); 
    
    useEffect(() => {

      const fetchQuestionsOptions = async () => {
        const response = await axios.get(`http://localhost:3000/api/v2/quizz/questions/${quizz_id}`);
        const allQuestions = response.data

        const allQuestionsOptions = await Promise.all(
          allQuestions.map(async (question) => {
            const OptionsResponse = await axios.get(`http://localhost:3000/api/v2/quizz/options/${question.question_id}`)
            return {...question, options : OptionsResponse.data}
          })
        )

        setQuestions(allQuestionsOptions)
      }

      fetchQuestionsOptions();


    }, [])
    


    console.log(questions.options)

    return (
      <>
        <Navigation_Attend />
        <div className='h-[100vh] w-full bg-gradient-to-b  from-PopYellow to-KindaWhite flex items-center'>
          <div className='Quizz w-[80%] mx-auto h-[80%]'>
            <h1 className='text-[50px] font-extrabold text-GreenBrown mb-10'>Title of the quiz</h1>
            
              {
                questions.map((question) => (
              <div className='question w-[95%] mx-auto mb-10' key = {question.question_id}>
                
                  <h2 className='text-2xl font-semibold text-GreenBrown' key={question.question_id}>{question.question_text}</h2>
                  
                  <div className='my-2'>

                  { question.options.map((option) => (
                    <div key = {option.option_id}>
                      <input className='mx-4 accent-GreenBrown ' type="radio" name = "question1"  />

                      <label className='font-medium'>{option.option_text}</label>
                   
                    </div>
                  ))                   
                  }

                  </div>                
            </div>
              
                ))
              }


            


          </div> 

        </div>
      </>
    )
  }

  export default Attend
