import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
    <footer className="footer text-center">
    <div className="container">
      <div className="row">
        {/* Footer Location*/}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Location</h4>
          <p className="lead mb-0">
            BITUNG CITY, NORTH SULAWESI
            <br />
            Sefanya ering
          </p>
        </div>
        {/* Footer Social Icons*/}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">find me</h4>
          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f" /></a>
          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter" /></a>
          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in" /></a>
          <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble" /></a>
        </div>
      </div>
    </div>
  </footer>
    </div>
    </>
  )
}

export default Footer