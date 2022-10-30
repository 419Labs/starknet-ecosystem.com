import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  img: any;
  tooltipText: string;
}

const ImageTooltip: FC<Props> = ({ img, tooltipText }) => {
  return (
    <Box>
      <Tooltip label={tooltipText}>
        <Box p="1" borderRadius="md">
          {img}
        </Box>
      </Tooltip>
    </Box>
  );
};

export default ImageTooltip;
