
import CreatePostForm from "../components/createPostForm";
import Layout from "../components/layout";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import CreateAccountPrompt from "../components/createAccountPrompt";

export default function CreatePost() {


  
  return (
    <>
      <Layout>
        <CreateAccountPrompt />
        <LoginForm />
        <RegisterForm />
        <CreatePostForm />
      </Layout>
    </>
  );
}
