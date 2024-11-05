import { React, useState, useEffect } from 'react';
import Navigation_Attend from '../components/Navigation_Attend';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Attend = () => {
  const [questions, setQuestions] = useState([]);
  const [titleobj, setTitle] = useState("Loading Quiz...");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { quizz_id } = useParams();
  const {user_id} = useParams();

  useEffect(() => {
    const fetchQuestionsOptions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch quiz title
        const titleResponse = await axios.get(`http://localhost:3000/api/v2/quizz/title/${quizz_id}`);
        setTitle(titleResponse.data);

        // Fetch questions
        const questionsResponse = await axios.get(`http://localhost:3000/api/v2/quizz/questions/${quizz_id}`);
        const allQuestions = questionsResponse.data;

        // Fetch options for each question
        const allQuestionsOptions = await Promise.all(
          allQuestions.map(async (question) => {
            const optionsResponse = await axios.get(
              `http://localhost:3000/api/v2/quizz/options/${question.question_id}`
            );
            return { ...question, options: optionsResponse.data };
          })
        );

        setQuestions(allQuestionsOptions);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching the quiz');
        console.error('Error fetching quiz data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (quizz_id) {
      fetchQuestionsOptions();
    }
  }, [quizz_id]);

  const handleOptionChange = (questionId, optionId) => {
    // Handle radio button changes here
    //console.log(`Question ${questionId}, Option selected: ${optionId}`);
  };

  if (error) {
    return (
      <>
        <Navigation_Attend />
        <div className='h-[100vh] w-full bg-gradient-to-b from-PopYellow to-KindaWhite flex items-center justify-center'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-red-600 mb-4'>Error Loading Quiz</h2>
            <p className='text-GreenBrown'>{error}</p>
          </div>
        </div>
      </>
    );
  }


  return (
    <>
      <Navigation_Attend />
      <div className='h-[100vh] w-full bg-gradient-to-b from-PopYellow to-KindaWhite flex items-center'>


        <form className='Quizz w-[80%] mx-auto h-[80%] overflow-y-auto'>
          <h1 className='text-[50px] font-extrabold text-GreenBrown mb-10'>
            {titleobj[0].title}
          </h1>
          
          {isLoading ? (
            <div className='text-center'>
              <p className='text-xl text-GreenBrown'>Loading quiz questions...</p>
            </div>
          ) : (
            questions.length === 0 ? (
              <div className='text-center'>
                <p className='text-xl text-GreenBrown'>No questions available for this quiz.</p>
              </div>
            ) : (
              questions.map((question, questionIndex) => (
                <div 
                  className='question w-[95%] mx-auto mb-10' 
                  key={question.question_id}
                >
                  <h2 className='text-2xl font-semibold text-GreenBrown'>
                    {questionIndex + 1}. {question.question_text}
                  </h2>
                  
                  <div className='my-2'>
                    {question.options.map((option) => (
                      <div 
                        key={option.option_id} 
                        className='my-2 hover:bg-gray-100 p-2 rounded-lg'
                      >
                        <input
                          className='mx-4 accent-GreenBrown'
                          type="radio"
                          id={`question${question.question_id}-option${option.option_id}`}
                          name={`question${question.question_id}`}
                          onChange={() => handleOptionChange(question.question_id, option.option_id)}
                        />
                        <label 
                          className='font-medium cursor-pointer'
                          htmlFor={`question${question.question_id}-option${option.option_id}`}
                        >
                          {option.option_text}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )
          )}
          <div className='w-[92%] mx-auto flex '>
            <button className='h-10 border-2 text-GreenBrown border-GreenBrown bg-CoralOrange px-5 rounded-md hover:scale-105 duration-300 font-semibold '>Submit</button>
          </div>
          
        </form>


      </div>
    </>
  );
};

export default Attend;