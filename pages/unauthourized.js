import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
function Unauthourized() {
  const router = useRouter();
  const { message } = router.query;
  return (
    <Layout title="Unauthourized Page">
      <h1 className="text-xl">Access Denied</h1>
      {message && <div className="mb-4 text-red-500">{message}</div>}
    </Layout>
  );
}

export default Unauthourized;
