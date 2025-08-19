import { Text } from "@chakra-ui/layout";
import type { TagProps } from "@chakra-ui/react";
import { Tag as ChakraTag } from "@chakra-ui/tag";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

interface Props extends TagProps {
  isChecked?: boolean;
  onCheckedChange?: (isChecked: boolean) => void;
  checkedText: string;
  placeholderText: string;
}
const SwitchTag: FC<Props> = ({
  isChecked,
  onCheckedChange,
  checkedText,
  placeholderText,
  ...props
}) => {
  return (
    <ChakraTag
      onClick={() => onCheckedChange && onCheckedChange(!isChecked)}
      cursor="pointer"
      borderRadius="xl"
      background={isChecked ? "green.500" : "transparent"}
      border="1px solid"
      borderColor={isChecked ? "transparent" : "green.500"}
      {...props}
    >
      <FontAwesomeIcon fontSize="8px" icon={faCircle} />
      <Text ml={2} fontSize="xs" color="green.100" fontWeight="bold">
        {isChecked ? checkedText : placeholderText}
      </Text>
    </ChakraTag>
  );
};

export default SwitchTag;
