import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-100">
            <h1 className="text-3xl font-bold ml-24">Job Hunt</h1>
         <div className="w-96 space-x-12 py-12 px-12 " >
         <Link to="/statistics" className="text-purple-500" href="/statistics">Statistics</Link>    
           <Link to="/applied Jobs">Applied Jobs</Link>
           <Link to="/blog">Blog</Link>
            </div> 
            <div className="">
            <button className="bg-purple-400 h-12 w-36 rounded text-white font-bold mr-28">Start Applying</button> 
            </div>
            
        </nav>
    );
};

export default Navbar;