'use client'

import React from 'react';
import Button from "@/app/components/button";

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <>
      <div>{`Something went wrong. ${error.message}`}</div>
      <Button onClick={() => reset()}>Try again</Button>
    </>
  );
}
