import React from 'react'
import "./Main.css"
function Main() {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/OnePlus12/6thFeb/D108792004_WLD_OnePlus_Waffle_NewLaunch_DesktopTall_Hero_3000x1200_2._CB582192388_.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Noise_vivid2/1500X600_NoiseV1._CB582195929_.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/TECNOPOP8/TECNOPOP8FINAL/D116414744_LAVA_NewLaunch_Yuva3_DesktopTall_Hero_3000x1200_3._CB582139919_.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Main