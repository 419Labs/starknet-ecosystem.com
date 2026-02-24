import { Box, Flex, Link, Text, VStack } from "@chakra-ui/layout";
import Head from "next/head";
import type { FC } from "react";

import HighlightedText from "../../components/layout/HighlightedText";

const PrivacyPolicyPage: FC = () => {
  return (
    <Flex
      w="full"
      direction="column"
      align="flex-start"
      pt={{ base: 24, md: 32 }}
      pb={16}
      px={{ base: 4, md: 8 }}
      maxW="900px"
      mx="auto"
      gap={6}
    >
      <HighlightedText text="Policy" highlighted="Privacy" />
      <Head>
        <title>Privacy Policy | Starknet Ecosystem</title>
        <meta
          name="description"
          content="Learn how Starknet Ecosystem handles cookies, analytics consent, and user data protection."
        />
        <meta property="og:title" content="Privacy Policy | Starknet Ecosystem" />
        <meta property="og:description" content="Learn how Starknet Ecosystem handles cookies, analytics consent, and user data protection." />
        <meta property="og:type" content="website" />
      </Head>

      <Text color="gray.500">
        <i>Last updated: February 15, 2026</i>
      </Text>

      <Text>
        This Privacy Policy explains how data is handled when you use
        starknet-ecosystem.com (the &quot;Website&quot;). The Website is maintained by
        Starknet Ecosystem contributors and operating partners.
      </Text>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          High-level Summary
        </Text>
        <VStack as="ul" align="flex-start" spacing={2} pl={5}>
          <Text as="li">We do not sell personal data.</Text>
          <Text as="li">
            We only load analytics and session tools after cookie consent is
            accepted.
          </Text>
          <Text as="li">
            Without consent, only essential technical processing may occur
            through our hosting provider for security and delivery.
          </Text>
          <Text as="li">
            You can clear browser storage and cookies at any time to reset
            consent.
          </Text>
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          Data We Process
        </Text>
        <Text mb={3}>
          Depending on your consent choices and usage, we may process:
        </Text>
        <VStack as="ul" align="flex-start" spacing={2} pl={5}>
          <Text as="li">
            Essential technical data (for security, uptime, and abuse
            prevention), such as request metadata and server logs.
          </Text>
          <Text as="li">
            Analytics data (only after consent), such as visited pages, device
            type, browser information, approximate region, and referrer.
          </Text>
          <Text as="li">
            Interaction data (only after consent) for understanding UX
            friction and product improvements.
          </Text>
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          How We Use Data
        </Text>
        <VStack as="ul" align="flex-start" spacing={2} pl={5}>
          <Text as="li">Operate, secure, and maintain the Website.</Text>
          <Text as="li">
            Measure traffic and improve content, navigation, and user
            experience.
          </Text>
          <Text as="li">
            Investigate incidents, prevent abuse, and comply with applicable
            legal obligations.
          </Text>
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          Third-party Services
        </Text>
        <Text mb={3}>
          We may use third-party processors to run and improve the Website:
        </Text>
        <VStack as="ul" align="flex-start" spacing={2} pl={5}>
          <Text as="li">
            Vercel (hosting and delivery infrastructure)
          </Text>
          <Text as="li">
            Google Analytics (traffic analytics, only after consent)
          </Text>
          <Text as="li">
            Hotjar (UX insights, only after consent)
          </Text>
          <Text as="li">
            Vercel Analytics and Vercel Speed Insights (performance analytics,
            only after consent)
          </Text>
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          Data Sharing and Retention
        </Text>
        <Text>
          We do not sell your personal data. Data may be shared with service
          providers strictly to operate the Website and for legitimate
          operational purposes. Data retention depends on provider policies and
          legal obligations.
        </Text>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          Your Choices
        </Text>
        <VStack as="ul" align="flex-start" spacing={2} pl={5}>
          <Text as="li">
            You can accept or reject non-essential tracking by managing cookies
            in your browser.
          </Text>
          <Text as="li">
            You can clear local storage and cookies to reset consent settings.
          </Text>
          <Text as="li">
            You can use privacy tools (private browsing, tracker blocking,
            script blocking) at any time.
          </Text>
        </VStack>
      </Box>

      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          Contact
        </Text>
        <Text>
          For privacy questions, contact{" "}
          <Link href="mailto:privacy@419labs.io" textDecoration="underline">
            privacy@419labs.io
          </Link>
          .
        </Text>
      </Box>
    </Flex>
  );
};

export default PrivacyPolicyPage;
