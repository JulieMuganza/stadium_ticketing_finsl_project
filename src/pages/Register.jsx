import React,{useState} from 'react'
// import "./Register.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [mobile,setMobile] = useState("");
  const [role,setRole] = useState("");

  const {t,i18n} = useTranslation();

  // const handleChangeLanguage = () => {
  
  
  // i18n.changeLanguage("en")
  // }
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const data = await fetch("http://localhost:8080/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({email,password,firstname,lastname,role,mobile})
    }).then(res => res).catch(err => err)

    console.log(data);
    if(data){
      toast.success('Registration Successfull')
      navigate("/login")
    }

    console.log(email);
    console.log(password)
  }
  return (
    <div>
<ToastContainer/>
      <Header />

      {/* <!-- Registration Form --> */}
      <div class="form-container">
        <form onSubmit={handleSubmit}>
          <h3>{t('Registration')}</h3>

          <input type="text" th:field="*{firstName}" placeholder={t('First Name')}  required onChange={(e) => setFirstName(e.target.value)}/>
          <input type="text" th:field="*{lastName}" placeholder={t('Last Name')} required onChange={(e) => setLastName(e.target.value)} />
          <input type="text" th:field="*{mobile}" placeholder= {t('Mobile Number')} required onChange={(e) => setMobile(e.target.value)}/>
          <input type="text" th:field="*{email}" placeholder= {t('Email')} required onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" th:field="*{password}" placeholder= {t('Password')} required onChange={(e) => setPassword(e.target.value)}/>

          <select required onChange={(e) => setRole(e.target.value)}>
            <option value="">{t('Select Role')}</option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>

          <button type="submit">{t('Register')}</button>

         
          <div class="text-center mt-3">
          <a onClick={() => navigate("/login")} style={{ cursor: "pointer", textDecoration: "underline", color: "#007bff" }}>
           {t('Already have an account? Log in')}
            </a>
        </div>

          {/* <!-- Success and Error Messages --> */}
          <div th:if="${successMessage}" class="text-success mt-2" th:text="${successMessage}"></div>
          <div th:if="${bindingResult!=null && bindingResult.getAllErrors()!=null}">
            <ul class="error" th:each="data : ${bindingResult.getAllErrors()}">
              <li th:text="${data.getObjectName() + ' :: ' + data.getDefaultMessage()}"></li>
            </ul>
          </div>
        </form>
     
       

      </div>


      <Footer />

    </div>
  )
}

export default Register
