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
          <h4 className='text-uppercase mb 4'> Contact me</h4>
          <p className='lead mb-0'>
            email: sefanyaering@gmail.com <br />
            phone: 08123456
          </p>
          </p>
        </div>
        {/* Footer Social Icons*/}
        <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">find me</h4>
  <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/evfanering_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
    <i className="fab fa-instagram"></i>
    <p className="lead mb-0">Instagram</p>
  </a>
        </div>
      </div>
    </div>
  </footer>
    </div>
    </>
  )
}

export default Footer