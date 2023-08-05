
import img from '../../assets/All Images/Vector.png'
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs = useLoaderData()
    // console.log(jobs)
    return (
        <div className=''>
             <img src={img} alt="" />
         <div className='flex'>
            {
                jobs.map(job=> <Job
                key={job.id}
                job={job}
                ></Job>)
            }
            <div className="className='text-black p-4 box-content w-2/4 h-76 bg-purple-50 mr-28 mt-36">
               <span className='font-bold'>Job Details <hr /></span> 
                <p><span className='font-bold'>Salary:</span>100k-150k(Per Month) <br />        <span className='font-bold'>Job Title:</span> Product Designer
                <br />
                <span className='font-bold'>Contact Information: <hr className=''/></span> Product Designer  <br />
                <span className='font-bold'>Phone:</span> 01913475188</p>  
                <span className='font-bold'>Email:</span> info@gmail.com       
                <br /><span className='font-bold'>Address:</span> Dhanmondi 32, Sukrabad, Dhaka, Bangladesh  <br />
                <button className='bg-purple-300 w-full h-8 font-bold mt-2 rounded'>Apply Now</button>  
            </div>

         </div>
        </div>
        
    );
};

export default Jobs;