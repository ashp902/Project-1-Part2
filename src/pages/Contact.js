function Contact() {
    return (
      <div className="container-fluid h-custom">
        <div className="row d-flex flex-row justify-content-around align-items-center h-100">
          <div
            className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
            style={{ paddingTop: "20px", marginLeft: "0" }}
          >
            <form>
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                />
              </div>
  
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>
  
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="subject"
                  className="form-control form-control-lg"
                  placeholder="Enter the subject"
                />
              </div>
  
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <div className="form-outline mb-4">
                <textarea
                  id="message"
                  className="form-control form-control-lg"
                  rows="4"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
  
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-secondary btn-lg btn-block">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default Contact;