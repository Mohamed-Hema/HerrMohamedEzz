import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("10 فأكثر", "10EGP علي كل دعوة"),
  createData("20+", "20EGP"),
  createData("30+", "30EGP"),
  createData("40+", "40EGP"),
  createData("50+", "50EGP"),
];

const CashBack = () => {
  return (
    <TableContainer
      component={Paper}
      dir="rtl"
      sx={{
        margin: "0 auto", // Center the table horizontally
        maxWidth: 400, // Set the maximum width for the table container
      }}
    >
      <h3>جدول الكاش باك</h3>

      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        {/* Table Head */}
        <TableHead>
          <TableRow>
            <StyledTableCell dir="rtl">عدد الاصدقاء</StyledTableCell>{" "}
            {/* Add dir="rtl" */}
            <StyledTableCell align="right">الكاش باك</StyledTableCell>
          </TableRow>
        </TableHead>
        {/* Table Body */}
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CashBack;
