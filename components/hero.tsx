import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-6">

        { /* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        { /* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">

          { /* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            {/* <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-blue-500 before:blur-md">
                <a className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.blue.500),_theme(colors.blue.500))_padding-box,_linear-gradient(theme(colors.blue.500),_theme(colors.blue.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow" href="#0">
                  <span className="relative inline-flex items-center">
                    Ganhe uma consultoria de graça <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </span>
                </a>
              </div>
            </div> */}
            <h1 className="h1 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">Eae me chamo <br /><span className="text-blue-300">Miguel Rodrigues</span>!</h1>
            <p className="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">Sou um desenvolvedor de software FullStack <br />trabalhando e gerando valor para empresas desde 2021.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
              {/* <div>
                <a className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
                  Conheça o método Magnum
                </a>
              </div> */}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}