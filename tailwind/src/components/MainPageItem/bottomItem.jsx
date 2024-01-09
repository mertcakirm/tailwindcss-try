import React, { Component } from "react";
import Data from "../datam/data";

const BottomItem = () => {
  const datalar = Data();
  const item = datalar.bottomItems;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex-wrap">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Keşfin Ötesinde: Bilgiye Giden Yolda Araştırmanın Gücü
              </h1>
              <div className="h-1 w-40 bg-gray-800 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              "Araştırmak, bilgiye giden yolda atılan adımların ışığıdır.
              Bilinmeyeni keşfetmek için yapılan her soru, öğrenmenin bir
              kapısını aralar. Bu kapıyı aralamak, sadece bilgiye değil, aynı
              zamanda kendi potansiyelimize ve anlayışımıza ulaşmamıza da olanak
              tanır.Unutmayalım ki , araştırmak sadece bilgi kazanmanın bir
              aracı değil, aynı zamanda bilinmeyenle dostluk kurmanın bir yolu
              ve bilgelik yolculuğumuzun güçlü bir temelidir."
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {item.map((urun) => (
              <div key={urun.id} className="xl:w-1/4 md:w-1/2 p-4 ">
                <a href={urun.link} target="_blank">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={urun.photo}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {urun.subtitle}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4 hover:text-blue-500">
                      {urun.title}
                    </h2>
                    <p className="leading-relaxed text-base max-h-20 overflow-hidden">{urun.comment}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BottomItem;
