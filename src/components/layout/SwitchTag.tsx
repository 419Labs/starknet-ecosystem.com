import { Text } from "@chakra-ui/layout";
import type { TagProps } from "@chakra-ui/react";
import { Tag as ChakraTag } from "@chakra-ui/tag";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

interface Props extends TagProps {
  isChecked?: boolean;
  onCheckedChange?: (isChecked: boolean) => void;
}
const SwitchTag: FC<Props> = ({ isChecked, onCheckedChange }) => {
  return (
    <ChakraTag
      onClick={() => onCheckedChange && onCheckedChange(!isChecked)}
      cursor="pointer"
      borderRadius="xl"
      background={isChecked ? "green.500" : "transparent"}
      border="1px solid"
      borderColor={isChecked ? "transparent" : "green.500"}
    >
      <FontAwesomeIcon fontSize="8px" icon={solid("circle")} />
      <Text ml={2} fontSize="xs" color="green.100" fontWeight="bold">
        {isChecked ? "Show all" : "Show only mainnet"}
      </Text>
    </ChakraTag>
  );
};

export default SwitchTag;
