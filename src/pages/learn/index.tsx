import { Box, Link, Text } from "@chakra-ui/layout";
import type { FC } from "react";

import { learn } from "../../../data/learn";
import { useTranslate } from "../../context/TranslateProvider";

const EducationPage: FC = () => {
  const { t } = useTranslate();
  return (
    <Box w="full">
      <Text
        mb={12}
        textAlign="center"
        lineHeight={1.2}
        fontSize={["48px", "68px"]}
        fontWeight="bold"
        as="h1"
      >
        {t.common.education_title || "Getting Started"}
      </Text>
      {learn.categories.map((category) => (
        <Box
          key={category.name}
          w="full"
          borderRadius={10}
          backgroundColor="gray.800"
          pt={[2, 5]}
          pb={[2, 5]}
          pl={[2, 10]}
          pr={[2, 10]}
          mb={8}
        >
          <Text as="h2" fontSize={["20px", "30px"]}>
            {category.name}
          </Text>
          <Text mb={2}>{category.description}</Text>
          <ul>
            {category.links.map((link) => (
              <li>
                <Link href={link.url} isExternal>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default EducationPage;
