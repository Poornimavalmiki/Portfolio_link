import React from "react";

const skills = [
  {
    title: "Programming Languages",
    icon: "💻",
    items: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "AI / ML & Computer Vision",
    icon: "🤖",
    items: [
      "YOLO (Ultralytics)",
      "OpenCV",
      "Custom OCR",
      "PaddleOCR",
      "Object Detection",
      "Tracking",
      "OCR",
    ],
  },
  {
    title: "Web Technologies",
    icon: "🌐",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Edge Devices",
    icon: "⚡",
    items: [
      "Rockchip RK3588",
      "Radxa 5C",
      "NVIDIA Jetson",
    ],
  },
  {
    title: "Database & Tools",
    icon: "🛠️",
    items: [
      "MySQL",
      "MySQL Workbench",
      "VS Code",
      "Git",
      "GitHub",
      "Linux (Ubuntu)",
      "Apache2",
    ],
  },
  {
    title: "Soft Skills",
    icon: "🚀",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Project Ownership",
      "Adaptability",
    ],
  },
];

const SkillsPage = () => {
  return (
    <section
      className="container-fluid py-5"
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        <h1 className="text-center fw-bold text-info mb-5">
          Technical Skills
        </h1>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={index}
            >
              <div
                className="card h-100 border-0 rounded-4 shadow-lg"
                style={{
                  background: "#1e293b",
                  color: "white",
                  transition: "0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.35)";
                }}
              >
                <div className="card-body">

                  <h4 className="fw-bold text-warning mb-4">
                    {skill.icon} {skill.title}
                  </h4>

                  <ul className="list-group list-group-flush">

                    {skill.items.map((item, i) => (
                      <li
                        key={i}
                        className="list-group-item border-0"
                        style={{
                          background: "transparent",
                          color: "#e2e8f0",
                        }}
                      >
                        ✔ {item}
                      </li>
                    ))}

                  </ul>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SkillsPage;

// import React from "react";

// const skills = [
//   {
//     title: "Programming Languages",
//     icon: "💻",
//     items: ["Python",
//         "Javascript",
//         "HTML5",
//         "CSS5"],
//   },
//   {
//     title: "AI / ML & Computer Vision",
//     icon: "🤖",
//     items: [
//       "YOLO (Ultralytics)",
//       "OpenCV",
//       "Custom OCR",
//       "PaddleOCR",
//       "Object Detection",
//       "Tracking",
//       "OCR",
//     ],
//   },
//   {
//     title: "Web Technologies",
//     icon: "🌐",
//     items: [
//       "HTML5",
//       "CSS3",
//       "JavaScript",
//       "React.js",
//       "Node.js",
//       "REST APIs",
//     ],
//   },
//   {
//     title: "Edge Devices",
//     icon: "⚡",
//     items: [
//       "Rockchip RK3588",
//       "Radxa 5C",
//       "NVIDIA Jetson",
//     ],
//   },
//   {
//     title: "Database & Tools",
//     icon: "🛠️",
//     items: [
//       "MySQL",
//       "MySQL Workbench",
//       "VS Code",
//       "Git",
//       "GitHub",
//       "Linux (Ubuntu)",
//       "Apache2",
//     ],
//   },
//   {
//     title: "Soft Skills",
//     icon: "🚀",
//     items: [
//       "Problem Solving",
//       "Team Collaboration",
//       "Project Ownership",
//       "Adaptability",
//     ],
//   },
// ];

// const SkillsPage = () => {
//   return (
//     <section className="container py-5">

//       <h1 className="text-center text-primary fw-bold mb-5">
//         Technical Skills
//       </h1>

//       <div className="row g-4">

//         {skills.map((skill, index) => (
//           <div
//             className="col-12 col-md-6 col-lg-4"
//             key={index}
//           >
//             <div
//               className="card h-100 shadow border-0 rounded-4"
//               style={{
//                 transition: "0.4s",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-10px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 12px 30px rgba(0,0,0,0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 0 0 rgba(0,0,0,0)";
//               }}
//             >
//               <div className="card-body">

//                 <h4 className="text-primary fw-bold mb-3">
//                   {skill.icon} {skill.title}
//                 </h4>

//                 <ul className="list-group list-group-flush">
//                   {skill.items.map((item, i) => (
//                     <li
//                       key={i}
//                       className="list-group-item border-0 ps-0"
//                     >
//                       ✔ {item}
//                     </li>
//                   ))}
//                 </ul>

//               </div>
//             </div>
//           </div>
//         ))}

//       </div>

//     </section>
//   );
// };

// export default SkillsPage;