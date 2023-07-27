import Staff from "../../home/footer/staff/Staff"
import React from 'react'
import Dining from "./dining/Dining"

const FooterRender = () => {
  return (
    <div className="flex">
        <Staff/>
        <Dining/>
    </div>
  )
}

export default FooterRender