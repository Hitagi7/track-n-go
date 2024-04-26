import React from 'react'
import './ParcelTrackerBody.css'

function ParcelTrackerBody() {
  return (
    <div className="ParcelTrackerBody">
      <div className="frame1">
        <div className="city">
          <p className="font-24 font-bold">VALENZUELA CITY</p>
          <img src="/src/assets/icons/icon-arrow-right.svg" alt="Arrow" />
          <p className="font-24 font-bold">TOLEDO CITY</p>
        </div>
        <div className="refNumber">SPEPH043036716934</div>
      </div>
      <div className="frame2">
        <div className="order">
          <img src="/src/assets/icons/circle-active-order-created.svg" alt="circle-active-order-created" className='iconstatus'/>
          <p className='active'>Order Created</p>
        </div>
        <hr className="line-status-active" />
        <div className="pickup">
        <img src="/src/assets/icons/circle-active-picked-up.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='active'>Picked Up</p>
        </div>
        <hr className="line-status-active" />
        <div className="sorting">
        <img src="/src/assets/icons/circle-active-sorting.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='active'>Sorting</p>
        </div>
        <hr className="line-status-idle" />
        <div className="courier">
        <img src="/src/assets/icons/circle-idle-courier-delivery.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='idle'>Courier Delivery</p>
        </div>
        <hr className="line-status-idle" />
        <div className="delivered">
        <img src="/src/assets/icons/circle-idle-delivered.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='idle'>Delivered</p>
        </div>
      </div>
    </div>
  );
}

export default ParcelTrackerBody