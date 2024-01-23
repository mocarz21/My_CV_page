import './Contact.scss'
import { BsSend } from "react-icons/bs";
import Tada from 'react-reveal/Tada';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () =>{

  const API = 'http://localhost:8080/sendemail'

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [jobType, setJobType] = useState('Full-Time')
  const [message, setMessage] = useState()

  const sendEmail = () =>{

    fetch(API,{
      method: 'POST',
      headers:{
        'Content-type':'application/json',
        Accept:'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        jobType,
        message,
      }),
    }).then(res => res.json())
    .then((result) => {

      if(result.error){
        toast.error(result.error,{
          position: "bottom-center"
        })
      }else{
        toast.success("Your E-mail has been sent",{
          position: "bottom-center"
        })
        setName('')
        setEmail('')
        setJobType('')
        setMessage('')
      }

      
    })
    .catch((err) => {console.log(err)})
  }

  return(
    <Tada>
      <div className='container contact-section' id='contact'>
        <div className='row'>
          <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5 '>
            <div className='contact-form-img'>
              <img src='./contact.jpg' alt='contact'/>
            </div>
          </div>
          <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7 '>
            <div className='contact-form-design'>
              <div className='text-center'>
                <h5><b>CONTACT ME</b></h5>
              </div>
              <form>
                <div className='contact-form'>
                  <label className='form-lebel'>Name</label>
                  <input type='text' className='form-control' value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='contact-form'>
                  <label className='form-lebel'>E-mail</label>
                  <input type='text' className='form-control' value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className='contact-form'>
                  <label className='form-lebel'>Job Types</label>
                  <select className='custom-select-tag' value={jobType} onChange={e=>setJobType(e.target.value)} > 
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div className='contact-form'>
                  <label className='form-lebel'>Message</label>
                  <textarea type='text' rows={5} className='form-control' value={message} onChange={e=>setMessage(e.target.value)}/>
                </div>
                <div className='contact-form'>
                  <div className='button-submit' onClick={sendEmail}>
                    <p><b>Send  <BsSend/> </b></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        < ToastContainer autoClose={8000} />
      </div>
    </Tada>
  )
}

export default Contact;