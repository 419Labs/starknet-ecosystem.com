import { HStack, Link } from "@chakra-ui/layout";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
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
      color="whiteAlpha.600"
      onClick={(e) => e.stopPropagation()}
    >
      {website && (
        <Link isExternal href={website}>
          <FontAwesomeIcon icon={solid("globe")} />
        </Link>
      )}
      {twitter && (
        <Link isExternal href={twitter}>
          <FontAwesomeIcon icon={brands("twitter")} />
        </Link>
      )}
      {telegram && (
        <Link isExternal href={telegram}>
          <FontAwesomeIcon icon={brands("telegram")} />
        </Link>
      )}
      {discord && (
        <Link isExternal href={discord}>
          <FontAwesomeIcon icon={brands("discord")} />
        </Link>
      )}
      {medium && (
        <Link isExternal href={medium}>
          <FontAwesomeIcon icon={brands("medium")} />
        </Link>
      )}
      {github && (
        <Link isExternal href={github}>
          <FontAwesomeIcon icon={brands("github")} />
        </Link>
      )}
    </HStack>
  );
};
export default NetworkLogos;
