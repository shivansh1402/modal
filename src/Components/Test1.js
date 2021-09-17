import React , { Fragment , useState } from 'react'
import Modal from './Modal'

const Test1 = () => {

    const [open , setOpen] = useState(false)

    const openHandler = () => {
          setOpen(!open)
    }

    return (

        <Fragment>

            <button onClick={openHandler}> open modal </button>

        {open && <Modal onClick={openHandler}>
            <p>Recruiting fresh talent to introduce domain expertise as well as address massive vacancies in the civil service has been part of the Modi government’s core agenda. Last year, in its previous tenure, the government had announced that it would recruit domain experts into 10 central ministries at the rank of joint secretary.

                Like the terms of that scheme, the new set of recruits will be appointed for a period of five years — with their appointment to be re-evaluated after three years.

                However, on completion of their service in the government, these lateral recruits would not be required to serve any cooling-off period.

            </p>
        </Modal>}
        </Fragment>
    )
}

export default Test1