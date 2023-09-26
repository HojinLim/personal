import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 로직을 여기에 추가
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        회원가입
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="이메일"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="비밀번호"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="비밀번호 확인"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          가입하기
        </Button>
      </form>
    </Container>
  );
};

export default Register;
