import "./tabledata.scss";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

// valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,


const Tabledata = (props) => {


  const handleDelete = (a) => {
    console.log(a + " Deleted")
  }

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 120,
    renderCell: (x) => {
      return (
        <div className="actions">
          <Link>
          <img src="./view.svg" alt="" />
          </Link>
          <img src="./delete.svg" alt="" onClick={() => handleDelete(x.row.id)}/>
        </div>
      )
    }
  }

  return (
    <div className="tabledata">
      <Paper sx={{ height: "100%", width: '100%' }}>
        <DataGrid
          className="grid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            }
          }}
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Paper>
    </div>
  )
}

export default Tabledata
