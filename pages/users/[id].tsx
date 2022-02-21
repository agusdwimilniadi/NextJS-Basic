import { useRouter } from "next/router";
import Layout from "../../components/Layout";
interface UserDetailsProps {
  user: Object;
}
export default function Detail(props: UserDetailsProps) {
  const router = useRouter();
  const { user } = props;
  return (
    <Layout pageTitle="User Page">
      <p>Nama : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>Website : {user.website}</p>
    </Layout>
  );
}

export async function getStaticPath() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((item: { id: any }) => ({
    params: {
      id: `${item.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { id: { id: string } };
}) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user: user,
    },
  };
}
