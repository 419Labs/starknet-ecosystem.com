import { useTranslate } from "../../context/TranslateProvider";
import {Drawer as ChakraDrawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/modal";
import {Flex, Link} from "@chakra-ui/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

interface DrawerProps{
    links: {href: string, label: string}[]
    isOpen: boolean,
    onClose: () => void,
}
function Drawer({links, isOpen, onClose} : DrawerProps) {
  const { t } = useTranslate();

  return (
      <ChakraDrawer autoFocus={false} placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"gray.800"}>
          <DrawerHeader borderBottomWidth='1px'>
              <Logo justify={"center"}/>
          </DrawerHeader>
          <DrawerBody>
              <Flex direction="column" justify="center" align="center">
                  {
                      links.map(({href, label}) => {
                          return <Link py={2} style={{textDecoration: "none"}} isExternal href={href}>
                              {label}
                          </Link>
                      })
                  }
              </Flex>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
  );
}

export default Drawer;
