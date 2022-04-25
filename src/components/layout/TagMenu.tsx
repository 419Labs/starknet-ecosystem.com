import { Stack } from "@chakra-ui/layout";
import { useState } from "react";

import type { Tag } from "../../../data/tag";

import StyledTag from "./StyledTag";

interface TagMenuProps {
  tags: Tag[];
  initialValue: Tag;
  onChange: (tag: Tag) => void;
}
function TagMenu({ tags, initialValue, onChange }: TagMenuProps) {
  const [selectedValue, setSelectedValue] = useState<Tag>(initialValue);

  const tagClicked = (newTag: Tag) => {
    setSelectedValue(newTag);
    onChange(newTag);
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
        <StyledTag
          key={tag.value}
          value={tag.value}
          onClick={() => tagClicked(tag)}
          selected={selectedValue.value === tag.value}
        />
      ))}
    </Stack>
  );
}

export default TagMenu;
