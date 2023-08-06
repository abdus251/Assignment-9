
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-7xl font-bold text-red-600 text-center pt-10'>Sorry <br /> <br />
            404</h1>
            <h2 className='text-7xl font-bold text-purple-600 text-center pt-10 mb-20'>That Page can not be found!!!!!!!!!!!!!!</h2>
            <Link to="/" className='bg-black text-white font-bold text-center ml-28 mt-24'>Back to the homepage...</Link>
        </div>
    );
};

export default NotFound;