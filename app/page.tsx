import Image from "next/image";
import Header from "./header";




export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center bg-black">
        <div className="info text-center text-white max-w-6xl m-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Gələcəyin{" "}
            <span className="text-red-600 border-b-4 border-red-600">Liderləri</span>{" "}
            Burada Formalaşır
          </h1>

          <p className="text-lg md:text-2xl mb-2">
            Azərbaycan gənclərinin{" "}
            <span className="text-red-600">bilik</span>,{" "}
            <span className="text-red-600">bacarıq</span> və{" "}
            <span className="text-red-600">yaradıcılıq</span> potensialının üzə
          </p>
          <p className="text-lg md:text-2xl">
            çıxarılmasına xidmət edən innovativ inkişaf platforması
          </p>

          <div className="mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300 ease-in-out shadow-md hover:shadow-red-500/50 mx-auto">
              İndi Başla
              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="cards flex flex-wrap justify-center md:justify-between gap-6 py-12">
            <div className="card flex items-center bg-[#1a1a1a] border border-red-500 hover:border-red-600 transition-all duration-300 rounded-2xl p-6 w-[350px] shadow-xl hover:shadow-red-500/50">
              <div className="icon">
                <svg
                  className="m-3"
                  fill="#ff6467"
                  width="40px"
                  height="40px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.605 2.022v0zM18.605 2.022l-2.256 11.856 8.174 0.027-11.127 16.072 2.257-13.043-8.174-0.029zM18.606 0.023c-0.054 0-0.108 0.002-0.161 0.006-0.353 0.028-0.587 0.147-0.864 0.333-0.154 0.102-0.295 0.228-0.419 0.373-0.037 0.043-0.071 0.088-0.103 0.134l-11.207 14.832c-0.442 0.607-0.508 1.407-0.168 2.076s1.026 1.093 1.779 1.099l5.773 0.042-1.815 10.694c-0.172 0.919 0.318 1.835 1.18 2.204 0.257 0.11 0.527 0.163 0.793 0.163 0.629 0 1.145-0.294 1.533-0.825l11.22-16.072c0.442-0.607 0.507-1.408 0.168-2.076-0.34-0.669-1.026-1.093-1.779-1.098l-5.773-0.010 1.796-9.402c0.038-0.151 0.057-0.308 0.057-0.47 0-1.082-0.861-1.964-1.939-1.999-0.024-0.001-0.047-0.001-0.071-0.001v0z"></path>
                </svg>
              </div>
              <div className="info text-white text-left">
                <h2 className="text-lg font-semibold mb-1">Sürətli İnkişaf</h2>
                <p className="text-gray-300 text-sm">
                  Praktiki bilik və bacarıqlarla tez inkişaf edin
                </p>
              </div>
            </div>

            <div className="card flex items-center bg-[#1a1a1a] border border-red-500 hover:border-red-600 transition-all duration-300 rounded-2xl p-6 w-[350px] shadow-xl hover:shadow-red-500/50">
              <div className="icon">
                <svg
                  className="m-3"
                  fill="#ff6467"
                  width="40px"
                  height="40px"
                  viewBox="-3 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344z"></path>
                </svg>
              </div>
              <div className="info text-white text-left">
                <h2 className="text-lg font-semibold mb-1">Mentor Dəstəyi</h2>
                <p className="text-gray-300 text-sm">
                  Təcrübəli mentorlardan dəstək alın
                </p>
              </div>
            </div>

            <div className="card flex items-center bg-[#1a1a1a] border border-red-500 hover:border-red-600 transition-all duration-300 rounded-2xl p-6 w-[350px] shadow-xl hover:shadow-red-500/50">
              <div className="icon">
                <svg
                  fill="#ff6467"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                </svg>
              </div>
              <div className="info text-white text-left">
                <h2 className="text-lg font-semibold mb-1">Sertifikasiya</h2>
                <p className="text-gray-300 text-sm">
                  Rəsmi sertifikatlarla biliklərinizi təsdiqləyin
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}

