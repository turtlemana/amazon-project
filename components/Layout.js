import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Amazon' : 'Amazon'}</title>
        <meta name="description" content="Global Ecommerce for everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              amazon
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright 2022 Amazon</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
