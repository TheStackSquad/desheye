//src/app/experience/page.js

import ExperienceUI from "@/components/experience/experienceUI";

export const metadata = {
  title: "Experience | Desheye — Senior Full Stack Engineer",
  description:
    "Career history of Adesheye — Senior Full Stack Engineer specialising in MERN, NoSQL, Go, and scalable architecture.",
};

export default function ExperiencePage() {
  return (
    <div className="bg-[#EEEAF4] min-h-screen">
      <ExperienceUI />
    </div>
  );
}
