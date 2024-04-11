import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Card from "@mui/material/Card";
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import VisualizePlots from "charts/getData/fetchData";
import '../../style.css'

function LoanDefault() {

  return (
    <DashboardLayout>
      <MDBox py={3}>
        <MDBox mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card sx={{ height: "100%" }}>
                  <MDBox padding="1rem">
                    <VisualizePlots ChartType={Bar} columnX={"Client_Country"} columnY={["ID"]} Calculate={["count"]} title={"Average Sales by Country"} />
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card sx={{ height: "100%" }}>
                  <MDBox padding="1rem">
                    <VisualizePlots ChartType={Bar} columnX={"Client_Gender"} columnY={["Loan_Annuity", "Client_Income"]} Calculate={["mean", "mean"]} title={"Average Loan and Income by gender"} />
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card sx={{ height: "100%" }}>
                  <MDBox padding="1rem">
                    <VisualizePlots ChartType={Bar} columnX={"Client_Gender"} columnY={["ID"]} Calculate={"count"} title={"Genderwise automobiles sold"} />
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={7}>
              <Card sx={{ height: "100%" }}>
                <MDBox padding="1rem">
                  <VisualizePlots ChartType={Bar} columnX={"make"} columnY={["ID"]} Calculate={["count"]} title={"Total Sales by make"} />
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Card sx={{ height: "100%" }}>
                <MDBox padding="1rem" className="ChartCanvas">
                  <VisualizePlots ChartType={Bar} indexAxis={'y'} columnX={"Client_Country"} columnY={["normalized-losses"]} Calculate={["sum"]} title={"Total losses by country"} />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              <Card sx={{ height: "100%" }}>
                <MDBox padding="1rem" className="ChartCanvas">
                  <VisualizePlots ChartType={Bar} indexAxis={'y'} columnX={"Client_Income_Type"} columnY={["Credit_Amount", "Client_Income", "Loan_Annuity"]} Calculate={["mean", "mean", "mean"]} title={"Vehicle Usage by Job Sector"} />
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Card sx={{ height: "100%" }}>
                <MDBox padding="1rem">
                  <VisualizePlots ChartType={Bar} columnX={"make"} columnY={["price", "normalized-losses"]} Calculate={["mean", "sum"]} title={"Average sales and accident by make"} />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default LoanDefault;