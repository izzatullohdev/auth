import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { serverApi } from "../context/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const DataFinish = async (value) => {
    try {
      const response = await serverApi("auth/login", "POST", value);
      if (response) {
        login(response.token); // Context orqali tokenni yangilash
        navigate("/home");
      } else {
        console.warn("Foydalanuvchi ma'lumotlari topilmadi.");
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className=" flex items-center justify-center h-[50vh]">
      <Form
        className="w-[50%] bg-slate-200 p-5 rounded-md"
        onFinish={DataFinish}
      >
        <Form.Item
          name="email"
          label="Email"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
