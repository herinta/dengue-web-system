import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section>
        <img src="/img/hero.jpeg" alt="backround" className="d-block w-100 img-fluid"/>
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="d-flex text-light">
                <b className="fs-1 p-4">Dengue Fever Web Clustering System</b>
            </div>
            <div className="d-flex mb-4">
                <button type="button" className="btn btn-primary mx-auto">Survey Responden</button>
            </div>
            <div className="dropdown-center d-flex flex-column mx-auto">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pilih Kabupaten yang akan dianalisis
                </button>
                <ul className="dropdown-menu">
                
                <li>
                    <Link to="/" className="dropdown-item">
                       Semarang
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    </section>
  )
}