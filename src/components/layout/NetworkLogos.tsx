import { HStack, Link } from "@chakra-ui/layout";
import {
  faXTwitter,
  faTelegram,
  faDiscord,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import type { Network } from "../../models/company";

interface Props {
  network: Network;
  justifyContent?: "flex-start" | "flex-end";
}

const NetworkLogos: FC<Props> = ({
  network: { website, telegram, twitter, medium, github, discord },
  justifyContent = "flex-start",
}) => {
  return (
    <HStack
      justifyContent={justifyContent}
      spacing={4}
      fontSize="16px"
      color="gray.500"
      onClick={(e) => e.stopPropagation()}
    >
      {website && (
        <Link
          isExternal
          href={website}
          color="gray.500"
          _hover={{ color: "accent.500" }}
          transition="color 0.15s ease"
        >
          <FontAwesomeIcon icon={faGlobe} />
        </Link>
      )}
      {twitter && (
        <Link
          isExternal
          href={twitter}
          color="gray.500"
          _hover={{ color: "accent.500" }}
          transition="color 0.15s ease"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
      )}
      {telegram && (
        <Link
          isExternal
          href={telegram}
          color="gray.500"
          _hover={{ color: "accent.500" }}
          transition="color 0.15s ease"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </Link>
      )}
      {discord && (
        <Link
          isExternal
          href={discord}
          color="gray.500"
          _hover={{ color: "accent.500" }}
          transition="color 0.15s ease"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
      )}
      {medium && (
        <Link
          isExternal
          href={medium}
          color="gray.500"
          _hover={{ color: "accent.500" }}
          transition="color 0.15s ease"
        >
          <FontAwesomeIcon icon={faMedium} />
        </Link>
      )}
      {github && (
        <Link
          isExternal
          href={github}
          color="gray.500"
          _hover={{ color: "accent.500" }}
          transition="color 0.15s ease"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      )}
    </HStack>
  );
};

export default NetworkLogos;
