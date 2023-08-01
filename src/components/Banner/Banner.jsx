import profile from '../../../src/assets/All Images/abdus.png'

const Banner = () => {
    return (
        <div className='flex justify-between bg-slate-100'>
           <div className="ml-24">
           <h2 className="text-6xl font-bold pt-20">One Step <br />Closer To Your <br /> <span className='text-purple-400'>Dream Job</span></h2>
           <p className='pt-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
           <button className='bg-purple-400 w-28 rounded h-12 mt-4'>Get Started</button>
           </div>
           <div className="">
            <img className='w-2/2 h-auto mr-28' src={profile} alt="" />
           </div>
        </div>
        
    );
};

export default Banner;