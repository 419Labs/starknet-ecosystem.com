import { Box, Flex } from "@chakra-ui/layout";
import {
  Button,
  Link,
  Menu as ChakraMenu,
  MenuButton as ChakraMenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface MenuItf {
  children: any;
  href: string;
  icon?: any;
}
interface MenuButtonProps {
  menus: MenuItf[];
  text?: string;
  mainGroupTitle?: string;
  icon?: any;
}
const MenuButton = ({ menus, text, mainGroupTitle, icon }: MenuButtonProps) => {
  const renderMenus = (menusToRender: MenuItf[]) => {
    return menusToRender.map((menu, index: number) => {
      const { children, icon: menuItemIcon, href } = menu;
      return typeof children === "string" ? (
        <MenuItem
          as={Link}
          isExternal
          href={href}
          key={`link-${href}`}
          fontSize="14px"
          iconSpacing={4}
          icon={
            menuItemIcon && (
              <Box w="20px">
                <FontAwesomeIcon fontSize="16px" icon={menuItemIcon} />
              </Box>
            )
          }
        >
          {children}
        </MenuItem>
      ) : (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem
          cursor="pointer"
          // eslint-disable-next-line react/no-array-index-key
          key={`link-${href}-${index}`}
          href={href}
          as={Flex}
        >
          {children}
        </MenuItem>
      );
    });
  };

  return (
    <ChakraMenu
      strategy="fixed"
      autoSelect={false}
      isLazy
      id="more-menu-id"
      matchWidth
    >
      <ChakraMenuButton as={Button}>
        <Flex direction="row" align="center" justify="center">
          {text && (
            <Text fontSize="14px" pr={2}>
              {text}
            </Text>
          )}
          <FontAwesomeIcon icon={icon} fontSize={text ? "10px" : "16px"} />
        </Flex>
      </ChakraMenuButton>
      <MenuList>
        <MenuGroup title={mainGroupTitle}>{renderMenus(menus)}</MenuGroup>
      </MenuList>
    </ChakraMenu>
  );
};

export default MenuButton;
