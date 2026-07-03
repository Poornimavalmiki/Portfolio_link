import React from "react";

const technologies = [
 "Java", "Kotlin", "Android SDK", "XML", "REST APIs", "SOAP Web Services", ".NET Backend Services", 
"Retrofit", "OkHttp", "JSON Parsing", "Bluetooth Thermal Printer SDK", "C++", "GPS Location Services", "SQLite/Room Database", "MVVM Architecture", "Firebase Cloud Messaging (FCM)", "Git", "Android Studio"
];
const savariTechnologies=[
  "Java",
  "Kotlin",
  "Android SDK",
  "XML",
  "REST APIs",
  "C++",
  "SOAP Web Services",
  "Retrofit",
  "OkHttp",
  "JSON Parsing",
  "SQLite/Room Database",
  "SharedPreferences",
  "GPS Location Services",
  "Google Maps SDK",
  "NFC/Smart Card Integration",
  "Bluetooth Communication",
  "MVVM Architecture",
  "Firebase Cloud Messaging (FCM)",
  "Material Design Components",
  "Git",
  "Android Studio",
  ".NET Backend Services",
  "Google Play Store Deployment"
]

const edgeTechnologies = [
  "Java",
  "Kotlin",
  "Android SDK",
  "C++",
  "Camera2 API",
  "NanoDet Object Detection",
  "OCR (ML Kit/Tesseract)",
  "Bluetooth/BLE",
  "Bluetooth Thermal Printer SDK",
  "REST APIs",
  "SOAP Web Services",
  ".NET Backend",
  "Retrofit",
  "MVVM Architecture",
  "Firebase",
  "Room Database",
  "GPS Location Services",
  "EventBus",
  "MQTT",
  "Git",
  "Android Studio"
];

const ProjectPage = () => {
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
          Projects
        </h1>

        <div className="row justify-content-center">

          <div className="col-lg-11">

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

                <h2 className="text-warning fw-bold">
                  Bangalore Traffic e-Challan Closure System 

                </h2>

                {/* <h4 className="text-info mb-4">
                  AI-Based Traffic Violation Detection System
                </h4> */}

                <hr />

                <ul className="fs-5 lh-lg">

                  
                    Developed an Android application for Bangalore Traffic Police to digitally manage and close traffic violation e
Challans in real time. The application enables officers to search vehicle numbers, view owner and violation details 
from REST APIs, SOAP web services, and .NET backend services, and close pending challans directly within the app. 
Upon successful closure, the system automatically generates and prints challan receipts with vehicle information, 
violation details, and GPS location using a Bluetooth thermal printer SDK, significantly reducing manual paperwork 
and improving operational efficiency. 
                  

            <p className="text-warning fw-bold">
                  Roles & Responsibilities
 </p>
              
<li>Developed an Android application for Bangalore Traffic Police to search, manage, and close traffic 
violation e-Challans. 
</li> 
<li>Implemented vehicle number search functionality with autocomplete and list display of matching 
vehicle registration numbers.  </li>
<li>
Integrated REST APIs, SOAP web services, and .NET backend services to fetch vehicle owner 
details, violation history, and challan information. </li> 
<li>
 Designed a detailed vehicle information screen to display owner details, pending notices, 
violation sections, fine amount, and status.  </li>
<li>
Implemented a Close Notice button to digitally close selected challans from the mobile 
application.</li>  
<li>
 
 Developed logic to update challan status and synchronize closure information with the backend 
server in real time.   </li>
<li>

Integrated Bluetooth thermal printer SDK to print receipts instantly at the enforcement location.  
</li>
<li>
Implemented Bluetooth device pairing, connection management, and ESC/POS printing 
commands. </li>
<li> 
Collaborated with backend developers, testers, and traffic department stakeholders to deliver 
the solution successfully.  
</li>
                </ul>

                <hr className="my-4" />

                <h3 className="text-warning mb-3">
                  Technologies Used
                </h3>

                <div>

                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge bg-primary me-2 mb-2 p-3 fs-6"
                    >
                      {tech}
                    </span>
                  ))}

                </div>




                

              </div>
{/*  */}


 <div className="card-body p-5">

                <h2 className="text-warning fw-bold">
                 Radar Speed Detection System  

                </h2>

                {/* <h4 className="text-info mb-4">
                  AI-Based Traffic Violation Detection System
                </h4> */}

                <hr />

                <ul className="fs-5 lh-lg">

                  Developed an Android-based traffic enforcement application integrated with radar hardware to detect 
overspeed vehicles in real time. Automatically captured vehicle images, applied NanoDet object 
detection and OCR to extract vehicle numbers, retrieved owner details from the server, and generated e
Challans with instant Bluetooth receipt printing. 

<p className="text-warning">
Roles & Responsibilities: 
</p>

<li>Developed an Android application to integrate with radar hardware for real-time vehicle speed 
detection.  </li>

<li>Implemented automatic image capture when vehicle speed exceeded the configured limit. </li> 
<li>Integrated NanoDet object detection to identify vehicle type and detect number plate regions.</li>  
<li>Applied OCR to extract vehicle registration numbers from captured images.  </li>
<li>Sent recognized vehicle numbers to the backend server to fetch owner and vehicle details. </li> 
<li>Implemented automatic e-Challan generation based on overspeed violations.  </li>
<li>Integrated Bluetooth thermal printer SDK for instant challan receipt printing.  </li>
<li>Used REST APIs, SOAP web services, and .NET backend services for real-time data 
synchronization.  </li>

<li>Optimized the application to reduce manual intervention and improve traffic enforcement 
efficiency.  
</li>
                </ul>

                <hr className="my-4" />

                <h3 className="text-warning mb-3">
                  Technologies Used
                </h3>

                <div>

                  {edgeTechnologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge bg-primary me-2 mb-2 p-3 fs-6"
                    >
                      {tech}
                    </span>
                  ))}

                </div>




                

              </div>

{/*  */}




 <div className="card-body p-5">

                <h2 className="text-warning fw-bold">
                 Savari Bicycle

                </h2>

                {/* <h4 className="text-info mb-4">
                  AI-Based Traffic Violation Detection System
                </h4> */}

                <hr />

                <ul className="fs-5 lh-lg">



Developed an Android application for the Savari public bicycle sharing system, enabling users to register, 
purchase recharge plans, and rent bicycles from docking stations across the city. Users could unlock and 
return bicycles using a smart card at any station. Integrated PayG payment gateway for secure online 
recharge and subscription payments. Connected backend services to manage station availability, ride 
history, billing, and subscription details in real time. Successfully deployed and maintained the 
application on the Google Play Store. 
<p className="text-warning">
Roles & Responsibilities: 
</p>

<li>Developed an Android application for user registration, monthly recharge plans, and bicycle 
rental management.  </li>

<li>Integrated REST APIs, SOAP web services, and PayG payment gateway for recharge and 
subscription payments.  </li>
<li>Implemented smart card/NFC-based bicycle unlocking and secure return at docking stations.</li>  
<li>Added GPS and Google Maps integration to display nearby cycle stations and bicycle 
availability.  </li>

<li> Managed app signing, release builds, and deployment of production updates to the Google Play 
Store.</li>
                </ul>

                <hr className="my-4" />


                 <h3 className="text-warning mb-3">
                  Technologies Used
                </h3>

                <div>

                  {savariTechnologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge bg-primary me-2 mb-2 p-3 fs-6"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                            

              </div>

{/*  */}













{/*  */}


              

            </div>

          </div>

        </div>

      </div>


      
    </section>

    
  );
};

export default ProjectPage;