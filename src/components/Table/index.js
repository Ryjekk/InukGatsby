import React from 'react';
import { TableCell, TableHeading, TableWrapper, TableLink } from './styles';
import { Paragraph } from '../../styles/styles';

const Table = ({ table }) => {
  const headers = Object.keys(table);
  return (
    <TableWrapper>
      <TableCell>
        <TableHeading>{headers[0]}</TableHeading>
        <Paragraph>{table.type}</Paragraph>
      </TableCell>
      <TableCell>
        <TableHeading>{headers[1]}</TableHeading>
        {table.stack.map((el) => (
          <Paragraph key={el}>{el}</Paragraph>
        ))}
      </TableCell>
      <TableCell>
        <TableHeading>{headers[2]}</TableHeading>
        <Paragraph>
          <TableLink href={table.code.link} target="_blank">
            {table.code.text}
          </TableLink>
        </Paragraph>
      </TableCell>
      <TableCell>
        <TableHeading>{headers[3]}</TableHeading>
        <Paragraph>
          <TableLink href={table.live.link} target="_blank">
            {table.live.text}
          </TableLink>
        </Paragraph>
      </TableCell>
    </TableWrapper>
  );
};

export default Table;
