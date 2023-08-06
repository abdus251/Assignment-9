import { NavLink } from "react-router-dom";




const Header = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-100">
            <h1 className="text-3xl font-bold ml-32">Job Hunt</h1>
            <div className="w-96 flex space-x-4 py-12 px-12  " >
                <NavLink to="/" className="hover:bg-purple-400">Home</NavLink>
                <NavLink to="/statistics" className="hover:bg-purple-400">Statistics</NavLink>
                <NavLink to="/appliedJobs" className="hover:bg-purple-400">Applied Jobs</NavLink>
                <NavLink to="/blog" className="hover:bg-purple-400">Blog</NavLink>

            </div>
            <div className="">
                <button className="bg-purple-400 h-12 w-36 rounded text-white font-bold mr-28">Start Applying</button>
            </div>

        </nav>
    );
};

export default Header;