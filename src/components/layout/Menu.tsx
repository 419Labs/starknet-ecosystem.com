import { Flex, Text } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import type { Tag } from "../../../data/tag";
import { useTranslate } from "../../context/TranslateProvider";

import menuIcons from "./icons";
import MenuButton from "./MenuButton";

interface MenuProps {
  tags: Tag[];
  initialValue: Tag;
  childCount?: number;
  typeText: string;
  small?: boolean;
  icon?: any;
  onChange: (tag: Tag) => void;
}

function Menu({
  tags,
  initialValue,
  childCount = -1,
  typeText,
  small,
  icon,
  onChange,
}: MenuProps) {
  const { t } = useTranslate();
  const [selectedValue, setSelectedValue] = useState<Tag>(initialValue);

  const onSelected = (newTag: Tag) => {
    setSelectedValue(newTag);
    onChange(newTag);
  };

  const getIndicationText = () => {
    if (childCount < 0) {
      return "";
    }
    if (childCount > 100) {
      return "100+";
    }
    return childCount;
  };

  const renderMobileMenu = () => {
    return (
      <Flex w="full" align="center" justify="space-between">
        <Text>
          {getIndicationText()} {typeText}
        </Text>
        <MenuButton
          menus={tags.map((tag) => {
            return {
              href: "",
              children: <Text>{t.tags[tag.value] || tag.value}</Text>,
              onSelect: () => onSelected(tag),
            };
          })}
          icon={icon || faChevronDown}
          text={t.tags[selectedValue.value] || selectedValue.label}
        />
      </Flex>
    );
  };

  const renderDefaultMenu = () => {
    return (
      <Flex
        direction="column"
        w="300px"
        pr={12}
        position="sticky"
        top={0}
        alignSelf="flex-start"
      >
        <Text fontSize="3xl" mb={8}>
          Category
        </Text>
        {tags.map((tag) => {
          return (
            <Flex
              key={`tag-menu-${tag.value}`}
              mb={2}
              px={1}
              py={1}
              direction="row"
              justify="space-between"
              align="center"
              onClick={() => onSelected(tag)}
              borderRadius="md"
              bg={
                selectedValue.value === tag.value
                  ? "primary.700"
                  : "transparent"
              }
              _hover={{ cursor: "pointer" }}
            >
              <Flex direction="row" justify="flex-start" align="center">
                <Flex minW="24px" justify="center" align="center">
                  {/* see https://fontawesome.com/versions#add-individual-icons-explicitly */}
                  <FontAwesomeIcon
                    fontSize="18px"
                    icon={
                      menuIcons[tag.icon as keyof typeof menuIcons] ||
                      menuIcons.home
                    }
                  />
                </Flex>
                <Text ml={4} fontWeight="bold" fontSize="16px">
                  {t.tags[tag.value] || tag.label}
                </Text>
              </Flex>
              {selectedValue.value === tag.value && (
                <Text>{getIndicationText()}</Text>
              )}
            </Flex>
          );
        })}
      </Flex>
    );
  };

  return (
    <>
      <Show below="md">{renderMobileMenu()}</Show>
      <Show above="md">{small ? renderMobileMenu() : renderDefaultMenu()}</Show>
    </>
  );
}

export default Menu;
