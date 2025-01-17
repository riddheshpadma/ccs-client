import React from 'react'
import HeroSec from '../../template/HeroSec'
import ContactUs from '../../components/ContactUs'

const index = () => {
    return (
        <div>
            <section>
                <HeroSec head="Contact Us" subhead="Let’s build something amazing together." />
            </section>
            <section>
                <ContactUs />
            </section>
        </div>
    )
}

export default index