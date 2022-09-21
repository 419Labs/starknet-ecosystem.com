import { Box, Flex, Text } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import type { Tag } from "../../../data/tag";
import { useTranslate } from "../../context/TranslateProvider";

interface MenuProps {
  tags: Tag[];
  initialValue: Tag;
  onChange: (tag: Tag) => void;
}

function Menu({ tags, initialValue, onChange }: MenuProps) {
  const { t } = useTranslate();
  const [selectedValue, setSelectedValue] = useState<Tag>(initialValue);

  const onSelected = (newTag: Tag) => {
    setSelectedValue(newTag);
    onChange(newTag);
  };

  return (
    <Flex direction="column" w="300px" pr={12}>
      <Text fontSize="3xl">Category</Text>
      {tags.map((tag) => {
        return (
          <Flex
            mb={2}
            px={1}
            py={0.5}
            direction="row"
            justify="space-between"
            align="center"
            onClick={() => onSelected(tag)}
            borderRadius="md"
            bg={selectedValue.value === tag.value ? "primary.700" : "transparent"}
            _hover={{ cursor: "pointer" }}
          >
            <Flex direction="row" justify="flex-start" align="center">
              <FontAwesomeIcon fontSize="18px" icon={solid("home")} />
              <Text ml={4} fontWeight="bold" fontSize="16px">
                {t.tags[tag.value] || tag.value}
              </Text>
            </Flex>
            {selectedValue.value === tag.value && <Text>100+</Text>}
          </Flex>
        );
      })}
    </Flex>
  );
}

export default Menu;
