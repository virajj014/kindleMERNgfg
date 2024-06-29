"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';
const apiurl = process.env.NEXT_PUBLIC_API_URL

const SignIn = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = formData;
      try {
        const response = await fetch(apiurl + '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        alert('Login successful');
        // Store token or handle login success (e.g., redirect)
        console.log('Token:', data.token);
      router.push('/kindle-library')
      } 

      else {
        const data = await response.json();
        alert(data.message);
      }

    }
    catch (error) {
      console.error('Error:', error);
      alert('Error logging in');
    }

  }


  return (
    <div className={styles.signInContainer}>
      <Image
        src="https://m.media-amazon.com/images/G/31/kfw/landing/img_logo_DKBL._CB612496475_.png"
        alt="Amazon Kindle Logo"
        width={150}
        height={50}
        className={styles.logo}
      />
       <h1>Sign in</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email or mobile phone number</label>
        <input type="text" id="email" value={formData.email} onChange={handleChange} required />

        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <label htmlFor="password">Password </label>
          <a href="#" className={styles.fp}>Forgot Password</a>
        </div>

        <input type="password" id="password" value={formData.password} onChange={handleChange} required />


        <button type="submit" className={styles.signInButton}
        >Sign in</button>

      </form>
      <p className={styles.agreement}>
        By continuing, you agree to Amazon's
        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use</a> and
        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"> Privacy Notice</a>.
      </p>

      <p className={styles.createAccount}>
        New to Amazon? <a href="/signup">Create your Amazon account</a>
      </p>
    </div>
  )
}

export default SignIn