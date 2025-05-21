import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import aswin from '../assets/ashwin.jpg';
import karthik from '../assets/karthik.jpg';
import manvith from '../assets/manvith.jpg';
import manish from '../assets/manish.jpg';
const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const teamMembers = [
    {
      id: 1,
      name: "Karthik Wagle",
      role: "Fullstack Developer",
      bio: "Handles both frontend and backend integration, ensuring the AI-driven try-on system works seamlessly across all components.",
      imgUrl: karthik,
      social: {
        linkedin: "#",
        github: "#",
        email: "student1@example.edu"
      }
    },
    {
      id: 2,
      name: "Manvith",
      role: "Backend Developer",
      bio: "Develops and maintains the server-side logic, including APIs for image processing and user data handling.",
      imgUrl: manvith,
      social: {
        linkedin: "#",
        github: "#",
        email: "student2@example.edu"
      }
    },
    {
      id: 3,
      name: "Manish Rao",
      role: "Frontend Developer",
      bio: "Manages the server infrastructure and API development, handling image processing and data management.",
      imgUrl: manish,
      social: {
        linkedin: "#",
        github: "#",
        email: "student3@example.edu"
      }
    },
    {
      id: 4,
      name: "Ashwin Kumar G Rao",
      role: "Backend Developer",
      bio: "Focuses on training and optimizing the deepfake models for accurate clothing visualization.",
      imgUrl: aswin,
      social: {
        linkedin: "#",
        github: "#",
        email: "student4@example.edu"
      }
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Team" 
        subtitle="Meet the innovative minds behind the AI-Driven Deepfake Virtual Try-On project"
        bgImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-800">Project Team Members</h2>
            <p className="text-lg text-neutral-700">
              We are a group of engineering students passionate about combining AI technology with 
              practical e-commerce solutions to enhance the online shopping experience.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                variants={itemVariants}
                className="card card-hover"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-[3/4]">
                  <img 
                    src={member.imgUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-primary-700">{member.name}</h3>
                <p className="text-secondary-600 font-medium mb-4">{member.role}</p>
                <p className="text-neutral-600 mb-6">{member.bio}</p>
                
                <div className="flex gap-4 text-neutral-500">
                  <a 
                    href={member.social.linkedin} 
                    className="hover:text-primary-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="hover:text-primary-600 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="hover:text-primary-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Project Guidance</h2>
              <p className="mb-6">
                Our major project, AI-Driven Deepfake Virtual Try-On for Real-Time Fashion Visualization, is being developed under the guidance of Ms.Babitha Poojary, who provides valuable insights and direction in artificial intelligence, deepfake technology, computer vision, and software development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team