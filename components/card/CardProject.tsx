import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { Image, Tag as ChakraTag } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import {Project} from "../../data/ecosystem";
import {Tag} from "../../data/tag"

interface CardProjectProps {
  project: Project;
}
function CardProject({ project }: CardProjectProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { name, description, tags, logo } = project;

  const leftToRight = {
    visible: { transform: "rotateY(180deg)" },
    hidden: { transform: "rotateY(0deg)" },
  };

  const rightToLeft = {
    visible: { transform: "rotateY(-180deg)" },
    hidden: { transform: "rotateY(0deg)" },
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const renderBaseCard = (children: any, isFront: boolean) => {
    return (
      <motion.div
        variants={isFront ? leftToRight : rightToLeft}
        animate={
          isFront
            ? isFlipped
              ? "visible"
              : "hidden"
            : !isFlipped
            ? "visible"
            : "hidden"
        }
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backfaceVisibility: "hidden",
        }}
      >
        <Flex
          p={6}
          bg="gray.800"
          borderRadius="md"
          direction="column"
          justify="space-between"
          align="center"
          minHeight="350px"
        >
          {children}
        </Flex>
      </motion.div>
    );
  };

  return (
    <Box
      cursor="pointer"
      id="scene"
      w="full"
      h="full"
      style={{
        perspective: "600px",
        height: "100%",
        width: "100%",
      }}
      onClick={handleClick}
    >
      <Box
        id="card"
        w="full"
        h="full"
        position="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {renderBaseCard(
          <>
            <Box boxSize="170px">
              <Image src={logo === '' ? '/starknet-logo.png' : `/logos/${logo}`} alt={`${name} logo`} />
            </Box>
            <Text my={8} fontSize="xl" fontWeight="bold">
              {name}
            </Text>
            <HStack spacing={2}>
              {tags && tags.length > 0 ? (
                tags.map((tag: Tag) => {
                  return (
                    <ChakraTag key={`project-${name}-tag-${tag.value}`}>
                      {tag.label}
                    </ChakraTag>
                  );
                })
              ) : (
                <ChakraTag key={`project-${name}-tag-none`}>😕</ChakraTag>
              )}
            </HStack>
          </>,
          true
        )}
        {renderBaseCard(<Text>{description}</Text>, false)}
      </Box>
    </Box>
  );
}

export default CardProject;
