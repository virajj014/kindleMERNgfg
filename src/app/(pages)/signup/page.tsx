"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Signup.module.css';
import { useRouter } from 'next/navigation'

const apiurl = process.env.NEXT_PUBLIC_API_URL

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });
 
  const router = useRouter()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };


const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    const { name, email, password, confirmpassword } = formData;

    if (password !== confirmpassword) {
        alert('Passwords do not match');
        return;
      }
  


      try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password })
        });
  
        if (response.ok) {
       
          alert('Account created successfully');
          router.push('/login')
          // Redirect to login or another page if necessary
        } else {
          const data = await response.json();
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error creating account');
      }
    };
  

    
    return (
        <div className={styles.createAccountContainer}>
            <Image
                src="https://m.media-amazon.com/images/G/31/kfw/landing/img_logo_DKBL._CB612496475_.png"
                alt="Amazon Kindle Logo"
                width={150}
                height={50} 
                className={styles.logo}
            />
            <h1>Create account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="First and last name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="At least 6 characters" value={formData.password} onChange={handleChange} required />
                <p className={styles.passwordInfo}>Passwords must be at least 6 characters.</p>

                <label htmlFor="password-again">Password again</label>
                <input type="password" id="confirmpassword" value={formData.confirmpassword} onChange={handleChange} required />

                <button type="submit" className={styles.createAccountButton}>Create your Amazon account</button>
            </form>

            <p className={styles.agreement}>
                By clicking "Create your Amazon account", you agree to the Amazon
                <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use & Sale</a>,
                the <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Kindle Store Terms of Use</a> and
                Amazon's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>.
            </p>

            <p className={styles.signin}>
                Already have an account? <a href="/login">Sign in</a>
            </p>
        </div>
    )
}

export default CreateAccount