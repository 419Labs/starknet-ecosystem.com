import { Flex, Link } from "@chakra-ui/layout";
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
        <i>Last modified: January 27, 2023</i>
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
            419Labs is an independent studio based in Switzerland that operates
            <Link
              ml={1}
              style={{ textDecoration: "underline" }}
              href="https://starknet-ecosystem.com/"
            >
              https://starknet-ecosystem.com/
            </Link>{" "}
            among other products and services. 419Labs complies with Swiss laws
            and regulations.
          </li>
          <li>
            Starknet-ecosystem webapp is a community owned dashboard that
            provides useful information about the Starknet ecosystem globally.
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
      <Text mt={4} fontSize="2xl" fontWeight="bold">
        How We Use Data
      </Text>
      <Text mt={4} as="div">
        We use the data we collect in accordance with your instructions,
        including any applicable terms in our Terms of Service, and as required
        by law. We may also use data for the following purposes:
      </Text>
      <Text ml={12} mt={4} as="div">
        <ul>
          <li>
            <Text fontWeight="bold">Providing the Services.</Text> We use the
            data we collect to provide, maintain, customize and improve our
            Services and features of our Services.
          </li>
          <li>
            <Text fontWeight="bold">Customer support.</Text> We may use
            information to provide customer support for and answer inquiries
            about the Services.
          </li>
          <li>
            <Text fontWeight="bold">Safety and security.</Text> We may use data
            to protect against, investigate, and stop fraudulent, unauthorized,
            or illegal activity. We may also use it to address security risks,
            solve potential security issues such as bugs, enforce our
            agreements, and protect our users and Company.
          </li>
          <li>
            <Text fontWeight="bold">Legal compliance.</Text> We may use the
            information we collect as needed or requested by regulators,
            government entities, and law enforcement to comply with applicable
            laws and regulations.
          </li>
          <li>
            <Text fontWeight="bold">Aggregated data.</Text> We may use some of
            the information we collect or access to compile aggregated data that
            helps us learn more about how users use the Services and where we
            can improve your experience.
          </li>
        </ul>
      </Text>
      <Text mt={4} fontSize="2xl" fontWeight="bold">
        How We Share Data
      </Text>
      <Text mt={4} as="div">
        While we collect personal data, we share this data to the following
        services and companies:
      </Text>
      <Text ml={12} mt={4} as="div">
        <ul>
          {/* <li>
            Sentry, for application monitoring and error tracking purposes;
          </li> */}
          <li>
            <Text fontWeight="bold">
              Google Analytics, Vercel analytics & Hotjar
            </Text>
            To have a better understanding of the use of the starknet-ecosystem
            app by our users;
          </li>
          <li>
            <Text fontWeight="bold">Vercel</Text>For hosting purposes
          </li>
        </ul>
      </Text>
      <Text mt={4} fontSize="2xl" fontWeight="bold">
        Disclosures
      </Text>
      <Text mt={4} as="div">
        <p>
          We process personal data for the purposes described in the section
          titled “How We Use Data” above. Our basis for processing your data
          include: (i) you have given consent to the process to us or our
          service provides for one or more specific purposes; (ii) processing is
          necessary for the performance of a contract with you; (iii) processing
          is necessary for compliance with a legal obligation; and/or (iv)
          processing is necessary for the purposes of the legitimate interested
          pursued by us or a third party, and your interests and fundamental
          rights and freedoms do not override those interests.
        </p>
        <p>
          Your rights under the General Data Protection Regulations (“GDPR”)
          include the right to (i) request access and obtain a copy of your
          personal data, (ii) request rectification or erasure of your personal
          data, (iii) object to or restrict the processing of your personal
          data; and (iv) request portability of your personal data.
          Additionally, you may withdraw your consent to our collection at any
          time. Nevertheless, we cannot edit or delete information that is
          stored on a particular blockchain. Information such as your
          transaction data, blockchain wallet address, and assets held by your
          address that may be related to the data we collect is beyond our
          control.
        </p>
        <p>
          To exercise any of your rights under the GDPR, please contact us at
          <Link
            ml={1}
            style={{ textDecoration: "underline" }}
            href="mailto:privacy@419labs.io"
          >
            privacy@419labs.io
          </Link>
          . We may require additional information from you to process your
          request. Please note that we may retain information as necessary to
          fulfill the purpose for which it was collected and may continue to do
          so even after a data subject request in accordance with our legitimate
          interests, including to comply with our legal obligations, resolves
          disputes, prevent fraud, and enforce our agreements.
        </p>
      </Text>
      <Text mt={4} fontSize="2xl" fontWeight="bold">
        Changes to this Policy
      </Text>

      <p>
        If we make material changes to this Policy, we will notify you via the
        Services. Nevertheless, your continued use of the Services reflects your
        periodic review of this Policy and other Company terms, and indicates
        your consent to them.
      </p>

      <Text mt={4} fontSize="2xl" fontWeight="bold">
        Contact Us
      </Text>
      <p>
        If you have any questions about this Policy or how we collect, use, or
        share your information, please contact us at{" "}
        <Link
          ml={1}
          style={{ textDecoration: "underline" }}
          href="mailto:privacy@419labs.io"
        >
          privacy@419labs.io
        </Link>
        .
      </p>
    </Flex>
  );
};

export default PrivacyPolicyPage;
