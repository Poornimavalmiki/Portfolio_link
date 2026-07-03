import React from "react";

const ExperiencePage = () => {
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
          Work Experience
        </h1>

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div
              className="card border-0 rounded-4 shadow-lg"
              style={{
                background: "#1e293b",
                color: "white",
                transition: "0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.35)";
              }}
            >
              <div className="card-body p-5">

                <div className="d-flex justify-content-between flex-wrap">

                  <div>
                    <h2 className="text-warning fw-bold">
                     Android Developer | Mobile Application Engineer 
                    </h2>

                    <h4 className="text-info mt-3">
                      Trinity Technologies & Software Solutions Pvt. Ltd.
                    </h4>

                    <p className="text-light mb-1">
                      📍 Hubballi, Karnataka
                    </p>
                  </div>

 <div>
                    <span className="badge bg-primary fs-6 px-4 py-3">
                      Feb 2023 – April 2026
                    </span>
                  </div>

 <div>
                    <h2 className="text-warning fw-bold">
                     Android Developer(Internship)
                    </h2>

                    <h4 className="text-info mt-3">
                      Trinity Technologies & Software Solutions Pvt. Ltd.
                    </h4>

                    <p className="text-light mb-1">
                      📍 Hubballi, Karnataka
                    </p>
                  </div>


 <div>
                    <span className="badge bg-primary fs-6 px-4 py-3">
                      August 2022 – Jan 2023 
                    </span>
                  </div>








                 

                </div>

                <hr className="my-4" />

                <h4 className="text-warning">
                  Responsibilities
                </h4>

                <ul className="mt-3 fs-5">

                  <li>
                    Developed a real-time Android application for Bangalore Traffic Police to digitally manage and close traffic e-Challans by integrating REST APIs, SOAP services, GPS, and Bluetooth thermal printing, significantly improving field enforcement efficiency and reducing manual paperwork.
                  </li>

                  <li>
                    Built an intelligent Android-based traffic enforcement solution that integrates radar hardware, AI-powered vehicle detection, OCR, and automatic e-Challan generation to streamline overspeed violation management with real-time backend synchronization.
                  </li>

                  <li>
                   Developed a smart bicycle-sharing Android application enabling user registration, subscription management, NFC-based bicycle access, secure online payments, and real-time station tracking to provide a seamless urban mobility experience.
                  </li>

               
                </ul>

                <hr className="my-4" />

                {/* <h4 className="text-warning">
                  Technologies
                </h4> */}

                {/* <div className="mt-3">

                  <span className="badge bg-secondary me-2 mb-2 p-2">Python</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">Django</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">Django REST Framework</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">React.js</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">JavaScript</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">MySQL</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">REST APIs</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">SOAP</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">Apache2</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">WSGI</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">Linux</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">Git</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">OpenCV</span>

                  <span className="badge bg-secondary me-2 mb-2 p-2">YOLOv8</span>

                </div> */}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperiencePage;