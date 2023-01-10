// import in project
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              backgroundColor: colors.greenAccent[600],
              borderRadius: "5px",
            }}
            display="flex"
            justifyContent="center"
            alignContent="center"
            padding="5px"
            width="100px"
          >
            {params.row.access === "user" && <PersonIcon />}
            {params.row.access === "admin" && <AdminPanelSettingsIcon />}
            {params.row.access === "manager" && <SecurityIcon />}
            <Typography>
              {params.row.access === "user" && "User"}
              {params.row.access === "admin" && "Admin"}
              {params.row.access === "manager" && "Manager"}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="10px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box mt="10px" sx={{ height: "75vh", width: "100%" }}>
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
