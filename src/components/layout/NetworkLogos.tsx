import { HStack, Link } from "@chakra-ui/layout";
import {
  faTwitter,
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
  const hoverColor = "whiteAlpha.900";
  return (
    <HStack
      justifyContent={justifyContent}
      spacing={4}
      fontSize="18px"
      color="whiteAlpha.600"
      onClick={(e) => e.stopPropagation()}
    >
      {website && (
        <Link
          isExternal
          href={website}
          _hover={{
            color: hoverColor,
          }}
        >
          <FontAwesomeIcon icon={faGlobe} />
        </Link>
      )}
      {twitter && (
        <Link
          isExternal
          href={twitter}
          _hover={{
            color: hoverColor,
          }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      )}
      {telegram && (
        <Link
          isExternal
          href={telegram}
          _hover={{
            color: hoverColor,
          }}
        >
          <FontAwesomeIcon icon={faTelegram} />
        </Link>
      )}
      {discord && (
        <Link
          isExternal
          href={discord}
          _hover={{
            color: hoverColor,
          }}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
      )}
      {medium && (
        <Link
          isExternal
          href={medium}
          _hover={{
            color: hoverColor,
          }}
        >
          <FontAwesomeIcon icon={faMedium} />
        </Link>
      )}
      {github && (
        <Link
          isExternal
          href={github}
          _hover={{
            color: hoverColor,
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      )}
    </HStack>
  );
};
export default NetworkLogos;
