import React from 'react';
import {
  Table,
  TableData,
  TableHeadData,
  TableHead,
  TableRow,
  TableBody,
} from '../../ui';

const MovesTable = ({ moveStats }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadData className='pokemonCard--moves-title'>
            Name
          </TableHeadData>
          <TableHeadData className='pokemonCard--moves-title'>
            Class
          </TableHeadData>
          <TableHeadData className='pokemonCard--moves-title'>
            Power
          </TableHeadData>
          <TableHeadData className='pokemonCard--moves-title'>
            Accuracy
          </TableHeadData>
        </TableRow>
      </TableHead>
      <TableBody>
        {moveStats.map((move, i) => (
          <TableRow key={i}>
            <TableData>{move.name}</TableData>
            <TableData>{move.damage_class}</TableData>
            <TableData>{move.power ? move.power : 'N/A'}</TableData>
            <TableData>{move.accuracy ? move.accuracy : 'N/A'}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MovesTable;
