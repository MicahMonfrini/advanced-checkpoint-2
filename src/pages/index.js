import React from "react";
import Link from "next/link";

function IndexPage() {
  return (
    <div>
      <h1>
        Hello World
      </h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/books">
        <a>Books</a>
      </Link>
    </div>
  );
}

export default IndexPage;
