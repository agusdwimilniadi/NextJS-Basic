import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <>
      <div className="container-404">
        <h2>Opps Halaman Gaada </h2>
        <h1>404 </h1>
      </div>
    </>
  );
}
