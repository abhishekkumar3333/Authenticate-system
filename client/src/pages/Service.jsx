const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Build modern and responsive websites using React, Node.js, and MongoDB.",
      img: "https://img.icons8.com/color/96/000000/code.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Design attractive, user-friendly interfaces with a focus on great user experience.",
      img: "https://img.icons8.com/color/96/000000/design.png",
    },
    {
      title: "Mobile App Development",
      description:
        "Create powerful mobile applications with React Native for Android and iOS.",
      img: "https://img.icons8.com/color/96/000000/smartphone-tablet.png",
    },
    {
      title: "API Development",
      description:
        "Develop and integrate RESTful APIs for smooth communication between frontend and backend.",
      img: "https://img.icons8.com/color/96/000000/api.png",
    },
  ];

  return (
    <section className="services-section">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
