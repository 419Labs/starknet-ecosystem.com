import { Avatar, type AvatarProps } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import type { Project } from "../../../data/ecosystem";
import { getProjectLocalLogoSrc, getProjectLogoSrc } from "../../services/project-logo";

interface ProjectAvatarProps extends Omit<AvatarProps, "src" | "name" | "onError"> {
  project: Pick<Project, "id" | "name" | "image" | "network">;
}

export const ProjectAvatar = ({ project, ...props }: ProjectAvatarProps) => {
  const preferredSrc = getProjectLogoSrc(project);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const src = failedSrc === preferredSrc ? getProjectLocalLogoSrc(project) : preferredSrc;
  const onError = useCallback(() => setFailedSrc(preferredSrc), [preferredSrc]);

  return <Avatar {...props} name={project.name} src={src} onError={onError} />;
};
