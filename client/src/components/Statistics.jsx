import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Statistics = () => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user_id } = useParams();


  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch the quiz submissions data
        const response = await axios.get(`http://localhost:3000/api/v2/quizz/score/${user_id}`);
        setSubmissions(response.data);
      } catch (err) {
        setError('Error fetching statistics');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-[100vh]'>
        <p className="text-xl font-medium text-GreenBrown">Loading statistics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-[100vh]'>
        <p className="text-xl font-medium text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center h-[100vh] w-full bg-gradient-to-b from-KindaWhite p-5'>
      <h1 className="text-[50px] font-extrabold text-GreenBrown mb-10">Quiz Statistics</h1>
      
      {submissions.length === 0 ? (
        <p className="text-xl text-GreenBrown">No submissions available.</p>
      ) : (
        <table className="w-[90%] mx-auto bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-PopYellow text-GreenBrown text-xl">
              <th className="py-3 px-5 text-left">Quiz ID</th>
              <th className="py-3 px-5 text-left">Score</th>
              <th className="py-3 px-5 text-left">Completed At</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.submission_id} className="hover:bg-gray-100">
                <td className="py-3 px-5 text-GreenBrown font-medium">{submission.quiz_id}</td>
                <td className="py-3 px-5 text-GreenBrown">{submission.score}</td>
                <td className="py-3 px-5 text-GreenBrown">{new Date(submission.completed_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Statistics;
