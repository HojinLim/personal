import { Button, Container, TextField, Typography } from "@mui/material";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { useInput } from "../hooks/useInput";
import { supabase } from "../components/supabase";
import { getUserData } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const emailInput = useInput("");
  const passInput = useInput("");
  const checkPassInput = useInput("");
  const navigate = useNavigate();

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (!error) {
      const { data: user } = await supabase.auth.getUser();

      console.log(data);
      const newUser = {
        id: user.user?.id,
        email: user.user?.email,
      };
      const { error } = await supabase.from("users").insert(newUser);
      if (error) {
        console.log(error.message);
      }
      navigate("/");
    }
    {
      console.log(error?.message);
      // supabase.from("users").select("*").eq("id", "hi").single();
    }
  };

  const handleClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signUp(emailInput.value, passInput.value);

    // console.log(supabase.auth);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        회원가입
      </Typography>
      <button
        onClick={() => {
          getUserData;
        }}
      >
        test
      </button>
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
          value={passInput.value}
          onChange={passInput.onChange}
          required
        />
        <TextField
          label="비밀번호 확인"
          type="password"
          fullWidth
          margin="normal"
          value={checkPassInput.value}
          onChange={checkPassInput.onChange}
          required
        />
        <Button
          onClick={handleClicked}
          type="submit"
          variant="contained"
          color="primary"
        >
          가입하기
        </Button>
      </form>
    </Container>
  );
};

export default Register;
