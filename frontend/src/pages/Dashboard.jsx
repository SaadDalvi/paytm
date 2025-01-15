import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard() {

    return <>
    <div className="px-20 py-20 h-screen w-screen">

    <Appbar/>
    <Balance balance={"10,000"}/>
    <Users/>
    </div>
    
    </>
    
    }
    