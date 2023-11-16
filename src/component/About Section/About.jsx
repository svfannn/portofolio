import React from 'react'

const About = () => {
  return (
    <>
    <div>
        {/* About Section*/}
  <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
      {/* About Section Heading*/}
      <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
      {/* Icon Divider*/}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* About Section Content*/}
      <div className="row">
        <div className="col-lg-4 ms-auto"><p className="lead">Im a student at Klabat semester this is my fifth semester i have a lot of dream that i dream of and i will work really hard for my dream. </p></div>
      </div>
      {/* About Section Button*/}
    </div>
  </section>
    </div>
    </>
  )
}

export default About