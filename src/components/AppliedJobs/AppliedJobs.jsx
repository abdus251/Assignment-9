import pic from '../../../src/assets/All Images/Vector.png';
import others from '../../../src/others.json';

const AppliedJobs = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center mt-8'>Applied Jobs</h3>
            <img src={pic} alt="" />
            {
                others && others.map(other => {
                    return (
                        <div className="border-2 rounded grid grid-cols-3 divide-y-4 border-solid px-92 p-10 mx-2  gap-2 border-slate-100 space-x-20" key={other.id}>

                            <span className='bg-slate-100 h-40 w-44'>
                                <img src={other.img1} alt="" className='py-16 px-12' /></span>
                            <p className='mt-4'>
                                {other.job_title}  <br />
                                {other.company} <br />
                                <p className='box-content h-6 w-16 text-center border-2 rounded border-purple-400'> {other.employment_type} <p ></p></p> <br />
                                {other.address} <br />
                                {other.salary}

                            </p>
                            <button className='bg-purple-400 text-white text-center rounded h-10 w-1/3 ml-12 mt-10'> View Details</button>
                            <div className=""></div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default AppliedJobs;