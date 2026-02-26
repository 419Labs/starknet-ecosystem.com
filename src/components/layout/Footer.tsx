import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { faGithub, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { useTranslate } from "../../context/TranslateProvider";

import Link from "./Link";

const githubLink = "https://github.com/419Labs/starknet-ecosystem.com";
const telegramLink = "https://t.me/starknet_ecosystem";
const twitterLink = "https://x.com/StarknetEco";

function Footer() {
  const { t, locale } = useTranslate();

  const footerLinks: { title: string; links: { href: string; label: string; isExternal?: boolean }[] }[] = [
    {
      title: t.footer?.ecosystem || "Ecosystem",
      links: [
        { href: `/${locale}`, label: t.footer?.explore || "Explore" },
        { href: `/${locale}/academy`, label: t.footer?.learn || "Learn" },
        { href: `/${locale}/jobs`, label: t.footer?.jobs || "Jobs" },
        { href: `/${locale}/metrics`, label: t.footer?.metrics || "Metrics" },
      ],
    },
    {
      title: t.footer?.builders || "Builders",
      links: [
        { href: `/${locale}/grants`, label: t.footer?.grants_funding || "Grants & Funding" },
        { href: `/${locale}/tokens`, label: t.footer?.token_directory || "Token Directory" },
        { href: "https://github.com/419Labs/starknet-ecosystem.com/blob/main/docs/add-project.md", label: t.footer?.list_project || "List a Project", isExternal: true },
      ],
    },
    {
      title: t.footer?.community || "Community",
      links: [
        { href: "https://discord.gg/starknet", label: "Discord", isExternal: true },
        { href: "https://t.me/starknet", label: "Telegram", isExternal: true },
        { href: "https://community.starknet.io", label: "Forum", isExternal: true },
      ],
    },
  ];

  const socialLinks = [
    { icon: faXTwitter, href: twitterLink, label: "X" },
    { icon: faGithub, href: githubLink, label: "GitHub" },
    { icon: faTelegram, href: telegramLink, label: "Telegram" },
  ];

  return (
    <Box
      w="full"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      bg="black"
    >
      <Flex
        w="full"
        px={{ base: 6, md: 12, lg: 24 }}
        pt={20}
        pb={10}
        direction="column"
      >
        {/* Main footer content */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          gap={16}
          mb={16}
        >
          {/* Left side - Brand */}
          <VStack align="flex-start" spacing={6} maxW="400px">
            <HStack spacing={3}>
              <Image
                src="/starknet-logo.png"
                alt="Starknet"
                width={40}
                height={40}
                quality={100}
              />
              <Text
                fontSize="16px"
                fontWeight="700"
                color="white"
                letterSpacing="-0.02em"
              >
                STARKNET ECOSYSTEM
              </Text>
            </HStack>
            <Text fontSize="14px" color="gray.500" lineHeight="1.7">
              {t.footer?.tagline || "A community-owned initiative exploring all projects building on Starknet. Powered by avnu."}
            </Text>
            {/* Social links */}
            <HStack spacing={4} pt={2}>
              {socialLinks.map((social) => (
                <Link key={social.label} isExternal href={social.href}>
                  <Box
                    w="40px"
                    h="40px"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="gray.500"
                    transition="all 0.2s ease"
                    _hover={{
                      borderColor: "accent.500",
                      color: "accent.500",
                    }}
                  >
                    <Icon as={FontAwesomeIcon} icon={social.icon} boxSize={4} />
                  </Box>
                </Link>
              ))}
            </HStack>
          </VStack>

          {/* Right side - Links */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={12}>
            {footerLinks.map((section) => (
              <VStack key={section.title} align="flex-start" spacing={4}>
                <Text
                  fontSize="11px"
                  fontWeight="600"
                  color="gray.500"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  {section.title}
                </Text>
                <VStack align="flex-start" spacing={3}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      isExternal={link.isExternal}
                    >
                      <Text
                        fontSize="14px"
                        color="gray.400"
                        transition="color 0.2s ease"
                        _hover={{ color: "white" }}
                      >
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Flex>

        {/* Bottom bar */}
        <Flex
          w="full"
          justify="space-between"
          align="center"
          pt={8}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
          flexWrap="wrap"
          gap={4}
        >
          <HStack spacing={1}>
            <Text fontSize="13px" color="gray.600">
              {t.footer?.built_by || "Built by"}
            </Text>
            <Link isExternal href="https://x.com/avnu_fi">
              <Text
                fontSize="13px"
                color="accent.500"
                fontWeight="500"
                _hover={{ color: "accent.400" }}
              >
                avnu
              </Text>
            </Link>
          </HStack>
          <HStack spacing={4}>
            <Text fontSize="13px" color="gray.600">
              © {new Date().getFullYear()} Starknet Ecosystem
            </Text>
            <Link href={`/${locale}/privacy-policy`}>
              <Text fontSize="13px" color="gray.600" _hover={{ color: "gray.400" }}>
                {t.footer?.privacy || "Privacy"}
              </Text>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
