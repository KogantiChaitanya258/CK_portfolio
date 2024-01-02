
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Chaitanya",
  logo_name: "Chaitanya Koganti",
  nickname: "Chaitanya",
  full_name: "Chaitanya Koganti",
  subTitle:
    "Software Developer, Machine Learning Enthusiast.",
  resumeLink:
    "https://drive.google.com/file/d/1-Ymay-80mVLq1LvsBXkHHuqL4lEj4zI8/view?usp=sharing",
  mail: "mailto:kogantichaitanya258@gmail.com",
  profile_image:"./mypic1.jpeg",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/KogantiChaitanya258",
  linkedin: "https://www.linkedin.com/in/koganti-chaitanya/",
  gmail: "kogantichaitanya258@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "✔️HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "✔️CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "✔️JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        
        {
          skillName: "✔️Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "✔️Python",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "✔️Django",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        
        {
          skillName: "✔️Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00A7D0",
          },
        },
        
        
        {
          skillName: "✔️C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "✔️C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "✔️ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "✔️NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        
        
        {
          skillName: "✔️MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "✔️Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by deeplearning.ai and Stanford Online",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "✔️Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "✔️Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "✔️PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "✔️Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "✔️Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
        {
          skillName: "✔️Scikit-Learn",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
        {
          skillName: "✔️Numpy",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Central Florida",
      subtitle: "Masters in Computer Science 4/4 GPA",
      logo_path: "ucflogo.png",
      alt_name: "ucf",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management",
        "⚡ Learn Advanced Topics in Machine Learning, Software and Development",
        "⚡ Worked on projects related to Web Technologies Development and Deep Learning.",
      ],
      website_link: "https://www.ucf.edu/",
    },
    {
      title: "Velagapudi Ramakrishna Engineering College",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "vrseclogo.jpg",
      alt_name: "vrsec",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Algorithms, Network Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects like Brain Tumor Classification using Deep Learning and Smart Intelligent Online Blood Donor System. ",
        "⚡ Published the projects in IEEE conferences."
      ],
      website_link: "https://www.vrsiddhartha.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I've completed two internships. I am actively looking for internships and Full-Time Roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Analyst",
          company: "Capgemini Technology Services",
          company_url: "https://www.capgemini.com/in-en/",
          logo_path: "cglogo.png",
          duration: "July 2022 - July 2023",
          location: "",
          description:
            "I contributed significantly to the success of projects with Capgemini, where I designed and developed dynamic, responsive user interfaces using React.js and Node.js. I use my proficiency with a variety of front-end technologies, such as HTML, CSS, and JavaScript, to create fluid and visually compelling online applications.My role involves collaborating with UX/UI designers to implement visually appealing and intuitive designs. Also Contribute to Agile development methodologies. I enhanced customer experience and application performance to achieve seamless integration between front-end and backend components."
            ,
          color: "#f10000",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Senior Analyst Intern",
          company: "Capgemini Technology Services",
          company_url: "https://www.capgemini.com/in-en/",
          logo_path: "cglogo.png",
          duration: "March 2022 - June 2022",
          location: "",
          description:
            "I led a dynamic team in the creation of an innovative Online Hospital Appointment Application using Java and the PEGA platform. This innovative application streamlines the patient experience, enabling seamless online registration and appointment booking.My responsibilities included overseeing the development process, with a focus on implementing a user-friendly interface using HTML, CSS, JavaScript, and Pega Rules, data pages for database connection. Additionally, I ensured smooth communication by designing a system that allows receptionists to review and approve patient appointments, while also providing doctors with easy access to patient information for efficient and personalized care.",
          color: "#ee3c26",
        },
        
        {
          title: "Web Developer",
          company: "Exposys Data Labs",
          company_url: "https://www.exposysdata.com/",
          logo_path: "exposyslogo.jpg",
          duration: "July 2021 - September 2021",
          location: "",
          description: "As an Intern I Implemented an interactive eLearning Web Application using Django Framework with Python. Involves tasks like Project creation, Adding new content to courses, Adding video Lectures, and Creating quizzes for courses.  ",
          color: "#56A4D3",
        },
        
      ],
    },
    {
      title: "Hackathons",
      experiences: [
        {
          title: "Code Hackathon",
          company: "Malla Reddy University",
          company_url: "https://sugarlabs.org/",
          logo_path: "mallareddylogo.jpg",
          duration: "April 2021",
          location: " ",
          description:
            "Secured 1st prize in Code Hackathon organized by Malla Reddy University College at SPARKS INTELLIGENTIA 2021",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "emaillogo.jpg",
    description:
      "These are my LinkedIn, Github profiles and you can contact me through my Mail below.",
  },
  
};

const projects = {
  data: [
    {
      name: "Brain Tumor Classification Using Deep Learning",
      url: "https://github.com/KogantiChaitanya258/Brain-Tumor-Classification-Using-Deep-Residual-Learning",
      description: "The project focused on developing an efficient automatic brain tumor classification system using Python and Machine Learning. The goal was to achieve high accuracy and performance in classifying brain tumors from MRI images, utilizing residual networks.",
      languages: [
        {
          name: "⚡Python",
          iconifyClass: "",
        },
        {
          name: "⚡Machine Learning",
          iconifyClass: "",
        },
        {
          name: "⚡NumPy",
          iconifyClass: "",
        },
        {
          name: "⚡Pandas",
          iconifyClass: "",
        },
        {
          name: "⚡Matplotlib",
          iconifyClass: "",
        },
        {
          name: "⚡SciKit-Learn",
          iconifyClass: "",
        },
        
      ],
    },
    {
      name: "Smart Intelligent Online Blood Donation System",
      url: "https://github.com/KogantiChaitanya258/Smart-Web-Based-Online-Blood-Donation-System",
      description:
        "Built a web application using Django Rest Framework and Python. The primary focus of the initiative was to create a comprehensive platform providing crucial information on blood donors and blood banks. I contributed to the development of a system that provides information to those in need with life-saving blood donors",
      languages: [
        {
          name: "⚡Python",
          
        },
        {
          name: "⚡Django",
        },
        {
          name: "⚡Machine Learning",
        },
        {
          name: "⚡HTML",
        },
        {
          name: "⚡CSS",
        },
        {
          name: "⚡JavaScript",
        },
        {
          name: "⚡SQLite",
        },
      ],
    },
    {
      name: "Online Hospital Appointment System",
       
      description: "Developed an online hospital appointment application. The main objective of this project is to design an application that allows patients to register themselves to book appointments online to connect with doctors.",
      languages: [
        {
          name: "⚡JAVA",
          
        },
        {
          name: "⚡PEGA",
          
        },
        {
          name: "⚡HTML",
          
        },
        {
          name: "⚡CSS",
          
        },
        {
          name: "⚡JavaScript",
          
        },
        {
          name: "⚡Postman",
          
        },
        
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
