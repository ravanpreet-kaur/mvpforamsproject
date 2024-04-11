import Analysis from "layouts/Analysis";
import LoanDefault from "layouts/LoanDefault";
// import StressManagement from "layouts/StressManagement";
import PlayAround from "layouts/PlayAround";
import Forecast from "layouts/forecasting"

import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Analysis",
    key: "Analysis",
    icon: <Icon fontSize="small">analytics</Icon>,
    route: "/Analysis",
    component: <Analysis />,
  },
  {
    type: "collapse",
    name: "Performance",
    key: "Performance",
    icon: <Icon fontSize="small">credit_score</Icon>,
    route: "/Performance",
    component: <LoanDefault />,
  },
  // {
  //   type: "collapse",
  //   name: "Stress Management",
  //   key: "StressManagement",
  //   icon: <Icon fontSize="small">healing</Icon>,
  //   route: "/StressManagement",
  //   component: <StressManagement />,
  // },
  {
    type: "collapse",
    name: "Price Prediction",
    key: "PricePrediction",
    icon: <Icon fontSize="small">insights</Icon>,
    route: "/PricePrediction",
    component: <Forecast />,
  },
  {
    type: "collapse",
    name: "Play Around",
    key: "PlayAround",
    icon: <Icon fontSize="small">play_circle_outline</Icon>,
    route: "/PlayAround",
    component: <PlayAround />,
  },
];

export default routes;