// @ts-nocheck
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import Contact from '../../types/Contact';
import { Table as StyledTable } from './styles';

interface TableProps {
	columns: any[];
	data: any[];
	onRowClick: (contact: Contact) => void;
}

export const Table: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable(
			{
				columns,
				data,
			},
			useSortBy
		);

	return (
		<StyledTable {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th
								key={column.id}
								{...column.getHeaderProps(column.getSortByToggleProps())}
							>
								{column.render('Header')}
								<span>
									{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
								</span>
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr
							key={row.id}
							{...row.getRowProps()}
							onClick={() => onRowClick(row.original as Contact)}
						>
							{row.cells.map((cell) => (
								<td key={cell.value} {...cell.getCellProps()}>
									{cell.render('Cell')}
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</StyledTable>
	);
};
