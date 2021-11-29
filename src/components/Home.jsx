import React from "react";
import './App.css';

function Home() {
  return (
    <body>
        <div className="container align-items-center">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img alt="Featured" class="shadow_image" style={{borderRadius:'20px'}} src="https://media.istockphoto.com/vectors/barcode-sticker-set-vector-vector-id537640146"/>
            </div>
            <div className="col-lg-5" style={{color:'black'}}>
              <h1 className="font-weight-light">Home</h1>
              <p>
                    This is a product barcode validation platform that uses Ethereum Blockchain to register every product as an NFT to ensure the validity of products
              </p>
            </div>
          </div>
        </div>
    </body>
  );
}

export default Home;