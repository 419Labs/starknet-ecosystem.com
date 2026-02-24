import type { FlexProps } from "@chakra-ui/layout";
import { Flex, HStack, Link } from "@chakra-ui/layout";
import { Button, Icon, Text } from "@chakra-ui/react";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";

interface Props extends FlexProps {
  onAccept: () => void;
}

const CookiesToast: FC<Props> = ({ onAccept, ...props }) => {
  const { locale, t } = useTranslate();
  return (
    <Flex
      {...props}
      color="text.primary"
      p={{ base: 3, md: 4 }}
      borderRadius={{ base: "lg", md: "xl" }}
      bg="bg.secondary"
      border="1px solid"
      borderColor="border.default"
      boxShadow="lg"
      justify="center"
      align={{ base: "stretch", md: "center" }}
      direction={{ base: "column", md: "row" }}
      maxW={{ base: "calc(100vw - 16px)", md: "600px" }}
    >
      <HStack spacing={3} align="flex-start">
        <Icon
          as={FontAwesomeIcon}
          icon={faCookieBite}
          color="accent.500"
          boxSize={4}
          mt={0.5}
        />
        <Text fontWeight="400" fontSize={{ base: "xs", md: "sm" }} color="text.secondary">
          {t.cookies.description}
        </Text>
      </HStack>
      <HStack
        mt={{ base: 3, md: 0 }}
        ml={{ base: 0, md: 6 }}
        spacing={3}
        justify={{ base: "space-between", md: "flex-start" }}
      >
        <Link
          href={`/${locale}/privacy-policy`}
          fontSize="sm"
          color="accent.500"
          _hover={{ color: "accent.600" }}
        >
          Privacy Policy
        </Link>
        <Button size="sm" variant="solid" onClick={onAccept}>
          Accept
        </Button>
      </HStack>
    </Flex>
  );
};

export default CookiesToast;
