function About() {
    return (
      <div className="container-fluid h-custom">
        <div className="row d-flex flex-row justify-content-around align-items-center h-100">
          <div
            className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
            style={{ paddingTop: "20px", marginLeft: "0" }}
          >
            <h2 className="text-center mb-4">About Us</h2>
            <p className="lead">
              Welcome to our platform!
            </p>
            <p>
              <ul>
                <li>Ashish Padavala - US3620</li>
                <li>Chaitanya Annabathana - RN7267</li>
                <li>Sharmila Reddy Pappula - VB9501</li>
                <li>Sathwik Rao Allam- FK1568</li>
              </ul>
            </p>
            <p>
              Thank you for choosing us! If you have any questions, feel free to 
              <a href="/contact" className="fw-bold"> contact us</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  