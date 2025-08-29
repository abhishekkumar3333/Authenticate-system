import About from "./About";
import Services from "./Service";

const Home = () => {
  return (
    <>
     <section className="home-section">
      <div className="home-content">
        <h1>Welcome to Abhishek Kumar's Website</h1>
        <p>
          This is a simple home page built with React.  
          Navigate using the menu to explore About, Services, Contact, Register and Login.
        </p>
        <button className="home-btn">Get Started</button>
      </div>
      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Home Banner"
        />
      </div>
    </section>
    <About/>
    <Services/>
    </>
   
  );
};

export default Home;
