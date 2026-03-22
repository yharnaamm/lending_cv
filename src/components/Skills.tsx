import { skills } from '../data/skills';

const Skills = () => {
  const categories = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    tools: skills.filter((s) => s.category === 'tools'),
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Technologies I work with</p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Frontend Development</h3>
            <div className="grid gap-6">
              {categories.frontend.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                      style={{
                        width: `${skill.level}%`,
                        animation: 'slideIn 1s ease-out',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Backend & Database</h3>
            <div className="grid gap-6">
              {categories.backend.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                      style={{
                        width: `${skill.level}%`,
                        animation: 'slideIn 1s ease-out',
                        animationDelay: '0.2s',
                        animationFillMode: 'backwards',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Tools & Workflow</h3>
            <div className="grid gap-6">
              {categories.tools.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                      style={{
                        width: `${skill.level}%`,
                        animation: 'slideIn 1s ease-out',
                        animationDelay: '0.4s',
                        animationFillMode: 'backwards',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
