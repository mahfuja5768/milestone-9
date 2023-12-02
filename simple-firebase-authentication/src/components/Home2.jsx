import { useContext } from "react";
import { AuthContext } from "../ProviderContext/providers/AuthProvider";

const Home2 = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl text-green-700 text-center my-12">Welcome to simple Authentication page with Auth provider context</h1>
           <h2 className="flex text-3xl font-bold ">Name: {authInfo.name}</h2>
        </div>
    );
};

export default Home2;