import React from 'react'
import { Link } from 'react-router-dom'
import FormAsk from '../Part/Form/FormAsk'
import FormContact from '../Part/Form/FormContact'
import FormFamily from '../Part/Form/FormFamily'

export default function Survey() {
  return (
     <section>
        <div className="bg-light bg-gradient p-4">
            <div className="container">
                <FormContact/>
                <FormFamily/>
                <FormAsk/>
            </div>
            <div>
              <Link to="">
                <butoon className="btn btn-primary py-2 px-4 mt-5">
                  Next
                </butoon>
              </Link>
            </div>
        </div>
    </section>

  )
}
