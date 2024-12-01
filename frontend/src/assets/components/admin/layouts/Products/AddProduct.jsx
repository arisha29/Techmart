import "../admin.css";

const AddProduct = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/*breadcrumb*/}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Products</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li>Add New Products</li>
              </ol>
            </nav>
          </div>
          {/* <div className="ms-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">
                Settings
              </button>
              <button
                type="button"
                className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                <a className="dropdown-item" href="javascript:;">
                  Action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Another action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="javascript:;">
                  Separated link
                </a>
              </div>
            </div>
          </div> */}
        </div>
        {/*end breadcrumb*/}

        <div className="card">
          <div className="card-body p-4">
            <h5 className="card-title">Add New Product</h5>
            <hr />
            <div className="form-body mt-4">
              <div className="row">
                <div className="col-lg-8">
                  <div className="border border-3 p-4 rounded">
                    <div className="mb-3">
                      <label htmlFor="inputProductTitle" className="form-label">
                        Product Title
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputProductTitle"
                        placeholder="Enter product title"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="inputProductDescription"
                        className="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="inputProductDescription"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="inputProductDescription"
                        className="form-label"
                      >
                        Product Images
                      </label>
                      <input
                        id="image-uploadify"
                        type="file"
                        accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                        multiple
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="border border-3 p-4 rounded">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="inputPrice" className="form-label">
                          Price
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputPrice"
                          placeholder="00.00"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="inputCompareatprice"
                          className="form-label"
                        >
                          Compare at Price
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputCompareatprice"
                          placeholder="00.00"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="inputCostPerPrice"
                          className="form-label"
                        >
                          Cost Per Price
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputCostPerPrice"
                          placeholder="00.00"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputStarPoints" className="form-label">
                          Star Points
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputStarPoints"
                          placeholder="00.00"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputProductType"
                          className="form-label"
                        >
                          Product Type
                        </label>
                        <select className="form-select" id="inputProductType">
                          <option></option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputVendor" className="form-label">
                          Vendor
                        </label>
                        <select className="form-select" id="inputVendor">
                          <option></option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputCollection" className="form-label">
                          Collection
                        </label>
                        <select className="form-select" id="inputCollection">
                          <option></option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputProductTags"
                          className="form-label"
                        >
                          Product Tags
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputProductTags"
                          placeholder="Enter Product Tags"
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button type="button" className="btn btn-primary">
                            Save Product
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end row*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
