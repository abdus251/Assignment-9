

const Job = ({job}) => {
    const {description, experiences, id,  job_title, employment_type, educational_requirements}  = job;
    return (
       <div className="flex">
         <div className='ml-32 mt-32 mr-52'>
            <h3 className=''><p className='font-bold'>Job Description:</p> {description}</h3>
            <h3> <p className='font-bold py-4'>Educational Requirement: </p>{educational_requirements}</h3>
            <h3><p className='font-bold'>Experience:</p> {experiences}</h3>
        </div>
       
       </div>
    );
};

export default Job;