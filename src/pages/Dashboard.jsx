import { useAuth } from "../contexts/AuthContext";


function Dashboard () {
    const { user} = useAuth();
    return (
        <div>
                <p>Welcome, {user ? user.fullName : 'User'}!</p>
        </div>
        
    )
}


export default Dashboard;