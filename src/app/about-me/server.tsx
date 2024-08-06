"use client"
import { motion } from "framer-motion";
import { CardItem, CardBody, CardContainer } from "./ui/3d-card";
import EmailContact from "./ui/EmailContact";
import Image from "next/image";
import IconButton from "../ui/IconButton";
import LinkedInIcon from "@icons/LinkedInLogo";
import GitHubIcon from "@icons/GithubIcon";

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServerContent = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={pageVariants}
  >
    <div className="flex flex-col md:flex-row justify-between items-start px-6">
      <div className="w-full md:w-1/2 pt-0">
        <div className="space-y-4 pb-4">
          <p className="leading-relaxed">
            I'm<strong className="text-yellow-500"> Dibyashakti Moharana</strong>, a passionate 19 year old <strong className="text-yellow-500">Software Developer</strong>. Currently, I am working on  projects and expanding my technical skills, especially in new web frameworks and other emerging technologies in my free time. 
          </p>
          <p className="leading-relaxed">
          My passion lies in optimizing the performance and aesthetics of web applications to provide the <strong className="text-yellow-500">best user experience</strong>. I firmly believe in the importance of <strong className="text-yellow-500">intuitive design</strong> y una <strong className="text-yellow-500">smooth interaction</strong> for the success of any web project.
          </p>
        </div>
      </div>

      <div className="relative md:absolute right-0 md:w-1/2 h-full m-auto">
        <CardContainer className="inter-var h-full">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto w-full rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full flex flex-col items-center justify-center">
          <Image
          src="/personal/pp1.jpg"
          height={1000}
          width={1000}
          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="profile-picture"
          priority={true}
          placeholder="empty"
        />
            <CardItem
              as="div"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>🚹 Dibyashakti Moharana</li>
                <li>🎂 28 - 04 - 2005</li>
                <li>💻 Software Developer</li>
              </ul>
            </CardItem>
          </CardItem>
            <div className="flex justify-center items-center w-full mt-10 gap-5">
              <IconButton href="https://www.linkedin.com/in/dibyashakti-moharana-048259252/" className="hover:bg-gray-900 hover:border-gray-900">
                <LinkedInIcon /> LinkedIn
              </IconButton>
              <IconButton href="https://github.com/DibyashaktiMoharana/" className="hover:bg-gray-800 hover:border-gray-800">
                <GitHubIcon /> GitHub
              </IconButton>
            </div>
            <EmailContact email="dibyacollege@gmail.com" />
          </CardBody>
        </CardContainer>
      </div>
    </div>
  </motion.div>
);

export default ServerContent;