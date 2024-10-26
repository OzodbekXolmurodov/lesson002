import React from "react";
import "./Prodacts.scss";
import rasim from "../../assets/Frame 5.svg";
import rasim2 from "../../assets/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO-removebg-preview1.svg";

const PRODACTS = [
  {
    id: 1,
    tatle: "salom dunyo",
    proce: 1222,
    delProsce: 1221,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F307706110166322%2Fposts%2Fyangi-erkaklar-soatlari-eng-yaxshi-hashamatli-brend-moda-avtomatik-mexanik-soatl%2F451148465822085%2F&psig=AOvVaw1Tn3rRtSGyF6PPYbt0HgbC&ust=1730029290151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD-07z7q4kDFQAAAAAdAAAAABAE",
  },
  {
    id: 1,
    tatle: "Maska",
    proce: 192,
    delProsce: 101,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftovar.uz%2Fuz%2Fproduct%2F94367&psig=AOvVaw1Tn3rRtSGyF6PPYbt0HgbC&ust=1730029290151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD-07z7q4kDFQAAAAAdAAAAABAJ",
  },
  {
    id: 1,
    tatle: "Maska",
    proce: 192,
    delProsce: 101,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftovar.uz%2Fuz%2Fproduct%2F94367&psig=AOvVaw1Tn3rRtSGyF6PPYbt0HgbC&ust=1730029290151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD-07z7q4kDFQAAAAAdAAAAABAJ",
  },
  ,
  {
    id: 1,
    tatle: "Maska",
    proce: 192,
    delProsce: 101,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftovar.uz%2Fuz%2Fproduct%2F94367&psig=AOvVaw1Tn3rRtSGyF6PPYbt0HgbC&ust=1730029290151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD-07z7q4kDFQAAAAAdAAAAABAJ",
  },
  ,
  {
    id: 1,
    tatle: "Maska",
    proce: 192,
    delProsce: 101,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftovar.uz%2Fuz%2Fproduct%2F94367&psig=AOvVaw1Tn3rRtSGyF6PPYbt0HgbC&ust=1730029290151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD-07z7q4kDFQAAAAAdAAAAABAJ",
  },
  ,
  {
    id: 1,
    tatle: "Maska",
    proce: 192,
    delProsce: 101,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftovar.uz%2Fuz%2Fproduct%2F94367&psig=AOvVaw1Tn3rRtSGyF6PPYbt0HgbC&ust=1730029290151000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD-07z7q4kDFQAAAAAdAAAAABAJ",
  },
];

const Prodacts = () => {
  return (
    <>
      <div className="prodacts conteaner">
        <p className="prodacts__p-text">Find your favourite smart watch.</p>
        <h2 className="prodacts__h2-1">Our Latest Products</h2>
        <div className="prodacts__div">
          {PRODACTS?.map((prod, inx) => (
            <div key={inx} className="prodacts__pro">
              <div className="prodacts__img-div">
                <img className="prodacts__img" src={rasim2} alt="" />
              </div>
              <div>
                <h2 className="prodacts__h2">{prod.tatle}</h2>
                <img className="prodacts__img-2" src={rasim} alt="" />
                <div className="prodacts__div-samll">
                  <p className="prodacts__del">
                    <del>${prod.delProsce}</del>
                  </p>
                  <p className="prodacts__prac">${prod.proce}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prodacts;
