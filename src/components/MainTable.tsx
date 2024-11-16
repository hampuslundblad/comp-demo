import { FC } from "react";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";

interface MainTableProps {
  headings: string[];
  tableData: { [key: string]: number | string | boolean }[];
  caption?: string;
}

const MainTable: FC<MainTableProps> = ({ headings, tableData, caption }) => {
  return (
    <Table>
      {caption ? <TableCaption> {caption} </TableCaption> : undefined}
      <TableHeader>
        <TableRow>
          {headings.map((heading) => (
            <TableHead key={heading}> {heading}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData &&
          tableData.length > 0 &&
          tableData.map((row, index) => (
            <TableRow key={"row" + index}>
              {Object.keys(row).map((key, index) => (
                <TableCell key={key + index}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default MainTable;
