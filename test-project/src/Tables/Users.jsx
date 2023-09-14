import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "id", width: 10 },
  { field: "name", headerName: "name", cellClassName: "body-cell" },
  {
    field: "username",
    headerName: "username",
    width: 100,
    cellClassName: "body-cell",
  },
  {
    field: "email",
    headerName: "email",
    width: 150,
    cellClassName: "body-cell",
  },
  {
    field: "address",
    headerName: "Address",
    width: 500,
    cellClassName: "body-cell",
    renderCell: (params) => (
      <div>
        street:{params.row.address.street}, suite:{params.row.address.suite},
        city:{params.row.address.city}, zipcode:{params.row.address.zipcode} ,
        lat: {params.row.address.geo.lat} , lng:{params.row.address.geo.lng}
      </div>
    ),
  },
  {
    field: "phone",
    headerName: "phone",
    width: 150,
    cellClassName: "body-cell",
  },
  {
    field: "website",
    headerName: "website",
    width: 150,
    cellClassName: "body-cell",
  },
  {
    field: "company",
    headerName: "company",
    width: 700,
    cellClassName: "body-cell",
    renderCell: (param) => (
      <div>
        name: {param.row.company.name}
        catchPhrase: {param.row.company.catchPhrase}
        bs: {param.row.company.bs}
      </div>
    ),
  },
];

const Users = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <DataGrid
          rows={tableData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
};

export default Users;
