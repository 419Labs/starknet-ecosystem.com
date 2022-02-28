import { Stack } from "@chakra-ui/layout";
import { Tag as ChakraTag } from "@chakra-ui/react";
import { useState } from "react";

export interface Tag {
  value: string;
  label: string;
}

interface TagMenuProps {
  tags: Tag[];
  initialValue: Tag;
}
function TagMenu({ tags, initialValue }: TagMenuProps) {
  const [selectedValue, setSelectedValue] = useState<Tag>(initialValue);

  const tagClicked = (newTag: Tag) => {
    setSelectedValue(newTag);
  };

  return (
    <Stack
      direction="row"
      spacing={4}
      wrap="wrap"
      shouldWrapChildren
      justify="center"
    >
      {tags.map((tag: Tag) => (
        <ChakraTag
          mt={2}
          size="lg"
          key={tag.value}
          variant="solid"
          cursor="pointer"
          onClick={() => tagClicked(tag)}
          bg={selectedValue.value === tag.value ? "brand.900" : "whiteAlpha"}
          border="1px solid"
          borderColor={
            selectedValue.value === tag.value ? "transparent" : "whiteAlpha.300"
          }
        >
          {tag.label}
        </ChakraTag>
      ))}
    </Stack>
  );
}

export default TagMenu;
