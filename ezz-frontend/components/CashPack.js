import React from "react";

const tableStyles = {
  borderCollapse: "collapse",
  width: "100%",
};

const thStyles = {
  backgroundColor: "black",
  color: "white",
  fontSize: "14px",
  padding: "8px",
  textAlign: "right",
};

const tdStyles = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "right",
};

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("<10", "10EGP"),
  createData("<20", "20EGP"),
  createData("<30", "30EGP"),
  createData("<40", "40EGP"),
  createData("50+", "50EGP"),
];

const CashPack = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "400px",
      }}
    >
      <table style={tableStyles}>
        {/* Table Head */}
        <thead>
          <tr>
            <th style={thStyles}>عدد الاصدقاء</th>
            <th style={thStyles}>الكاش باك</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={tdStyles}>{row.name}</td>
              <td style={tdStyles}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CashPack;
