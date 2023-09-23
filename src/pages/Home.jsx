import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">DesktopNine</Link>
        </li>
        <li>
          <Link to="/homewithworkshopwidget">HomeWithWorkshopWidget</Link>
        </li>
        <li>
          <Link to="/dashboard0whennodataavailable">
            Dashboard0whenNodataAvailable
          </Link>
        </li>
        <li>
          <Link to="/dashboardone">DashboardOne</Link>
        </li>
        <li>
          <Link to="/analyticswhennodataavailable">
            AnalyticsWhenNodataAvailable
          </Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/schedulepage0whenthereisnothingscheduled">
            SchedulePage0Whenthereisnothingscheduled
          </Link>
        </li>
        <li>
          <Link to="/schedulepage1whenthereissomethingscheduledone">
            SchedulePage1WhenthereissomethingscheduledOne
          </Link>
        </li>
        <li>
          <Link to="/schedulepagetwo">SchedulePageTwo</Link>
        </li>
        <li>
          <Link to="/schedulepagethree">SchedulePageThree</Link>
        </li>
        <li>
          <Link to="/workshops">Workshops</Link>
        </li>
        <li>
          <Link to="/uploadthankyoupage">UploadThankyouPage</Link>
        </li>
        <li>
          <Link to="/profiletwo">ProfileTwo</Link>
        </li>
        <li>
          <Link to="/profileone">ProfileOne</Link>
        </li>
        <li>
          <Link to="/settingsexpanded">SettingsExpanded</Link>
        </li>
        <li>
          <Link to="/homeexpanded">HomeExpanded</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/homeexpandedone">HomeExpandedOne</Link>
        </li>
        <li>
          <Link to="/live">Live</Link>
        </li>
        <li>
          <Link to="/analyticsone">AnalyticsOne</Link>
        </li>
        <li>
          <Link to="/dashboard0whennodataavailableone">
            Dashboard0whenNodataAvailableOne
          </Link>
        </li>
        <li>
          <Link to="/uploadcoursepageseven">UploadCoursePageSeven</Link>
        </li>
        <li>
          <Link to="/uploadcoursepagenine">UploadCoursePageNine</Link>
        </li>
        <li>
          <Link to="/uploadcoursepageten">UploadCoursePageTen</Link>
        </li>
        <li>
          <Link to="/analyticswhennodataavailableone">
            AnalyticsWhenNodataAvailableOne
          </Link>
        </li>
        <li>
          <Link to="/schedulepage1whenthereissomethingscheduledtwo">
            SchedulePage1WhenthereissomethingscheduledTwo
          </Link>
        </li>
        <li>
          <Link to="/schedulepagefour">SchedulePageFour</Link>
        </li>
        <li>
          <Link to="/uploadcoursepagetwelve">UploadCoursePageTwelve</Link>
        </li>
        <li>
          <Link to="/uploadcoursepageeleven">UploadCoursePageEleven</Link>
        </li>
        <li>
          <Link to="/schedulepage1whenthereissomethingscheduled">
            SchedulePage1Whenthereissomethingscheduled
          </Link>
        </li>
        <li>
          <Link to="/settingsexpandedone">SettingsExpandedOne</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/createaccount">CreateAccount</Link>
        </li>
        <li>
          <Link to="/uploadcoursepageone">UploadCoursePageOne</Link>
        </li>
        <li>
          <Link to="/uploadcoursepagetwo">UploadCoursePageTwo</Link>
        </li>
        <li>
          <Link to="/uploadcoursepagethree">UploadCoursePageThree</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
