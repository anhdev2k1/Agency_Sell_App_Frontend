import { Link } from "react-router-dom";
import { Input, Select } from "antd";
import {
  SearchOutlined,
  ShoppingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import avt from "../../assets/images/avt-user.png";
import "./navbar.scss";
const { Search } = Input;
const Navbar = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__flex">
          <Link to="">
            <h1 className="navbar__logo">LOGO.</h1>
          </Link>
          <div className="navbar__search">
            <Select
              className="search__category"
              defaultValue="quan-ao"
              onChange={handleChange}
              size="large"
              options={[
                {
                  value: "quan-ao",
                  label: "Quần áo",
                },
                {
                  value: "my-pham",
                  label: "Mỹ phẩm",
                },
              ]}
            />
            <Search
              placeholder="Nhập thông tin cần tìm..."
              enterButton={<SearchOutlined />}
              size="large"
              className="search__input"
              height="80px"
            />
          </div>
          <div className="navbar__ultis">
            <ShoppingOutlined
              className="navbar__ultis-bag"
              style={{
                fontSize: "25px",
                paddingRight: "30px",
                cursor: "pointer",
              }}
            />
            <BellOutlined
              className="navbar__ultis-bag"
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </div>
          <div className="navbar__user">
            <div className="navbar__user-avatar">
              <img src={avt} alt="avatar user" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
