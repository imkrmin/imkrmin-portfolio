import ModalContainer from "./ModalContainer";
import Tag from "../Tag";
import GoToButton from "@/components/domains/projects/details/GoToButton";
import ImageSwiper from "@/components/domains/projects/details/ImageSwiper";
import Features from "@/components/domains/projects/details/Features";
import TechStack from "@/components/domains/projects/details/TechStack";
import Contributions from "@/components/domains/projects/details/Contributions";
import TroubleShooting from "@/components/domains/projects/details/TroubleShooting";
import { TProjectData } from "@/types/projects";

const ProjectModal = ({
  onClose,
  project,
}: {
  onClose: () => void;
  project: TProjectData;
}) => {
  const {
    images,
    name,
    category,
    term,
    descriptions,
    techStacks,
    url,
    github,
    features,
    contributions,
    troubleShooting,
  } = project;

  return (
    <ModalContainer
      onClose={onClose}
      variantClasses="w-auto max-w-[1200px] mobile:w-full h-auto mobile:h-full my-10 mobile:my-0 tablet:my-20 mx-auto tablet:mx-20 mobile:mx-0 mobile:my-0"
      isCloseClickOutside
      isProjectModal
    >
      <article className="flex flex-col items-center w-full min-h-screen gap-20 pt-10 p-10 mobile:px-0">
        <div className="w-full h-auto flex flex-col items-center gap-1">
          <Tag label={category} variantClassess="text-[10px]" />
          <h1 className="font-bold text-[#FAFAF9] text-[40px] mobile:text-[25px]">
            {name}
          </h1>
          <p className="font-medium text-[14px] mobile:text-[12px]">{term}</p>
          {descriptions?.map((description, index) => (
            <p
              key={index}
              className="font-medium text-[14px] mobile:text-[12px] text-center leading-tight mt-2 whitespace-pre-line"
            >
              {description}
            </p>
          ))}
          <GoToButton url={url} github={github} />
          <ImageSwiper images={images} />
        </div>
        <div className="flex flex-col w-full max-w-[1050px] h-full gap-[50px] bg-[#FAFAF9] p-5 mobile:p-3 rounded-[5px]">
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
