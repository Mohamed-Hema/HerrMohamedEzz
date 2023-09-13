import { Button } from "@mui/material";

const Login = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: (theme) => theme.palette.info.main,
        marginLeft: 2,
      }}
    >
      تسجيل الدخول
    </Button>
  );
};

export default Login;
