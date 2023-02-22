import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import logo from "../../public/Img/logoDTP.png";
// 아이콘
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableViewIcon from "@mui/icons-material/TableView";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const AdminNav = () => {
  const [page, setPage] = useState(false);
  const pageOpenHandler = () => {
    setPage((page) => !page);
  };

  return (
    <UlContainer>
      <li>
        <Link href="/admin" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "1rem" }}>
            <AdminPanelSettingsIcon />
          </div>
          <div style={{ fontSize: "large" }}>DTS Admin</div>
        </Link>
      </li>
      <hr />
      <li>
        <Link href="#" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "1rem" }}>
            <DashboardIcon />
          </div>
          <div style={{ fontSize: "large" }}>Dashboard</div>
        </Link>
      </li>
      <hr />
      <li>
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          onClick={pageOpenHandler}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "1rem" }}>
              <FolderIcon />
            </div>
            <div style={{ fontSize: "large" }}>Pages</div>
          </div>
          <div>▼</div>
        </div>
        {page && (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "1rem" }}>
                <FolderIcon />
              </div>
              <div style={{ fontSize: "large" }}>Pages</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "1rem" }}>
                <FolderIcon />
              </div>
              <div style={{ fontSize: "large" }}>Pages</div>
            </div>
          </>
        )}
      </li>
      <hr />
      <li>
        <Link href="#" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "1rem" }}>
            <ShowChartIcon />
          </div>
          <div style={{ fontSize: "large" }}>Chart</div>
        </Link>
      </li>
      <hr />
      <li>
        <Link href="#" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "1rem" }}>
            <TableViewIcon />
          </div>
          <div style={{ fontSize: "large" }}>Table</div>
        </Link>
      </li>
    </UlContainer>
  );
};

const UlContainer = styled.ul`
  width: 14rem;
  background-color: black;
  flex-direction: column;
`;
export default AdminNav;
