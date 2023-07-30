



const Header = () => {
    return (
        <nav className="flex justify-between items-center ">
            <h1 className="text-3xl font-bold">Job Hunt</h1>
         <div className="w-96 space-x-12 py-12 px-12 " >
         <a className="text-purple-500" href="/statistics">Statistics</a>    
           <a href="/applied Jobs">Applied Jobs</a>
           <a href="/blog">Blog</a>
            </div> 
            <div className="">
            <button className="bg-purple-400 h-12 w-36 rounded text-white font-bold">Start Applying</button> 
            </div>
            
        </nav>
    );
};

export default Header;