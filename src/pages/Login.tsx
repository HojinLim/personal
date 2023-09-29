import React from "react";
import { useInput } from "../hooks/useInput";
import { Button, Container, TextField, Typography } from "@mui/material";
import { supabase } from "../components/supabase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailInput = useInput("");
  const passwordInput = useInput("");
  const navigate = useNavigate();
  // 로그인
  const signInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    } else {
      alert("로그인 완료!");
      console.log(data.session);
      console.log(data.user);
      localStorage.setItem("user_token", data.session.access_token);
      localStorage.setItem("user_id", data.user.id);
      navigate("/");
    }
  };

  const handleClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = signInWithEmail(emailInput.value, passwordInput.value);
    console.log(result);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        로그인
      </Typography>

      <form>
        <TextField
          label="이메일"
          type="email"
          fullWidth
          margin="normal"
          required
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
        <TextField
          label="비밀번호"
          type="password"
          fullWidth
          margin="normal"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
          required
        />

        <Button
          onClick={handleClicked}
          type="submit"
          variant="contained"
          color="primary"
        >
          로그인
        </Button>
      </form>
    </Container>
  );
};

export default Login;
