import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useReducer } from 'react';

function OrderScreen() {
  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true, error: '' };

      case 'FETCH_SUCCESS':
        return { ...state, loading: false, order: action.payload, error: '' };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
    }
  }
  const { query } = useRouter();
  const orderId = query.id;
  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });
  return <Layout title={`Order ${orderId}`}></Layout>;
}

OrderScreen.auth = true;
export default OrderScreen;
