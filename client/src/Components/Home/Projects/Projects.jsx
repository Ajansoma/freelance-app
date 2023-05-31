import { projects } from '../../../data';
import ProjectsItem from './ProjectsItem';
import Slide from '../../../UI/Slide';

const Projects = () => {
  return (
    <div className="pt-16 shadow-black-500/50 mb-24 mx-9 md:mx-16 lg:mx-32 flex justify-between">
      <div className="w-full">
        <Slide items={[5, 4, 3, 2, 1]}>
          {projects.map((project) => (
            <ProjectsItem
              img={project.img}
              pp={project.pp}
              cat={project.cat}
              username={project.username}
              key={project.id}
            />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
