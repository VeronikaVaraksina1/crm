import React from 'react';

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Settings page</h1>
    </main>
  );
}

export default Page;