import React, { useDebugValue, useEffect ,useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "./Register.css"
import "./UserDashboard.css"
import { Link, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next';

const UserDashboard = () => {
    const {t,i18n} = useTranslation();
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem("user");
        navigate("/")
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"));
        if (!data) {
            console.log(data)
        }
        setUser(data)
    },[])

    console.log(user.email)
    return (
        <div>
             <Header />
             <div className="container-fluid">
        <h2>{t('Welcome to the User Dashboard')}</h2>
        <div className="text-center">
            <p>{t('Logged in as:')} <span sec:authentication="name">{user.email}</span></p>
            <p>{t('Role:')} <span sec:authentication="authorities">{user.status}</span></p>
        </div>

        {/* <!-- Dashboard Links in Same Line --> */}
        <div className="dashboard-links text-center">
            <a href="/">{t('Home')}</a>
            <Link to="/book">{t('Book Ticket')}</Link>
            <a onClick={handleLogout}>{t('Log Out')}</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserDashboard
