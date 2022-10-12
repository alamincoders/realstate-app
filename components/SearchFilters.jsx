import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SearchFilters = () => {
  const [filters, setFilters] = useState({});
  const router = useRouter();

  useEffect(() => {}, []);

  return <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap" >Search Filters</Flex>;
};

export default SearchFilters;