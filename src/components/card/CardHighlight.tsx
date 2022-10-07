import { Box, Flex, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardHighlightProps {
  icon?: any;
  title: string;
  content: string;
  bg?: string;
  color?: string;
  bgHover?: string;
  colorHover?: string;
  link?: string;
  linkCover?: boolean;
}
function CardHighlight({
  icon,
  title,
  content,
  bg,
  color,
  bgHover,
  colorHover,
  link,
  linkCover,
}: CardHighlightProps) {
  return (
    <Flex
      position="relative"
      direction="column"
      p={4}
      minW="250px"
      transition=".4s ease all"
      cursor="pointer"
      onClick={() => console.log("coucou")}
      bg={bg || "gray.600"}
      _hover={{
        background: bgHover || "gray.600",
        ".text-highlighted": {
          color: colorHover || "inherit",
        },
        ".link-highlighted": {
          opacity: 1,
        },
      }}
      h="full"
      borderRadius="md"
    >
      <HStack overflow="hidden" align="flex-start" pb={10}>
        <Box
          h="full"
          pt={1}
          color={color || "inherit"}
          className="text-highlighted"
          transition=".4s ease all"
        >
          {icon}
        </Box>
        <VStack pl={4} align="flex-start">
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={color || "inherit"}
            className="text-highlighted"
            transition=".4s ease all"
          >
            {title}
          </Text>
          <Text lineHeight="18px">{content}</Text>
        </VStack>
      </HStack>
      <Box
        top={0}
        bottom={0}
        left={0}
        right={0}
        position="absolute"
        borderRadius="md"
        transition=".4s ease all"
        sx={{
          boxShadow: `inset 0 -46px 13px -10px ${
            bg
              ? // eslint-disable-next-line sonarjs/no-nested-template-literals
                `var(--chakra-colors-${bg.replace(".", "-")})`
              : "var(--chakra-colors-gray-600)"
          }`,
          "&:hover": {
            boxShadow: `inset 0 -46px 13px -10px ${
              bgHover
                ? // eslint-disable-next-line sonarjs/no-nested-template-literals
                  `var(--chakra-colors-${bgHover.replace(".", "-")})`
                : "var(--chakra-colors-gray-600)"
            }`,
          },
        }}
      >
        {link && linkCover && (
          <Link
            h="full"
            w="full"
            transition=".4s ease all"
            className="link-highlighted"
            opacity={0}
            bg={bgHover || "gray.600"}
            borderRadius="md"
            fontWeight="bold"
            isExternal
            href={link}
            _hover={{
              textDecoration: "none",
              color: "whiteAlpha.900",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text mr={4}>Read more</Text>
            <FontAwesomeIcon icon={solid("up-right-from-square")} />
          </Link>
        )}
      </Box>
    </Flex>
  );
}

export default CardHighlight;
