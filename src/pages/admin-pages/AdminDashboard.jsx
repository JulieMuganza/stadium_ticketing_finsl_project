import React,{useState,useEffect} from 'react'
import "./AdminDashboard.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';


function AdminDashboard() {
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

  return (
 
    <div>
<Header/>

<div class="container-fluid">
    <h2>{t('Welcome to the Admin Dashboard')}</h2>
    <div class="text-center">
        <p>{t('Logged in as:')} <span sec:authentication="name">{user.email}</span></p>
        <p>{t('Role:')} <span sec:authentication="authorities">{user.status}</span></p>
    </div>

    {/* <!-- Dashboard Links --> */}
    <div class="dashboard-links text-center">
        <a href="/" className="btn">{t('Home')}</a>
        <a href="/Viewclient" className="btn">{t('View Client')}</a>
        <a className="btn" onClick={handleLogout}>{t('Log OUT')}</a>
    </div>
</div>


<Footer />

    </div>
  )
}

export default AdminDashboard
