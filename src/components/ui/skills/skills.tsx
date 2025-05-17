import { Progress } from "@/components/ui/progress/progress";
import "animate.css";
import Image from "next/image";

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const skills: Skill[] = [
  { name: "Flutter", percentage: 100, icon: "/images/flutter.png" },
  { name: "Python", percentage: 80, icon: "/images/python.png" },
  { name: "Web Dev.", percentage: 70, icon: "/images/react.png" },
  { name: "C++", percentage: 60, icon: "/images/cw.png" },
];

export default function SkillsSection() {
  return (
    <div className="bg-gray-800 rounded-3xl p-6 space-y-6 animate__animated animate__fadeIn animate__delay-0.5s">
      <h2 className=" text-2xl font-medium animate__animated animate__fadeIn animate__delay-1s">
        My Experience
      </h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="space-y-2 animate__animated animate__fadeIn animate__delay-1.5s animate__fadeInUp"
            style={{ animationDelay: `${index * 0.3}s` }} // Staggered animation
          >
            <div className="flex items-center gap-2">
              <div className="transition-transform transform hover:scale-110">
                 <Image 
                
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={24}
                  height={24}
                  className="rounded"
                />
              </div>
              <span className="">{skill.name}</span>
              <span className=" ml-auto">{skill.percentage}%</span>
            </div>
            <Progress
              value={skill.percentage}
              className="transition-all duration-500 ease-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
