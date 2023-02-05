import ReactReadMoreReadLess from 'react-read-more-read-less';

function Index({ product }) {
  function convertToRupiah(price) {
    return 'Rp. ' + price.toLocaleString('id-ID');
  }
  return (
    <div class="card">
      <div class="card-image">
        <img src={product.image} alt="..." />
      </div>
      <div class="card-content">
        <h3>{product.name}</h3>
        <p>
          <ReactReadMoreReadLess readMoreClassname="readMoreClassname" charLimit={20} readMoreText={''} readLessText={'Read less ▲'}>
            {product.description}
          </ReactReadMoreReadLess>
        </p>
        <h3>{convertToRupiah(product.price)}</h3>
      </div>
    </div>
  );
}

export default Index;
