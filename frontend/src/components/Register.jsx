import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Register = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        variant="outlined"
        sx={{
          color: (theme) => theme.palette.info.main,
          marginLeft: 2,
        }}
        onClick={() => loginWithRedirect({ screen_hint: "signup" })} // Redirect to signup screen
      >
        إنشاء حساب
      </Button>
    )
  );
};

export default Register;
