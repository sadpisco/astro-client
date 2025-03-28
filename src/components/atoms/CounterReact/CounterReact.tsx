import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CounterReact: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <VStack>
        <Heading size="xl">Contador: {count}</Heading>
        <HStack>
          <Button
            size='sm'
            variant='solid'
            onClick={() => setCount(count + 1)}
          >
            Incrementar
          </Button>
          <Button
            size='md'
            variant='outline'
            onClick={() => setCount(count - 1)}
          >
            Decrementar
          </Button>
          <Button
            size='lg'
            variant="surface"
            onClick={() => setCount(0)}
          >
            Resetear
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CounterReact;
