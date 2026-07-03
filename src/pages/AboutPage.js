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
                  {" "}Poornima Valmiki
                </span>
              </h1>

              <h3 className="text-primary mt-3">
                Android Developer
              </h3>

              <hr className="text-secondary my-4" />

              <p className="fs-5 lh-lg">
<li>
               Results-driven Android and Flutter Developer with 3+ years of experience in designing and 
developing scalable, high-performance mobile applications.  </li>
<li>
Strong expertise in Java, Kotlin, Dart, Flutter, Android SDK,C++, and Jetpack 
components,AndroidFamework,Aosp,Data Structure,Algorithms Experience with Adb and logcat .
</li>






<li>

Proficient in MVVM, Clean Architecture and modular application design, Collaborate with hardware.  </li>
<li>
Hands-on experience with REST API integration using Retrofit and OkHttp.  
</li>
<li>
Experienced in Firebase services including Authentication, Firestore, Realtime Database, and Cloud 
Messaging (FCM),AOSP.  </li>
<li>
Skilled in Bluetooth and BLE communication, including integration with thermal printers and external 
devices.  </li>
<li>
Proficient in MQTT publish and subscribe messaging for real-time communication. 
</li> 

<li>
Strong experience with Camera2 API and CameraX for image capture and processing. 
</li> 
<li>

Expertise in hardware integration with radar Device, POS machines, barcode scanners, and thermal 
printers.  </li>

<li>
Proven track record of delivering production-ready applications for traffic enforcement, automation, 
and enterprise solutions.  </li>
<li>
Experienced in performance optimization, debugging, and deploying apps to the Google Play Store 
and Apple App Store.  
</li>


<li>
Effective team player with experience working in Agile development environments.

</li>

              </p>

             
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPage;