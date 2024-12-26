import { Button, Form, Input } from "antd";
// import { useContextGet } from "../context/ContextApi";
import { serverApi } from "../context/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  // const { setUser } = useContextGet();
  const DataFinish = async (value) => {
    try {
      const response = await serverApi("auth/register", "POST", value);
      console.log(response);
      if (response) {
        navigate("/login");
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
          name="name"
          label="Username"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Please input your email!" }]}
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
