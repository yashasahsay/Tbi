import React from "react";

const sections = [
  {
    title: "Chapter Advisors",
    description: "Providing guidance and mentorship to ensure the successful execution of our initiatives, fostering growth, and empowering students to lead impactful projects for E-Cell.",
  },
  {
    title: "Co-Advisor",
    description: "Assisting the team with strategic decisions, ensuring the smooth functioning of extracurricular engagements, and enabling a thriving entrepreneurial ecosystem.",
  },
  {
    title: "Chairperson",
    description: "Leading E-Cell with a clear vision, ensuring structured operations, and providing guidance for innovation, growth, and community building.",
  },
  {
    title: "Vice-Chairperson",
    description: "Supporting the Chairperson and coordinating between different departments to ensure all initiatives align with E-Cell's mission and goals.",
  },
];

const teams = [
  { title: "Secretary", subtitle: "Administration & Coordination", description: "Manages daily operations, communication, and ensures a seamless workflow to drive the success of E-Cell's projects." },
  { title: "Joint-Secretary", subtitle: "Strategic Planning", description: "Plays a pivotal role in planning and executing strategies that help E-Cell evolve, expand, and achieve its objectives." },
  { title: "Web Master", subtitle: "Technology & Web Development", description: "Ensures a robust online presence, manages web development initiatives, and keeps E-Cell technologically ahead in the digital space." },
  { title: "Technical", subtitle: "Innovation & Research", description: "Drives research and innovation, developing tech-driven solutions and projects that enhance E-Cell’s impact." },
  { title: "Media", subtitle: "Public Relations & Content", description: "Handles branding, social media, and content creation to maintain a strong presence for E-Cell across all platforms." },
  { title: "Treasurer", subtitle: "Budgeting & Finance", description: "Manages financial planning, funding, and sponsorships, ensuring the sustainability of E-Cell’s activities." },
  { title: "Production", subtitle: "Design & Creativity", description: "Oversees graphic design, video production, and marketing materials to create a compelling visual identity for E-Cell." },
  { title: "Outreach", subtitle: "Community Engagement", description: "Builds partnerships, fosters collaborations, and expands E-Cell’s reach to impact more aspiring entrepreneurs." },
  { title: "FinOps", subtitle: "Finance Management", description: "Responsible for financial planning and operational management, ensuring efficiency in E-Cell's financial ecosystem." },
];

const TeamPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black min-h-screen text-white">
      {/* Full-Screen Banner Image */}
      <img className="w-full h-[900px] bg-cover p-[40px]  bg-center" src="/E Cell[1].png" />
      
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">E-Cell</h1>
      </div>
      
      <div className="flex flex-col items-center gap-10 p-10">
        {sections.map((section, index) => (
          <div key={index} className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500">
            <h2 className="text-xl font-bold text-purple-400">{section.title}</h2>
            <p className="mt-2 text-gray-300">{section.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {teams.map((team, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-600">
            <h3 className="text-lg font-semibold text-purple-300">{team.title}</h3>
            <h4 className="text-sm text-gray-400">{team.subtitle}</h4>
            <p className="text-gray-300 mt-2">{team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;