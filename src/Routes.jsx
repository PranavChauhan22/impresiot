import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UploadCoursePageThree = React.lazy(() =>
  import("pages/UploadCoursePageThree"),
);
const UploadCoursePageTwo = React.lazy(() =>
  import("pages/UploadCoursePageTwo"),
);
const UploadCoursePageOne = React.lazy(() =>
  import("pages/UploadCoursePageOne"),
);
const CreateAccount = React.lazy(() => import("pages/CreateAccount"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const SettingsExpandedOne = React.lazy(() =>
  import("pages/SettingsExpandedOne"),
);
const SchedulePage1Whenthereissomethingscheduled = React.lazy(() =>
  import("pages/SchedulePage1Whenthereissomethingscheduled"),
);
const UploadCoursePageEleven = React.lazy(() =>
  import("pages/UploadCoursePageEleven"),
);
const UploadCoursePageTwelve = React.lazy(() =>
  import("pages/UploadCoursePageTwelve"),
);
const SchedulePageFour = React.lazy(() => import("pages/SchedulePageFour"));
const SchedulePage1WhenthereissomethingscheduledTwo = React.lazy(() =>
  import("pages/SchedulePage1WhenthereissomethingscheduledTwo"),
);
const AnalyticsWhenNodataAvailableOne = React.lazy(() =>
  import("pages/AnalyticsWhenNodataAvailableOne"),
);
const UploadCoursePageTen = React.lazy(() =>
  import("pages/UploadCoursePageTen"),
);
const UploadCoursePageNine = React.lazy(() =>
  import("pages/UploadCoursePageNine"),
);
const UploadCoursePageSeven = React.lazy(() =>
  import("pages/UploadCoursePageSeven"),
);
const Dashboard0whenNodataAvailableOne = React.lazy(() =>
  import("pages/Dashboard0whenNodataAvailableOne"),
);
const AnalyticsOne = React.lazy(() => import("pages/AnalyticsOne"));
const Live = React.lazy(() => import("pages/Live"));
const HomeExpandedOne = React.lazy(() => import("pages/HomeExpandedOne"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const HomeExpanded = React.lazy(() => import("pages/HomeExpanded"));
const SettingsExpanded = React.lazy(() => import("pages/SettingsExpanded"));
const ProfileOne = React.lazy(() => import("pages/ProfileOne"));
const ProfileTwo = React.lazy(() => import("pages/ProfileTwo"));
const UploadThankyouPage = React.lazy(() => import("pages/UploadThankyouPage"));
const Workshops = React.lazy(() => import("pages/Workshops"));
const SchedulePageThree = React.lazy(() => import("pages/SchedulePageThree"));
const SchedulePageTwo = React.lazy(() => import("pages/SchedulePageTwo"));
const SchedulePage1WhenthereissomethingscheduledOne = React.lazy(() =>
  import("pages/SchedulePage1WhenthereissomethingscheduledOne"),
);
const SchedulePage0Whenthereisnothingscheduled = React.lazy(() =>
  import("pages/SchedulePage0Whenthereisnothingscheduled"),
);
const Analytics = React.lazy(() => import("pages/Analytics"));
const AnalyticsWhenNodataAvailable = React.lazy(() =>
  import("pages/AnalyticsWhenNodataAvailable"),
);
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const Dashboard0whenNodataAvailable = React.lazy(() =>
  import("pages/Dashboard0whenNodataAvailable"),
);
const HomeWithWorkshopWidget = React.lazy(() =>
  import("pages/HomeWithWorkshopWidget"),
);
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopNine />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/homewithworkshopwidget"
            element={<HomeWithWorkshopWidget />}
          />
          <Route
            path="/dashboard0whennodataavailable"
            element={<Dashboard0whenNodataAvailable />}
          />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route
            path="/analyticswhennodataavailable"
            element={<AnalyticsWhenNodataAvailable />}
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route
            path="/schedulepage0whenthereisnothingscheduled"
            element={<SchedulePage0Whenthereisnothingscheduled />}
          />
          <Route
            path="/schedulepage1whenthereissomethingscheduledone"
            element={<SchedulePage1WhenthereissomethingscheduledOne />}
          />
          <Route path="/schedulepagetwo" element={<SchedulePageTwo />} />
          <Route path="/schedulepagethree" element={<SchedulePageThree />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/uploadthankyoupage" element={<UploadThankyouPage />} />
          <Route path="/profiletwo" element={<ProfileTwo />} />
          <Route path="/profileone" element={<ProfileOne />} />
          <Route path="/settingsexpanded" element={<SettingsExpanded />} />
          <Route path="/homeexpanded" element={<HomeExpanded />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/homeexpandedone" element={<HomeExpandedOne />} />
          <Route path="/live" element={<Live />} />
          <Route path="/analyticsone" element={<AnalyticsOne />} />
          <Route
            path="/dashboard0whennodataavailableone"
            element={<Dashboard0whenNodataAvailableOne />}
          />
          <Route
            path="/uploadcoursepageseven"
            element={<UploadCoursePageSeven />}
          />
          <Route
            path="/uploadcoursepagenine"
            element={<UploadCoursePageNine />}
          />
          <Route
            path="/uploadcoursepageten"
            element={<UploadCoursePageTen />}
          />
          <Route
            path="/analyticswhennodataavailableone"
            element={<AnalyticsWhenNodataAvailableOne />}
          />
          <Route
            path="/schedulepage1whenthereissomethingscheduledtwo"
            element={<SchedulePage1WhenthereissomethingscheduledTwo />}
          />
          <Route path="/schedulepagefour" element={<SchedulePageFour />} />
          <Route
            path="/uploadcoursepagetwelve"
            element={<UploadCoursePageTwelve />}
          />
          <Route
            path="/uploadcoursepageeleven"
            element={<UploadCoursePageEleven />}
          />
          <Route
            path="/schedulepage1whenthereissomethingscheduled"
            element={<SchedulePage1Whenthereissomethingscheduled />}
          />
          <Route
            path="/settingsexpandedone"
            element={<SettingsExpandedOne />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route
            path="/uploadcoursepageone"
            element={<UploadCoursePageOne />}
          />
          <Route
            path="/uploadcoursepagetwo"
            element={<UploadCoursePageTwo />}
          />
          <Route
            path="/uploadcoursepagethree"
            element={<UploadCoursePageThree />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
