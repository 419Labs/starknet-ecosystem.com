import { Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Head from "next/head";

import Link from "../components/layout/Link";
import { useTranslate } from "../context/TranslateProvider";

export default function FourOhFour() {
  const { t } = useTranslate();

  return (
    <>
      <Head>
        <title>404 — Page Not Found | Starknet Ecosystem</title>
        <meta name="robots" content="noindex" />
      </Head>
      <VStack spacing={6} pt={28} pb={20} px={4} textAlign="center">
        <Text
          fontSize="8xl"
          fontWeight="800"
          bgGradient="linear(to-r, accent.400, accent.600)"
          bgClip="text"
          letterSpacing="-0.05em"
        >
          {t.notFound.title || "404"}
        </Text>
        <Text fontSize="xl" fontWeight="600" color="text.primary">
          {t.notFound.subtitle || "Page not found"}
        </Text>
        <Text fontSize="md" color="text.secondary" maxW="400px">
          {t.notFound.description || "The page you're looking for doesn't exist or has been moved."}
        </Text>
        <Link href="/">
          <Button variant="solid" size="lg">
            {t.notFound.go_home || "Go back home"}
          </Button>
        </Link>
      </VStack>
    </>
  );
}
