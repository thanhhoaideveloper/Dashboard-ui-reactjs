import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PortraitIcon from "@mui/icons-material/Portrait";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const menu = [
  { title: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { title: "Manage Team", path: "/team", icon: <GroupIcon /> },
  {
    title: "Constacts Informations",
    path: "/contact",
    icon: <ContactsIcon />,
  },
  { title: "Invoice Balance", path: "/invoice", icon: <ReceiptIcon /> },
  { title: "Profile Form", path: "/form", icon: <PortraitIcon /> },
  { title: "Calendar", path: "/calendar", icon: <InsertInvitationIcon /> },
  { title: "Bar Chart", path: "/bar-chart", icon: <BarChartIcon /> },
  { title: "Pie Chart", path: "/pie-chart", icon: <PieChartIcon /> },
  { title: "Line Chart", path: "/line-chart", icon: <ShowChartIcon /> },
  {
    title: "Geography Chart",
    path: "/geograpgy-chart",
    icon: <AnalyticsIcon />,
  },
];

export default menu;
