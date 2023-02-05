import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../component/Card/index';
import Navbar from '../../component/Navbar/navbar';
import Footer from '../footer';

function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');
  const [hasilFilter, setHasilfilter] = useState([]);

  const getProdutcs = async () => {
    try {
      let response = await axios
        .get(
          'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230205T023834Z&X-Amz-Expires=86400&X-Amz-Signature=0a12ef7d400e4ca565d881a864148461f10e62fbd97155766151e100ec6d783f&X-Amz-SignedHeaders=host&x-id=GetObject'
        )
        .then((e) => {
          setProducts(e.data);
          console.log(response.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlefilter = (e) => {
    const filterData = products.filter((e) => {
      return e.category.toLowerCase().includes(keyword.toLowerCase());
    });
    setHasilfilter(filterData);
  };

  const Datafilter = (hasilFilter) => {
    if (hasilFilter === 0) {
      return 'barang tidak ditemukan';
    } else {
      return hasilFilter + ' Data telah ditemukan';
    }
  };

  useEffect(() => {
    getProdutcs();
  }, []);

  useEffect(() => {
    handlefilter();
  }, [products, keyword]);

  useEffect(() => {
    Datafilter();
  }, [products, hasilFilter]);

  console.log(hasilFilter.length);
  return (
    <>
      <Navbar />
      <section className="Produk" id='product'>
        <div className="max-width">
          <div className="search-content">
            <div className="column left">
              <input className="input" type="text" placeholder="Search Produk" value={search} onChange={(e) => setSearch(e.target.value)} />
              <h2>{Datafilter(hasilFilter.length)}</h2>
            </div>
            <div className="column right">
              <form className="form">
                <select className="select" value={keyword} onChange={(e) => setKeyword(e.target.value)}>
                  <option value="">All</option>
                  <option value="pre-order">Pre-order</option>
                  <option value="ready">Ready</option>
                  <option value="bekas">Barang Bekas</option>
                </select>
              </form>
            </div>
          </div>
          <div className="card-item">
            {hasilFilter
              .filter((products) => (search !== '' ? products.name.toLowerCase().includes(search) : products))
              .map((item) => (
                <Card key={item.id} product={item} />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product;
