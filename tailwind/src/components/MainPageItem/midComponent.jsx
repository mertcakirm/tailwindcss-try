import React, { Component } from "react";

const MidComPonent = () => {
  return (
    <div>
      <section className="bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            İlgi Çekici Başlıca Konular
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <a
                href="https://www.iienstitu.com/blog/verimli-ders-nasil-calisilir"
                target="_blank"
              >
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </a>
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://www.iienstitu.com/blog/verimli-ders-nasil-calisilir"
                  target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  Nasıl Etkili Çalışılır?
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                Tarih: 20 Mayıs 2022
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <a
                href="https://www.windowist.com/calisma-ortami-ve-verimlilik-iliskisi/"
                target="_blank"
              >
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </a>
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://www.windowist.com/calisma-ortami-ve-verimlilik-iliskisi/"
                  target="_blank"
                  className="text-xl font-semibold w-40 text-gray-800 hover:underline dark:text-white "
                >
                  Çalışma Ortamının Anlama üzerindeki Etkisi
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                Tarih: 20 Ocak 2023
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <a href="https://www.innerjoy.app/gun-icerisinde-daha-verimli-hissetmenin-bir-yolu-sabah-rutini/#:~:text=Yap%C4%B1lan%20ara%C5%9Ft%C4%B1rmalara%20g%C3%B6re%20sabah%20rutini,sa%C4%9Flar%20ve%20mental%20sa%C4%9Fl%C4%B1%C4%9F%C4%B1m%C4%B1z%C4%B1%20korur.">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </a>
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://www.innerjoy.app/gun-icerisinde-daha-verimli-hissetmenin-bir-yolu-sabah-rutini/#:~:text=Yap%C4%B1lan%20ara%C5%9Ft%C4%B1rmalara%20g%C3%B6re%20sabah%20rutini,sa%C4%9Flar%20ve%20mental%20sa%C4%9Fl%C4%B1%C4%9F%C4%B1m%C4%B1z%C4%B1%20korur."
                  className="text-xl font-semibold w-40 text-gray-800 hover:underline dark:text-white "
                >
                  Gün İçerisinde Daha Verimli Hissetmenin Bir Yolu: Sabah Rutini
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                Tarih: 25 Eylül 2021
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <a href="https://www.jw.org/tr/kutuphane/kitaplar/gelecek-hakk%C4%B1nda-bro%C5%9F%C3%BCr/gelecek-hakk%C4%B1nda/" target="_blank">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                  alt=""
                />
              </a>
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://www.jw.org/tr/kutuphane/kitaplar/gelecek-hakk%C4%B1nda-bro%C5%9F%C3%BCr/gelecek-hakk%C4%B1nda/"
                  target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "

                >
                  Gelecek Hakkında...
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                Tarih: 30 Kasım 2020
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <a href="https://www.windowist.com/yeni-nesil-calisma-alani-nedir/" target="_blank">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                  alt=""
                />
              </a>
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://www.windowist.com/yeni-nesil-calisma-alani-nedir/" target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  Yeni Nesil Çalışma Alanı Nedir?
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                Tarih: 13 Şubat 2022
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <a href="https://kolektifhouse.co/komag/blockchain-nedir-blockchain-teknolojisi-hakkinda-her-sey" target="_blank">
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </a>
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://kolektifhouse.co/komag/blockchain-nedir-blockchain-teknolojisi-hakkinda-her-sey" target="_blank"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  Blokzinciri Teknolojisi Hakkında Herşey...
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Tarih: 20 Haziran 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidComPonent;
