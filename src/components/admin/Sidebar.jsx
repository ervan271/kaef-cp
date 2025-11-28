import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column vh-100"
      style={{ width: "250px", backgroundColor: "#0b0242ff" }}
    >
      {/* Brand */}
      <NavLink
        to="/admin"
        className="mb-3 text-white d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
      >
        <i className="bi bi-box-seam fs-4 me-2"></i>
        <span className="fs-4">Admin Panel</span>
      </NavLink>

      <hr />

      {/* Navigation Menu */}
      <ul className="mb-auto nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-house me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-people me-2"></i>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-box me-2"></i>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-cart me-2"></i>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-person-raised-hand me-2"></i>
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-file-person me-2"></i>
            Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-bank me-2"></i>
            Unit Kerja
          </NavLink>
        </li>

        <li className="nav-item">
          <a
            className="nav-link text-white d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#masterDataMenu"
            role="button"
            aria-expanded="false"
          >
            <span>
              <i className="bi bi-database me-2"></i> Master Obat
            </span>
            <i className="bi bi-chevron-down"></i>
          </a>

          <ul className="collapse nav flex-column" id="masterDataMenu">
            <li>
              <NavLink
                to="/admin/master/obat"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
              >
                Detil Obat
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/master/obat"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
              >
                Kategori Obat
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/master/kategori"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
              >
                Golongan Obat
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/master/bentuk-sediaan"
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
              >
                Bentuk Sediaan
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-gear me-2"></i>
            Settings
          </NavLink>
        </li>
      </ul>

      <hr />
    </div>
  );
};

export default Sidebar;
