import { Tag } from "@chakra-ui/react";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";

interface Props {
  value: string;
  selected?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const StyledTag: FC<Props> = ({ value, selected, size = "lg", onClick }) => {
  const { t } = useTranslate();
  return (
    <Tag
      size={size}
      variant="solid"
      cursor="pointer"
      onClick={onClick}
      bg={selected ? "primary.200" : "whiteAlpha"}
      border="1px solid"
      borderColor={selected ? "transparent" : "whiteAlpha.300"}
      _hover={{ background: selected ? "primary.200" : "whiteAlpha.100" }}
    >
      {t.tags[value] || value}
    </Tag>
  );
};

export default StyledTag;
