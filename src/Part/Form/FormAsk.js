import React from 'react'

export default function FormAsk() {
  return (
    <section>
        <div className="form bg-white mt-5 p-5 text-start">
            <h4 className="">Question</h4>
            <div className="row justify-content">
            <label className="form-label mt-3.">Are there a lot of mosquitoes in your house?</label>
                <div className="row">
                    <div className="col-lg-12">  
                        <div className="row">
                            <input className="form-control" id="exampleDataList" placeholder="Example : Yes/No"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content">
            <label className="form-label mt-3">Is there a lot of standing water around the house?</label>
                <div className="row">
                    <div className="col-lg-12">  
                        <div className="row">
                            <input className="form-control" id="exampleDataList" placeholder="Example: None/There are few/There are many"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content">
            <label className="form-label mt-3">Does anyone in your family have dengue fever?</label>
                <div className="row">
                    <div className="col-lg-12">  
                        <div className="row">
                            <input className="form-control" id="exampleDataList" placeholder="Example : Yes/No"/>
                        </div>
                    </div>
                </div>
            </div>
            <label className="form-label mt-3">If so, who in your family has dengue fever?</label>
            <div className="col-lg-3">
                <div class="dropdown">
                    <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Age Group
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item">Baby</a></li>
                        <li><a className="dropdown-item">Pra-school</a></li>
                        <li><a className="dropdown-item">School</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 mt-3">
                <div class="dropdown">
                    <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Age Group
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item">Baby</a></li>
                        <li><a className="dropdown-item">Pra-school</a></li>
                        <li><a className="dropdown-item">School</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 mt-3">
                <div class="dropdown">
                    <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Age Group
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item">Baby</a></li>
                        <li><a className="dropdown-item">Pra-school</a></li>
                        <li><a className="dropdown-item">School</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 mt-3">
                <div class="dropdown">
                    <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Age Group
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item">Baby</a></li>
                        <li><a className="dropdown-item">Pra-school</a></li>
                        <li><a className="dropdown-item">School</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 mt-3">
                <div class="dropdown">
                    <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Age Group
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="dropdown-item">Baby</a></li>
                        <li><a className="dropdown-item">Pra-school</a></li>
                        <li><a className="dropdown-item">School</a></li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content">
            <label className="form-label mt-3">Currently, how is the health status of your family suffering from dengue fever?</label>
                <div className="row">
                    <div className="col-lg-12">  
                        <div className="row">
                            <input className="form-control" id="exampleDataList" placeholder="Example: Sick/Healed/Died"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
