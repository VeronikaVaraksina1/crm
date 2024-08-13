import React from 'react';
import Header from "@/app/components/header";

export interface PageProps {
  params: { id: string[] };
}

function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
    </>
  );
}

export default Page;