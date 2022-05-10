import { HStack, Link } from "@chakra-ui/layout";
import {
  faDiscord,
  faGithub,
  faMedium,
  faTelegram,
  faTwitter,
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
      fontSize="20px"
      onClick={(e) => e.stopPropagation()}
    >
      {website && (
        <Link isExternal href={website}>
          <FontAwesomeIcon icon={faGlobe} />
        </Link>
      )}
      {twitter && (
        <Link isExternal href={twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      )}
      {telegram && (
        <Link isExternal href={telegram}>
          <FontAwesomeIcon icon={faTelegram} />
        </Link>
      )}
      {discord && (
        <Link isExternal href={discord}>
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
      )}
      {medium && (
        <Link isExternal href={medium}>
          <FontAwesomeIcon icon={faMedium} />
        </Link>
      )}
      {github && (
        <Link isExternal href={github}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      )}
    </HStack>
  );
};
export default NetworkLogos;
