import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "userId", headerName: "userId" },
  { field: "id", headerName: "id" },
  { field: "title", headerName: "title", width: 600 },
  { field: "completed", headerName: "completed", width: 100 },
];

const Todostable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div className="box-style">
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

export default Todostable;
