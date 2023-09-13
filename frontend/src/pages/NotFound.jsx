import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", color: "black" }}>404 Error</h1>
      <h2>لا يمكن إيجاد هذه الصفحة</h2>
      <Link to="/">اضغط هنا للذهاب للصفحة الرئيسية</Link>
    </div>
  );
};

export default NotFound;
