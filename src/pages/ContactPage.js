import React from "react";
// import AddCallIcon from '@mui/icons-material/AddCall';

const ContactPage = () => {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        <h1 className="text-center text-info fw-bold mb-5">
          Contact Me
        </h1>

        <div className="row g-4">

          {/* Mobile */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card text-center border-0 shadow-lg h-100"
              style={{
                background: "#1e293b",
                color: "white",
                transition: "0.3s",
              }}
            >
              <div className="card-body p-4">
                <h1>📱</h1>
                <h4 className="text-warning">Mobile</h4>
                <p className="mb-0 text-info">
                  +91 8088653857
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card text-center border-0 shadow-lg h-100"
              style={{
                background: "#1e293b",
                color: "white",
                transition: "0.3s",
              }}
            >
              <div className="card-body p-4">
                <h1>📧</h1>
                <h4 className="text-warning">Email</h4>
               <a
  href="mailto:poornimavalmiki1999@gmail.com"
  className="text-info text-decoration-none"
>
  poornimavalmiki1999@gmail.com
</a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card text-center border-0 shadow-lg h-100"
              style={{
                background: "#1e293b",
                color: "white",
                transition: "0.3s",
              }}
            >
              <div className="card-body p-4">
                <h1>💼</h1>
                <h4 className="text-warning">LinkedIn</h4>

                <a
                    href="https://www.linkedin.com/in/poornima-valmiki-1782ab258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info text-decoration-none"
                    >
                    linkedin.com/in/poornima-valmiki-1782ab258
                </a>

              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card text-center border-0 shadow-lg h-100"
              style={{
                background: "#1e293b",
                color: "white",
                transition: "0.3s",
              }}
            >
              <div className="card-body p-4">
                <h1>💻</h1>
                <h4 className="text-warning">GitHub</h4>

                <a
  href="https://github.com/Poornimavalmiki"
  target="_blank"
  rel="noopener noreferrer"
  className="text-info text-decoration-none"
>
 https://github.com/Poornimavalmiki
</a>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPage;