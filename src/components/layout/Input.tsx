import type { InputProps } from "@chakra-ui/react";
import { useStyleConfig, Input as ChakraInput } from "@chakra-ui/react";
import _ from "lodash";
import type { FC, ChangeEvent } from "react";

interface Props extends InputProps {
  debounce?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<Props> = ({ debounce = 0, onChange, ...props }) => {
  const styles = useStyleConfig("Input");

  const handleChange = _.debounce(function (
    event: ChangeEvent<HTMLInputElement>
  ) {
    if (onChange) {
      onChange(event);
    }
  },
  debounce);

  return <ChakraInput __css={styles} onChange={handleChange} {...props} />;
};

export default Input;
