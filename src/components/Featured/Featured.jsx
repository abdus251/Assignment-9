import orgs from '../../../src/orgs.json';

const Featured = () => {
   
    return (
        <div>
            <h2 className="text-2xl font-bold text-center pt-20">Featured Jobs</h2>
            <p className="text-center p-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <div className="grid grid-cols-2  ">
                {
                    orgs && orgs.map( org => {
                        return(
                            <div className='border-2 p-4  gap-8' key={org.id}>
                                <img src={org.url}alt="" className='pb-2 ' />
                                <p>{org.job_title}  <br /> 
                                {org.name}  <br />
                                {org.job_type} <br />
                                {org.location}  <br />
                                {org.salary}
                                </p> 
                                <button className='bg-purple-400 rounded w-28 h-8'>Button</button>              
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Featured;