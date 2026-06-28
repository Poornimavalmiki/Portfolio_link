import React from "react";

const education = [
  {
    degree: "Bachelor of Engineering (B.E)",
    college: "AGMR College of Engineering and Technology",
    location: "Varur, Hubballi",
    university: "Visvesvaraya Technological University (VTU), Belagavi",
    year: "2018 - 2022",
  },
  {
    degree: "Pre-University Course (PUC)",
    college: "SB Arts & KCP Science PU College",
    location: "Vijayapura",
    university: "Karnataka Pre-University Board",
    year: "2016 - 2018",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    college: "Government High School",
    location: "Ittangihal, Vijayapura",
    university: "Karnataka Secondary Education Board",
    year: "2006 - 2016",
  },
];

const EducationPage = () => {
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
          Education
        </h1>

        <div className="row justify-content-center">

          {education.map((item, index) => (
            <div
              key={index}
              className="col-lg-10 mb-4"
            >
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
                    "0 15px 35px rgba(0,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.35)";
                }}
              >
                <div className="card-body">

                  <div className="d-flex justify-content-between align-items-center flex-wrap">

                    <div>
                      <h3 className="text-warning fw-bold">
                        {item.degree}
                      </h3>

                      <h5 className="mt-3">
                        {item.college}
                      </h5>

                      <p className="mb-1 text-light">
                        📍 {item.location}
                      </p>

                      <p className="text-info">
                        {item.university}
                      </p>
                    </div>

                    <div>
                      <span className="badge bg-primary fs-6 px-4 py-3">
                        {item.year}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default EducationPage;

// import React from 'react'

// const EducationPage = () => {
//   return (
//     <div>
//       <h1>Education page</h1>
//     </div>
//   )
// }

// export default EducationPage
