import React from "react";

function AboutPage() {
  return (
    <section
      id="about"
      className="container-fluid py-5"
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div
              className="card border-0 shadow-lg rounded-5 p-5"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                color: "white",
              }}
            >

              <h5 className="text-info fw-bold">
                ABOUT ME
              </h5>

              <h1 className="display-4 fw-bold mt-3">
                Hi, I'm
                <span className="text-warning">
                  {" "}Ajit Kakhandaki
                </span>
              </h1>

              <h3 className="text-primary mt-3">
                Python Full Stack Developer
              </h3>

              <hr className="text-secondary my-4" />

              <p className="fs-5 lh-lg">

                Passionate Software Developer with
                <strong> 2.9 years </strong>
                of professional experience in designing,
                developing and deploying scalable web
                applications using

                <strong>
                  Python, Django, Django REST Framework,
                  React.js and MySQL
                </strong>.

              </p>

              <p className="fs-5 lh-lg">

                Experienced in developing
                <strong>
                  AI-powered applications
                </strong>
                including

                <span className="text-warning">
                  Computer Vision,
                  Automatic Number Plate Recognition (ANPR),
                  OCR,
                  Face Recognition,
                  Traffic Analytics,
                  Object Detection
                </span>.

              </p>

              <p className="fs-5 lh-lg">

                Skilled in developing REST APIs,
                integrating AI models,
                optimizing backend performance,
                deploying Django applications using

                <strong>
                  Apache2, WSGI, Ubuntu Linux,
                  Python Virtual Environment
                </strong>

                and building responsive React.js dashboards.

              </p>

              <p className="fs-5 lh-lg">

                I enjoy solving real-world problems
                through Artificial Intelligence,
                Computer Vision and Full Stack Development
                while continuously learning modern technologies
                and following software engineering best practices.

              </p>

              {/* <div className="mt-4">

                <button className="btn btn-warning btn-lg me-3">
                  Download Resume
                </button>

                <button className="btn btn-outline-light btn-lg">
                  Contact Me
                </button>

              </div> */}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPage;