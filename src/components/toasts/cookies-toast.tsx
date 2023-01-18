import type { FlexProps } from "@chakra-ui/layout";
import { Flex, HStack, Link } from "@chakra-ui/layout";
import { Button, Text } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";

interface Props extends FlexProps {
  onAccept: () => void;
}
const CookiesToast: FC<Props> = ({ children, onAccept, ...props }) => {
  const { locale, t } = useTranslate();
  return (
    <Flex
      {...props}
      color="white"
      p={4}
      borderRadius="md"
      bg="primary.500"
      justify="center"
      align={{ base: "flex-end", md: "center" }}
      direction={{ base: "column", md: "row" }}
    >
      <HStack>
        <FontAwesomeIcon icon={solid("cookie-bite")} fontSize="24px" />
        <Text fontWeight="400" ml={4}>
          {t.cookies.description}
        </Text>
      </HStack>
      <HStack mt={{ base: 4, md: 0 }}>
        <Link href={`/${locale}/privacy-policy`} ml={{ base: 4, lg: 100 }}>
          Privacy Policy
        </Link>
        <Button
          size="sm"
          ml={4}
          variant="solid-soft"
          colorScheme="white"
          onClick={onAccept}
        >
          OK
        </Button>
      </HStack>
    </Flex>
  );
};

export default CookiesToast;
