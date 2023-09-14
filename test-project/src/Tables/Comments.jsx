import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../App.css";

const columns = [
  { field: "postId", headerName: "postId" },
  { field: "id", headerName: "id" },
  { field: "name", headerName: "name", width: 300, cellClassName: "body-cell" },
  { field: "email", headerName: "email", width: 250 },
  { field: "body", headerName: "body", width: 800, cellClassName: "body-cell" },
];

const Comments = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
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

export default Comments;
