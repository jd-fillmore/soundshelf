import { Container, Flex, Input, Select } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Container maxW="1440px">
        <Flex direction="row" flexWrap="wrap" justifyContent="space-between">
          <Flex width={{ base: "100%", md: "50%", lg: "25%" }}>
            <Select placeholder="Musical Act">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <Flex width={{ base: "100%", md: "50%", lg: "25%" }}>
            <Select placeholder="Genre">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <Flex width={{ base: "100%", md: "50%", lg: "25%" }}>
            <Select placeholder="Status">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
