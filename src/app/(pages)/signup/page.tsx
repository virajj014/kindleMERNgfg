
import Image from 'next/image';
import styles from './Signup.module.css';


const page = () => {
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
            <form>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="First and last name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="At least 6 characters" />
                <p className={styles.passwordInfo}>Passwords must be at least 6 characters.</p>

                <label htmlFor="password-again">Password again</label>
                <input type="password" id="password-again" />

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

export default page