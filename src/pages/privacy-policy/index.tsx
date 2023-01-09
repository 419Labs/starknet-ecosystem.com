import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import type { FC } from "react";

import HighlightedText from "../../components/layout/HighlightedText";

const PrivacyPolicyPage: FC = () => {
  return (
    <Flex
      w="full"
      direction="column"
      justify="flex-start"
      align="flex-start"
      transform="translateZ(0)"
    >
      <HighlightedText text="Policy" highlighted="Privacy" />
      <Text mt={4}>
        <i>Last modified: January 9, 2023</i>
      </Text>
      <Text mt={4}>
        This Privacy Policy (the “Policy”) explains how
        419Labs(“Starknet-ecosystem.com”, the “Company”, “we”, “us” or “our”)
        collects, uses, and shares data in connection with the
        starknet-ecosystem web app (starknet-ecosystem.com),
        www.starknet-ecosystem.com website and all of our other properties,
        products, and services (the “Services”).
      </Text>
      <Text mt={4} fontSize="2xl" fontWeight="bold">
        High Level Summary
      </Text>
      <Text ml={12} mt={4} as="div">
        <ul>
          <li>
            419Labs is an incorporated company based in Switzerland that
            operates https://starknet-ecosystem.com/ among other products and
            services. 419Labs complies with Swiss laws and regulations.
          </li>
          <li>
            Starknet-ecosystem webapp is a community owned dashboard that
            provide usefull informations about the starknet ecosystem in his
            global.
          </li>
          <li>
            419Labs does not collect and store personal data, such as first
            name, last name, street address, date of birth, email address, or IP
            address.
          </li>
          <li>
            419Labs collects non-identifiable data, such as public on-chain
            data, and limited off-chain data like device type, browser version,
            etc. This is to help drive production vision, not track users. -
            419Labs endeavors to refine its practices by exploring methods to
            further protect consumer privacy such as opt-out prompts, migrating
            to privacy-centric tooling, and deploying proxies to anonymize
            network traffic. - Users are empowered to explore client-side
            privacy techniques and tools. - Any material changes to privacy will
            be reflected in an updated privacy policy.
          </li>
        </ul>
      </Text>
    </Flex>
  );
};

export default PrivacyPolicyPage;
