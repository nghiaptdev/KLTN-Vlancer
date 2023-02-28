import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const ListJobsOnlinePage = lazy(() => import("../pages/list-jobs-online-page"));
const JobDetailPage = lazy(() => import("../pages/job-detail-page"));

export const RouteListJobsOnlinePage = {
  Jobs_Online_ROUTE: "/jobs-online",
  Job_Detail_ROUTE: "/job-detail",
};

export const routeListJobsOnlinePage: RouteObject[] = [
  {
    path: "/jobs-online",
    element: <ListJobsOnlinePage />,
  },
  {
    path: "/job-detail",
    element: <JobDetailPage />,
  },
];
