import { HStack, Text } from "@chakra-ui/layout";
import type { InputProps } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

interface Props extends InputProps {
  difficultyLabel: string;
}
const DifficultyIcon: FC<Props> = ({ difficultyLabel }) => {
  const getDifficultyLevel = () => {
    switch (difficultyLabel) {
      case "easy":
        return 0;
      case "intermediate":
        return 1;
      case "hard":
        return 2;
      default:
        return 0;
    }
  };
  const getColorByLevel = (level: number) => {
    switch (level) {
      case 0:
        return "green.400";
      case 1:
        return "orange.400";
      case 2:
        return "red.400";
      default:
        return "green.400";
    }
  };

  return (
    <HStack fontSize="sm" color={getColorByLevel(getDifficultyLevel())}>
      <FontAwesomeIcon fontSize="12px" icon={solid("signal")} />
      <Text color="whiteAlpha.600">{difficultyLabel}</Text>
    </HStack>
  );
};

export default DifficultyIcon;
