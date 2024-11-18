import ModalContainer from "./ModalContainer";
import Tag from "../Tag";
import GoToButton from "@/components/domain/projects/details/GoToButton";
import ImageSwiper from "@/components/domain/projects/details/ImageSwiper";
import Features from "@/components/domain/projects/details/Features";
import TechStack from "@/components/domain/projects/details/TechStack";
import Contributions from "@/components/domain/projects/details/Contributions";
import TroubleShooting from "@/components/domain/projects/details/TroubleShooting";
import { TProjectData } from "@/types/Projects";

type ProjectModalProps = {
  onClose: () => void;
  project: TProjectData;
};

const ProjectModal = ({ onClose, project }: ProjectModalProps) => {
  const {
    images,
    name,
    category,
    term,
    description,
    techStacks,
    url,
    github,
    features,
    contributions,
    troubleShooting,
  } = project;

  return (
    <ModalContainer onClose={onClose} isCloseClickOutside>
      <article className="relative flex flex-col items-center w-full min-h-screen gap-20 pt-10 p-5">
        <div className="w-full h-auto flex flex-col items-center gap-1">
          <Tag label={category} />
          <h1 className="font-bold text-[#FAFAF9] text-[40px] mobile:text-[30px]">
            {name}
          </h1>
          <span className="font-medium text-[14px]">{term}</span>
          <span className="font-medium text-[14px] text-center mt-2 whitespace-pre-line">
            {description}
          </span>
          <GoToButton url={url} github={github} />
          <ImageSwiper images={images} />
        </div>
        <div className="flex flex-col w-full h-full gap-[50px] bg-[#FAFAF9] p-5 rounded-[5px]">
          <Features features={features} />
          <TechStack techStacks={techStacks} />
          {contributions && <Contributions contributions={contributions} />}
          {troubleShooting && (
            <TroubleShooting troubleShooting={troubleShooting} />
          )}
        </div>
      </article>
    </ModalContainer>
  );
};

export default ProjectModal;