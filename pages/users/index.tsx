import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

interface UserProps {
  map(arg0: (item: any) => JSX.Element): React.ReactNode;
  dataUsers: Array<any>;
}
export default function Users(props: { dataUsers: UserProps }) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <>
      <Layout pageTitle="UserPage">
        {dataUsers.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                router.push(`/users/${item.id}`);
              }}
            >
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          );
        })}
      </Layout>
      ;
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
