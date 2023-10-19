import React, { useEffect, useState } from 'react';

function UserProfile({ chi }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(chi);
  }, [chi]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
  return (
    <div className="container-fluid content-inner pb-0">
      <div>
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h5 className="card-title">{formData?.firstname + ' ' + formData?.lastname}</h5>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <div className="profile-img-edit position-relative">
                      <img
                        className="img-fluid avatar avatar-100 avatar-rounded"
                        src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                        alt="profile-pic"
                      />
                      <div className="upload-icone bg-primary">
                        <svg className="upload-button" width="14" height="14" viewBox="0 0 24 24">
                          <path
                            fill="#ffffff"
                            d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                          />
                        </svg>
                        <input className="file-upload" type="file" accept="image/*" />
                      </div>
                    </div>
                    <div className="img-extension mt-3">
                      <div className="d-inline-block row g-1 align-items-center">
                        <span>Only</span>
                        <a className="text-primary" href={() => {}}>
                          .jpg
                        </a>
                        <a className="text-primary" href={() => {}}>
                          .png
                        </a>
                        <a className="text-primary" href={() => {}}>
                          .jpeg
                        </a>
                        <span>allowed</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <small className="form-label">{chi?.phone}</small>
                    </div>

                    <div className="row">
                      <small className="form-label">{chi?.all_switch} Switches</small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <div className="justify-content-between d-flex w-100 col">
                  <h4 className="card-title">Profile Information</h4>
                  <button className="btn btn-primary">Block User</button>
                </div>
              </div>
              <div className="card-body">
                <div className="new-user-info">
                  <form>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label className="form-label" htmlFor="fname">
                          First Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          value={formData?.firstname}
                          onChange={handleChange}
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label" htmlFor="lname">
                          Last Name:
                        </label>
                        <input
                          value={formData?.lastname}
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          id="lastname"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label" htmlFor="add1">
                          Phone
                        </label>
                        <input
                          value={formData?.phone}
                          onChange={handleChange}
                          type="phone"
                          className="form-control"
                          id="add1"
                          placeholder="Street Address 1"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label" htmlFor="add2">
                          Street Address 2:
                        </label>
                        <input type="text" className="form-control" id="add2" placeholder="Street Address 2" />
                      </div>
                      <div className="form-group col-md-12">
                        <label className="form-label" htmlFor="cname">
                          State:
                        </label>
                        <input
                          value={formData?.state}
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    {/* <hr /> */}
                    {/* <h5 className="mb-3">Security</h5>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label className="form-label" htmlFor="uname">
                          User Name:
                        </label>
                        <input type="text" className="form-control" id="uname" placeholder="User Name" />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label" htmlFor="pass">
                          Password:
                        </label>
                        <input type="password" className="form-control" id="pass" placeholder="Password" />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label" htmlFor="rpass">
                          Repeat Password:
                        </label>
                        <input type="password" className="form-control" id="rpass" placeholder="Repeat Password " />
                      </div>
                    </div>
                    <div className="checkbox">
                      <label className="form-label">
                        <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked" />
                        Enable Two-Factor-Authentication
                      </label>
                    </div>
  */}
                    <button type="submit" className="btn btn-primary">
                      Update Information
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
