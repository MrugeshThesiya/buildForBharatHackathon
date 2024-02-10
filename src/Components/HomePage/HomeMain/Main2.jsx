import React from 'react'
import "../HomeMain/Main2.css"
function Main2() {
  return (
    <>
    <div className="container">
        <div className="content">
            <div className="row">
                <div className="title">
                    <h4 style={{paddingBottom: "0.5em"}}>Note:</h4>
                    <h5>{"1) This is a proof of concept website :"}</h5>
                    <p style={{paddingBottom: "40px",textAlign:"center",padding:"2rem",paddingTop:"0"}}>This website serves as our Minimum Viable Product (MVP), offering a glimpse into our broader vision and capabilities. While our ultimate idea encompasses a wider scope, we believe it's crucial to present what we've developed thus far. By showcasing this MVP, we aim to gather feedback, iterate, and continually enhance our offerings to align with our overarching goals. Every feature and functionality presented here represents a step forward in realizing our vision, and we're committed to evolving and expanding to fulfill our complete potential.</p>
                </div>
            </div>
                <div className="img lg:hidden">
                </div>
        </div>
        
    </div>
    </>
  )
}

export default Main2