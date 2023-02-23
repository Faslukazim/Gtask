import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function AddData() {
  const [data, setdata] = useState({});
  const [alldata, setAlldata] = useState(JSON.parse(localStorage.getItem('serverData')) || [{ student: 'Abid', mark: 80, attendance: 90 }, { student: 'John', mark: 70, attendance: 80 }, { student: 'Sanal', mark: 60, attendance: 70 }, { student: 'Anamika', mark: 50, attendance: 60 }]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("hii");
    setAlldata([...alldata,{...data}])  
  
  };
  useEffect(()=>{
    localStorage.setItem('serverData', JSON.stringify(alldata));
    
  },[alldata])

  return (
    <>
      <Navbar />
      <div className="container formContainer p-5 w-50">
        <div className="row">
          <div className="col-sm-12 text-white fs-5">
            <div className="title text-center fs-3">
              <span className=''>ADD DATA</span>
            </div>
            <form encType='multipart/form-data' onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Student
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) => { setdata({ ...data, student: e.target.value }) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mark
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) => { setdata({ ...data, mark: e.target.value }) }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Attendance
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder=''
                  onChange={(e) => { setdata({ ...data, attendance: e.target.value }) }}
                />
              </div>
              <div className="subBtn d-flex justify-content-center">
                <button type="submit" className="btn mt-3 w-100 submitBtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
