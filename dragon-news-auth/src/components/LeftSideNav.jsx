import { useEffect, useState } from "react";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('data/categories.json')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div>
            <h2 className="text-2xl font-bold">All Category</h2>
            <button className="btn bg-gray-700 my-5 mb-8 rounded-sm">National News</button>
            <div>
               {
                categories.map(category=><li key={category.id} className="mb-4 list-none font-medium text-xl">{category.name}</li>)
               }
            </div>
        </div>
    );
};

export default LeftSideNav;