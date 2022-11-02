import { Text, VStack } from "@chakra-ui/layout";

import Link from "../components/layout/Link";

export default function FourOhFour() {
  return (
    <VStack>
      <Text as="h1" fontSize="lg">
        There is nothing to see here
      </Text>
      <Link href="/">Go back home ?</Link>
    </VStack>
  );
}
