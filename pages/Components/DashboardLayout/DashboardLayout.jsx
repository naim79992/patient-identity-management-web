import { useContext } from "react";
import styles from "./dashboard.module.css";
import { EducationContext } from "@/context/Education";
import Link from "next/link";

function DashboardLayout({ children }) {
  const {  ConnectedAccountUser } = useContext(EducationContext);
  return (
    <>
      <div className="dashboard">
        <div id="mySidenav" className={styles.mySidenav}>
          <nav className={styles.dashboardNav}>
            <div className={styles.sidebarMenu}>
              <ul className={styles.sidebarMenu__list}>
                <li className={styles.sidebarMenu__list__item}>
                  <Link
                    href="/dashboard"
                    className={styles.sidebarMenu__list__item__link}
                  >
                    <p>Dashboard </p>
                  </Link>

                  {/* teacher routes */}
                  {ConnectedAccountUser == 1 && (
                    <>
                      <Link
                        href="/dashboard/teacher-personal-data"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Teacher personal info</p>
                      </Link>
                      <Link
                        href="/dashboard/student-list"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Teacher's student list</p>
                      </Link>
                      <Link
                        href="/dashboard/teacher-file-upload"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>File Upload</p>
                      </Link>
                      <Link
                        href="/dashboard/display-teacher-file"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Student shared File</p>
                      </Link>


                    </>
                  )}

                  {/* student */}
                  {ConnectedAccountUser == 2 && (
                    <>
                      <Link
                        href="/dashboard/student-personal-details"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Student Details</p>
                      </Link>

                      <Link
                        href="/dashboard/student-file-upload"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>File Upload</p>
                      </Link>
                      <Link
                        href="/dashboard/student/AddPersonalData"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Add Task List</p>
                      </Link>
                      <Link
                        href="/dashboard/student/ViewPersonalData"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>View Task List</p>
                      </Link>
                      <Link
                        href="/dashboard/student/StudentPersonaTeacherList"
                        className={styles.sidebarMenu__list__item__link}
                      >
                        <p>Student Personal Teacher</p>
                      </Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.content} id="dashboard-container__main">
          {children}
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
