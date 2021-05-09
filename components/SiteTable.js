import React from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

import { Table, Tr, Th, Td } from './Table';
//import DeleteSiteButton from './DeleteSiteButton';

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX="scroll">
      <Table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th width="50px">{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <Box as="tr">
              <Td>{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>View Feedback</Td>
              <Td>{site.createdAt}</Td>
              <Td> </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;