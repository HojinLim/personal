import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../components/supabase";
import { useNavigate } from "react-router-dom";

// 현재 유저 정보 확인
const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    return user;
  }
};

async function getUserData(id: string) {
  const data = await supabase.from("users").select("*").eq("id", id).single();
  console.log(data);
}

export { getUser, getUserData };
