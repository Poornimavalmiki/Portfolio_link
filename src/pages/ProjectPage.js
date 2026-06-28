import React from "react";

const technologies = [
  "YOLOv8",
  "OpenCV",
  "PaddleOCR",
  "Custom OCR",
  "Django",
  "React.js",
  "MySQL",
  "REST APIs",
  "RTSP Streaming",
  "Multiprocessing",
  "Ubuntu Linux",
];

const edgeTechnologies = [
  "YOLO",
  "ONNX",
  "RKNN Toolkit",
  "OpenCV",
  "MQTT",
  "Edge AI",
  "Radxa 5C",
  "Linux",
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
                  E-Challan Web Application AI-Based Traffic Violation Detection System
                </h2>

                {/* <h4 className="text-info mb-4">
                  AI-Based Traffic Violation Detection System
                </h4> */}

                <hr />

                <ul className="fs-5 lh-lg">

                  <li>
                    Developed a real-time AI-powered traffic monitoring
                    system for vehicle detection, traffic violation
                    analysis, and Automatic Number Plate Recognition
                    (ANPR) from CCTV streams.
                  </li>

                  <li>
                    Successfully deployed the solution across multiple
                    districts, enabling efficient traffic violation
                    monitoring for law enforcement agencies.
                  </li>

                  <li>
                    Automated detection of traffic violations including
                    rider not wearing a helmet, pillion rider without a
                    helmet, and mobile phone usage while driving with
                    evidence capture.
                  </li>

                  <li>
                    Implemented an end-to-end e-challan processing
                    system supporting violation verification,
                    manual challan generation, automatic offence
                    code mapping, SMS notifications,
                    payment tracking, and challan closure.
                  </li>

                  <li>
                    Developed an automated e-challan workflow
                    with SMS notifications sent to vehicle owners
                    containing violation details, location,
                    date, and vehicle information.
                  </li>

                  <li>
                    Developed real-time dashboards for
                    violation monitoring, reporting,
                    and analytics visualization.
                  </li>

                  <li>
                    Integrated Google Maps using
                    <strong> "View on Map" </strong>
                    to display the exact violation location.
                  </li>

                  <li>
                    Enabled centralized storage and
                    management of vehicle,
                    violation, and challan data
                    for reporting and analysis.
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
                  ANPR & Object Detection on Radxa 5C Edge Device 

                </h2>

                {/* <h4 className="text-info mb-4">
                  AI-Based Traffic Violation Detection System
                </h4> */}

                <hr />

                <ul className="fs-5 lh-lg">

                  <li>
                   Developed an edge-based Automatic Number Plate Recognition (ANPR) and vehicle detection system on 
the Radxa 5C platform for real-time traffic monitoring. 
                  </li>

                  <li>
                   Converted YOLO object detection models from ONNX to RKNN format and optimized them for Rockchip 
NPU acceleration, enabling efficient edge inference. 
                  </li>

                  <li>
                   Processed real-time camera streams using OpenCV and RKNN inference to detect vehicles and recognize 
number plates without cloud dependency. 
                  </li>

                  <li>
                  Achieved low-latency, real-time inference performance by leveraging the Radxa 5C NPU, making the 
solution suitable for traffic surveillance and edge AI deployments. 
                  </li>

                  <li>
                   Published vehicle detections, license plate information, and event logs through MQTT for remote 
monitoring and seamless system integration. 
                  </li>

                  <li>
                   Enabled efficient edge processing and data transmission, reducing network bandwidth usage and improving 
response times. 
                  </li>

                  <li>
                   Validated and deployed optimized RKNN models on Linux-based edge devices for reliable field operation. 
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
                  AI-Based Face Recognition System using InsightFace 


                </h2>

                {/* <h4 className="text-info mb-4">
                  AI-Based Traffic Violation Detection System
                </h4> */}

                <hr />

                <ul className="fs-5 lh-lg">

                  <li>
                   Designed and developed a full-stack AI-powered face recognition system using Django (Python) and 
React.js for real-time user identification and authentication.  
                  </li>

                  <li>
                  Implemented face recognition using InsightFace to generate facial embeddings and perform similarity 
matching for accurate user identification. 
                  </li>

                  <li>
                   Developed user registration and enrollment workflows to capture, process, and securely store facial data 
for future recognition. 
                  </li>

                  <li>
                  Built RESTful APIs for image uploads, embedding generation, face matching, and recognition requests.  
                  </li>

                  <li>
                   Optimized recognition accuracy and response time using cosine similarity-based matching techniques.
                  </li>

                  <li>
                   Designed and managed MySQL databases to store user profiles, facial embeddings, and recognition logs.
                  </li>

                  <li>
                   Implemented input validation and error handling to ensure reliable performance across varying image 
qualities and lighting conditions. 
                  </li>


                  <li>
                  Deployed and tested the application in a Linux (Ubuntu) environment. 
                  </li>

                

                </ul>

                <hr className="my-4" />

                            

              </div>

{/*  */}



 <div className="card-body p-5">

                <h2 className="text-warning fw-bold">
                  Intelligent Traffic Violation Detection and e-Challan Management System (Server socket)


                </h2>

                {/* <h4 className="text-info mb-4">
                  AI-Based Traffic Violation Detection System
                </h4> */}

                <hr />



                

                <ul className="fs-5 lh-lg">

                  <li>
                  Developed an AI-powered Intelligent Traffic Violation Detection and e-Challan Management System using a PyTorch-based object detection model to automate traffic monitoring and violation detection. 
                  </li>

                  <li>
                  Implemented real-time vehicle detection from CCTV camera feeds and accurately identified multiple vehicles within a single video frame.
                  </li>

                  <li>
                 Classified detected vehicles into different categories such as Two Wheeler, Three Wheeler, Four Wheeler, Bus, Truck, and other vehicle types. 
                  </li>

                  <li>
                  Integrated Automatic Number Plate Recognition (ANPR) using OCR techniques to detect and extract vehicle registration numbers from captured images.                  </li>

                  <li>
                  Implemented AI-based traffic violation detection to identify offences such as Helmet Violation, Seat Belt Violation, Mobile Phone Usage While Driving, Triple Riding, Wrong Parking, and other predefined traffic violations.                  </li>

                  <li>
Established real-time communication between the AI detection module and the backend using Python Socket Programming to transmit violation data securely.                  </li>

                  <li>
Developed the backend using Django REST Framework to receive, validate, and process incoming violation data from the AI detection system.                  </li>


                  <li>
                  Stored all processed violation records in a MySQL database, maintaining complete information required for traffic enforcement and auditing. 
                  </li>
<li>
    Built a React.js-based e-Challan Management Dashboard for monitoring violations, managing records, reviewing evidence, and generating digital e-Challans.
</li>
                <li>
                    Designed the complete system architecture to automate the workflow from AI-based detection to backend processing, database storage, and e-Challan generation, minimizing manual intervention and improving traffic enforcement efficiency.
                </li>

                </ul>

                <hr className="my-4" />

              
                

              </div>













{/*  */}


              

            </div>

          </div>

        </div>

      </div>


      
    </section>

    
  );
};

export default ProjectPage;