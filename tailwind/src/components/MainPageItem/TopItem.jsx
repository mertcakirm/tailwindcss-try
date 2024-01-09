import React, { Component } from "react";

const TopItem = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-1 py-20 mx-auto">
          <div className="flex flex-wrap mb-10 text-center border-2 border-slate-950 rounded-3xl shadow-2xl">
            <h1 className="container title-font text-2xl font-medium text-gray-900 mt-6  ">TREND KONULAR</h1>
            <div className="sm:w-1/2 mb-10 px-4 h-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full mt-9"
                  src="https://www.ozeldersimiz.com.tr/wp-content/uploads/2015/06/verimli-ders-%C3%A7al%C4%B1%C5%9Fma.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Nasıl Etkili Çalışılır?
              </h2>
              <div className="bg-blue-600 h-1 w-52 mb-3 rounded mx-auto"></div>
              <p className="leading-relaxed text-base">
                Öğrenme sürecindeki başarı, doğru ders çalışma stratejilerinin
                kullanılmasına bağlıdır. Ders çalışma sürecini verimli bir
                şekilde yönetmek, bilgiyi anlama, hatırlama ve uygulama
                becerilerini geliştirmek için kritik bir öneme sahiptir. Etkili
                ders çalışma, öğrencinin sadece sınavlarda değil, hayatın her
                alanında başarılı olmasına olanak tanır.
              </p>
              <a
                href="https://www.iienstitu.com/blog/verimli-ders-nasil-calisilir"
                target="_blank"
              >
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Detay
                </button>
              </a>
            </div>
            <div className="sm:w-1/2 mr-0 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover mt-9 object-center h-full w-full"
                  src="https://st4.depositphotos.com/13349494/26799/i/600/depositphotos_267998918-stock-photo-young-woman-headset-pointing-fingers.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Teknoloji Nereye Gidiyor?
              </h2>
              <div className="bg-blue-600 h-1 w-72 mb-3 rounded mx-auto"></div>

              <p className="leading-relaxed text-base">
                Teknoloji, insan hayatını temelinden değiştiren bir güçtür.
                Geçmişte sadece birkaç yüzyıl içinde, tarımdan endüstriye, bilgi
                çağına kadar pek çok devrim yaşanmıştır.teknolojinin geleceğine
                dair öngörüler ve bu öngörülerin şekillendireceği alanlara
                odaklanacağız.. Peki, teknolojinin geleceği nasıl şekillenecek
                ve bu değişim insan hayatını nasıl etkileyecek?
              </p>
              <a
                href="https://tr.euronews.com/2018/11/13/insan-beyni-elektronik-cihazlara-yuklendiginde-kimligimiz-kisiligimiz-ne-olacak"
                target="_blank"
              >
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Detay
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopItem;

