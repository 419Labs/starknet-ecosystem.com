import { Tag } from "@chakra-ui/react";
import type { FC } from "react";

import { useTranslate } from "../../context/TranslateProvider";

interface Props {
  value: string;
  selected?: boolean;
  onClick?: () => void;
  size?: "sm" | "lg";
}

const StyledTag: FC<Props> = ({ value, selected, size = "lg", onClick }) => {
  const { t } = useTranslate();
  return (
    <Tag
      mb={2}
      size={size}
      variant="solid"
      cursor="pointer"
      onClick={onClick}
      bg={selected ? "brand.900" : "whiteAlpha"}
      border="1px solid"
      borderColor={selected ? "transparent" : "whiteAlpha.300"}
      _hover={{ background: selected ? "brand.900" : "whiteAlpha.100" }}
    >
      {t.tags[value] || value}
    </Tag>
  );
};

export default StyledTag;
