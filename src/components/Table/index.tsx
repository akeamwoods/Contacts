import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Table as StyledTable } from './styles';

interface TableProps {
	columns: any[];
	data: any[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
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
						<tr key={row.id} {...row.getRowProps()}>
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
