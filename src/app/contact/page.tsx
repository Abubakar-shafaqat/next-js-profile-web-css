
import Image from "next/image";
import "../contact/contact.css"; // Import the CSS file

const ContactPage = () => {
  return (
    <>
      <div className="desktop-container">
        <h1 className="heading"><b>𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓜𝓮</b></h1>
   
        <div className="intro-text">
          <p>
            Have a project in mind or want to learn more about my work? Feel free to reach out to me through the following contact details:
          </p>
        </div>

        <div className="contact-info">
          <p className="contact-item">
            <span>
            <b>Email: </b>
            <a href="https://mail.google.com/mail/u/0/#search/bakarabumuhammad78%40gmail.com?compose=new" id="my-link">
              bakarabumuhammad78@gmail.com
            </a></span>
          </p>
          <p className="contact-items">
            <b>Phone: </b> +92 3282513267
          </p>
        </div>

        <div className="links">
          <div className="social-links">
            <a href="https://www.facebook.com/share/Ywx3boEJx8oAi7u2/">
              <Image src="/fack.png" alt="Facebook logo" height={30} width={30} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/baka.r7002/profilecard/?igsh=ZTN0M3RuNnUycG8w">
              <Image src="/insta.jpg" alt="Instagram logo" height={30} width={30} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/abu-bakar-0404022b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Image src="/linkdn.png" alt="LinkedIn logo" height={30} width={30} className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-container">
        <h1 className="heading"><b>Contact Me</b></h1>

        <div className="intro-text">
          <p>
            Have a project in mind or want to learn more about my work? Feel free to reach out to me through the following contact details:
          </p>
        </div>

        <div className="contact-info">
          <p className="contact-item">
            <b>Email: </b>
            <a href="https://mail.google.com/mail/u/0/#search/bakarabumuhammad78%40gmail.com?compose=new" id="my-link">
              bakarabumuhammad78@gmail.com
            </a>
          </p>
          <p className="contact-item">
            <b>Phone: </b> +92 3282513267
          </p>
        </div>

        <div className="links">
          <div className="social-links">
            <a href="https://www.facebook.com/share/Ywx3boEJx8oAi7u2/">
              <Image src="/fb.jpg" alt="Facebook logo" height={30} width={30} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/baka.r7002/profilecard/?igsh=ZTN0M3RuNnUycG8w">
              <Image src="/insta.jpg" alt="Instagram logo" height={30} width={30} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/abu-bakar-0404022b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Image src="/linkdn.png" alt="LinkedIn logo" height={30} width={30} className="social-icon" />
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ContactPage;