import React from 'react'

export default function FormContact() {
  return (
        <div className="form bg-white mt-5 p-5 text-start">
            <h4 className="">Contact Information (According to KTP)</h4>
            <div className="row justify-content">
                <div className="col-lg-6">
                    <div className="row mt-3">
                        <label className="form-label">Full Name</label>
                        <input className="form-control" id="exampleDataList" placeholder="Write Your Name"/>
                    </div>
                    <div className="row mt-3">
                        <label className="form-label">Date of Birth</label>
                        <input className="form-control" id="exampleDataList" placeholder="dd/mm/yy"/>
                    </div>
                    <div className="row mt-3">
                        <label className="form-label">Status</label>
                        <input className="form-control" id="exampleDataList" placeholder="Example: Not Married"/>
                    </div>
                    <div className="row mt-3">
                        <label className="form-label">Province</label>
                        <input className="form-control" id="exampleDataList" placeholder="Example: CENTRAL JAVA"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="mt-3">
                            <label className="form-label">Gender</label>
                            <div className="d-flex mb-3">
                                <div className="form-check mx-3">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Men
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Women
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <label className="form-label">Age</label>
                            <input className="form-control" id="exampleDataList" placeholder="Example: 19"/>
                        </div>
                        <div className="row mt-3">
                            <label className="form-label">Subdistrict</label>
                            <input className="form-control" id="exampleDataList" placeholder="Example: SOKARAJA"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
