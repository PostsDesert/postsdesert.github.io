import React from "react";

// pages/_404/[...path].tsx
// renders nada
export const Custom404 = () => <div></div>;

export const getServerSideProps = () => {
  return { redirect: { destination: "/", permanent: false } }; 
};

export default Custom404;