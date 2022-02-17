import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="User Page">
      <h1>User detail pages {id}</h1>
    </Layout>
  );
}
