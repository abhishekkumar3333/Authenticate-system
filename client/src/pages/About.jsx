const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Hi, I'm <strong>Abhishek Kumar</strong>, a passionate Full Stack
          Developer.  
          I love building modern, user-friendly web applications using React,
          Node.js, and MongoDB.
        </p>
        <p>
          This website is a simple project with a Home, About, Contact, Services,
          Register, and Login page to demonstrate React with proper structure and
          styling.
        </p>
        <p>
          My goal is to create innovative solutions, learn continuously, and
          share knowledge with others in the developer community.
        </p>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="About"
        />
      </div>
    </section>
  );
};

export default About;
