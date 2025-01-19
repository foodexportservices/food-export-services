import { useState } from "react";
import { Text, Box } from "@chakra-ui/react";

const ExpandableText = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box onClick={() => setIsExpanded(!isExpanded)} cursor="pointer">
      <Text
        noOfLines={isExpanded ? undefined : 5} // Show full content if expanded
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace={isExpanded ? "normal" : "nowrap"}
      >
        {description}
      </Text>
    </Box>
  );
};

export default ExpandableText;
