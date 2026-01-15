import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Home() {
  const roboticsProjects = projects.filter(p => p.category === 'robotics');
  const mlProjects = projects.filter(p => p.category === 'ml');
  const appProjects = projects.filter(p => p.category === 'apps');

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-start gap-8 mb-12">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <Image
              src="/headshot.jpg"
              alt="Kevin Wu"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          
          {/* Bio */}
          <div>
            <h1 className="text-3xl font-bold mb-3">Kevin Wu</h1>
            <div className="text-gray-700 space-y-3 leading-relaxed">
              <p>
                I'm Kevin - welcome to my site!
              </p>
              <p>
                I work on strategic advisory and capital markets for portfolio companies at a16z. 
                I'm also helping build Speedrun - the world's best pre-seed and early stage investment program. 
              </p>
              <p>
                Though born in the US, I grew up in China (12 years)
                and built 2 apps in EdTech and professional networking during the mobile internet boom while in High School in Bejing. 
              </p>
              <p>
                I moved back for Berkeley - where I studied Industrial Engineering, Data Science, and Business
                and almost completed a triple major before deciding to graduate early instead. 
              </p>
              <p>
                These days, I build projects spanning robotics, data science/ML, and consumer apps in my free time (see some of them below!).
              </p>
              <p>
                I love reading about macroeconomics, history, and geopolitics and I also LOVE Pokemon, videogames, a good workout, and burritos. 
              </p>
            </div>
            
            {/* Links */}
            <div className="flex gap-4 mt-4 text-sm">
              <a href="https://www.linkedin.com/in/kevwu98/" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
              <a href="kev.wu98@gmail.com" className="text-blue-600 hover:underline">
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold">Projects</h2>
          
          {/* Robotics Projects */}
          {roboticsProjects.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-4">Robotics & AI</h3>
              <div className="space-y-6">
                {roboticsProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* ML Projects */}
          {mlProjects.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-4">Machine Learning & Data Science</h3>
              <div className="space-y-6">
                {mlProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* App Projects */}
          {appProjects.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-4">Applications & Tools</h3>
              <div className="space-y-6">
                {appProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: any }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <div className="flex gap-2 text-sm">
          {project.github && (
            <a 
              href={project.github} 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-700 mb-3">{project.description}</p>
      
      <p className="text-gray-600 text-sm mb-3">{project.approach}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span 
            key={tag} 
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}