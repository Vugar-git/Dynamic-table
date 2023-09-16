import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "albumId", headerName: "albumId" },
  { field: "id", headerName: "id" },
  { field: "title", headerName: "title", width: 400 },
  { field: "url", headerName: "url", width: 400 },
  { field: "thumbnailUrl", headerName: "thumbnailUrl", width: 400 },
];

const Photos = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
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

export default Photos;
