import React, { Component } from "react";
import './Health.css';

class Health extends Component{
   render(){
      return(
         <div className="container-fluid p-4 m-0 bg-light containt">
            <div className="mb-4 row justify-content-between">
               <div className="bg-white col-xl-5 col-lg-5 col-sm-8 mb-2 mx-sm-auto col-12 p-2 shadow">
                  <form className="text-center">
                     <legend className="m-1"><bdi>إضافة لقاح وقائي</bdi>  </legend>
                     <div className="row py-2 my-2">
                        <label htmlFor="virus" className="col-sm-3 col-form-label"><bdi> اسم اللقاح</bdi> </label>
                        <div className="col-sm-6">
                           <input type="text" className="form-control text-start bg-light" id="virus"/>
                        </div>
                     </div>

                     <div className="row mb-3">
                     <label htmlFor="date" className="col-sm-3 col-form-label"><bdi> التاريخ</bdi> </label>
                        <div className="col-sm-6">
                           <input type="date" className="form-control text-start bg-light" id="date"/>
                        </div>
                     </div>
                     <button type="submit" className="btn btn-primary col-3 mb-3"><bdi>تأكيد</bdi></button>
                  </form>
               </div>
               <div className="bg-white col-xl-5 col-lg-5 col-sm-8 mx-sm-auto col-12 my-lg-0 p-2 shadow">
               <form className="text-center">
                     <legend className="m-2"><bdi>إضافة حالة مرضية</bdi>  </legend>
                     <div className="row pt-3 pb-1 my-1">
                        <label htmlFor="virus" className="col-sm-3 col-form-label"><span><bdi> رقم البقرة</bdi> </span></label>
                        <div className="col-sm-6">
                           <input type="text" className="form-control text-start bg-light" id="virus"/>
                        </div>
                     </div>

                     <div className="row py-1 my-1">
                        <label htmlFor="virus" className="col-sm-3 col-form-label"><bdi> المرض </bdi> </label>
                        <div className="col-sm-6">
                           <input type="text" className="form-control text-start bg-light" id="virus"/>
                        </div>
                     </div>

                     <div className="row py-1 my-1">
                        <label htmlFor="virus" className="col-sm-3 col-form-label"><bdi> العلاج</bdi> </label>
                        <div className="col-sm-6">
                           <input type="text" className="form-control text-start bg-light" id="virus"/>
                        </div>
                     </div>

                     <div className="row mb-3">
                     <label htmlFor="date" className="col-sm-3 col-form-label"><bdi> التاريخ</bdi> </label>
                        <div className="col-sm-6">
                           <input type="date" className="form-control text-start bg-light" id="date"/>
                        </div>
                     </div>
                     <button type="submit" className="btn btn-primary col-3 mb-3"><bdi>تأكيد</bdi></button>
                  </form>
               </div>
            </div>
            <div className="row p-0 shadow show overflow-auto">
               <table className="table m-0 table-bordered text-center">
                  <thead className="">
                     <tr>
                        <th scope="col"><bdi> رقم البقرة</bdi></th>
                        <th scope="col"><bdi> الجنس</bdi></th>
                        <th scope="col"><bdi> العمر</bdi></th>
                        <th scope="col"><bdi> المرض</bdi></th>
                        <th scope="col"><bdi> العلاج</bdi></th>
                        <th scope="col"><bdi> التاريخ</bdi></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                     </tr>
                  </tbody>
               </table>

            </div>
         </div>
      )
   }
}

export default Health;
