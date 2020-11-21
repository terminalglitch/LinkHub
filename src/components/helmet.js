import React from "react";
import data from "../metadata.json";
import Helmet from "react-helmet";

export default function helmet() {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={data.description} />
      <title>{data.title}</title>
      <html lang="en" />
      <meta itemprop="name" content={data.author} />
      <meta itemprop="description" content={data.description} />
    </Helmet>
  );
}
