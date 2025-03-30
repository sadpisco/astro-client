import Button from '@/components/atoms/Button';
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CounterReact: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Box className='shadow-md p-6 border-2 border-gray-300 rounded-lg'>
      <VStack>
        <Heading size="xl">Contador: {count}</Heading>
        <HStack>
          <Button
            size='sm'
            variant='ghost'
            loading={loading}
            colorScheme='blue'
            disabled
            onClick={() => {
              setCount(count + 1)
              setLoading(true)
            }}
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
            onClick={() => {
              setCount(0)
              setLoading(false)
            }}
          >
            Resetear
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CounterReact;
