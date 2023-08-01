import { useEffect } from "react";
import { useState } from "react";
import Information from "../Information/Information";

const Category = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        fetch('infos.json')
            .then(res => res.json())
            .then(data => setDocs(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-8">Job Category List</h2>
            <p className="text-center pb-4">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-4">

                {
                    docs.map(doc => <Information
                        key={doc.id}
                        doc={doc}
                    ></Information>)
                }
            </div>
        </div>

    );
};

export default Category;