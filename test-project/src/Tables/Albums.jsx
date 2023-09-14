import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import '../App.css'
const columns = [
  { field: "userId", headerName: "userId" },
  { field: "id", headerName: "id" },
  {field: "title",headerName: "title",width: 500,cellClassName: "body-cell",
  },
];

const Albums = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
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

export default Albums;
