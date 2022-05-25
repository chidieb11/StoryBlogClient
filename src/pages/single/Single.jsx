import React from "react";
import "./single.css";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
    return (
       <>
           <Navbar/>
           <div className="singleContainer">
               <div className="singleCard">
                   <img
                       src="https://res.cloudinary.com/practicaldev/image/fetch/s--HrLzKNoY--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7s4xd1a15fs8m6dlngfn.jpg"
                       alt="" className="singleImg"/>

                   <div className="singleDetails">
                       <div className="singleElem">
                           <div className="singleName">
                               <span className="name">Shaheed Nasser</span>
                               <span className="datePosted">Posted on May 23</span>
                           </div>
                           <div className="singleBtn">
                               <button className="editBtn">edit</button>
                               <button className="deleteBtn">delete</button>
                           </div>
                       </div>
                       <div className="singleTitle">
                           <h2>Which Frontend Framework Would You Use For an Ecommerce Storefront? </h2>
                           <p className="singlePara">
                               Medusa provides 2 starter storefronts for your headless commerce platform, one using
                               Next.js and one using Gatsby. These 2 frameworks not only provide a good developer
                               experience, but they also allow you to create fast ecommerce storefronts. This provides
                               users with a good experience when using an online store.

                               In addition, as Medusa is a headless commerce platform, developers can create a custom
                               storefront with any frontend framework of their choice. They just need to interact with
                               the REST APIs.

                               If you were to create an ecommerce storefront and had full freedom to choose which
                               frontend framework to use for the storefront, which would you pick and why?
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       </>
    );
};

export default Single;
