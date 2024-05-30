function Welcome({ program }) {
  return (
    <div className="bg-slate-950 text-white w-full">
      <header className="sticky top-0 flex flex-col sm:flex-row md:flex-row items-center bg-slate-950 2xl:flow-row justify-between py-5 px-20">
        <img src="assets/img/zeus 2.png" alt="Zeus Physique" className="w-[10rem]" />
        <div className="sm:hidden">
          <button
            id="menu-button"
            className="text-white focus:outline-none"
            onClick={() => document.getElementById('nav-menu').classList.toggle('hidden')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav id="nav-menu" className="mt-4 sm:mt-0 sm:flex hidden">
          <ul className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 space-x-0 sm:space-x-4">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#program" className="text-white">Program</a></li>
            <li><a href={route('login')} className="text-white sm:ml-8 rounded-xl border border-white px-5 py-2">Login</a></li>
            <li><a href={route('register')} className="text-white btn-green px-3 py-2 rounded">Register</a></li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-col sm:flex-row items-center justify-center text-left py-5">
        <div className="sm:w-1/2 mb-10 sm:mb-0 sm:pl-20 px-5 sm:px-0">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">Helps for your ideal body fitness</h2>
          <p className="mb-8">Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
          <a href={route('login')} className="btn-green px-10 py-2 rounded">Start Training</a>
        </div>
        <div className="sm:w-1/2">
          <img src="assets/img/Right.png" alt="Fitness" className="hidden sm:block mx-auto pr-0 sm:pr-20" />
        </div>
      </section>
      <section id="program" className="py-20">
        <h2 className="text-center text-5xl font-bold mb-10">Explore Our Program</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10">
          {program.map((item, index) => (
            <div className="border-2 border-green-500 border-dashed bg-slate-950 p-5">
              <img src="assets/img/Media Container.png" alt="Area Boxing" className="sm:block mb-4"/>
              <h3 className="text-xl font-bold mb-2">{item.nama_program}</h3>
              <p>{item.deskripsi}</p>
              <p className="mt-2 text-green-400">Every Sat and Sun at 9 am</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 sm:px-20">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col bg-black bg-opacity-20">
            <img src="assets/img/Frame 75.png" className="sm:block mb-4"/>
          </div>
          <div className="flex flex-col ml-0 sm:ml-5 w-full sm:w-[43%] pr-0 sm:pr-20">
            <div className="flex flex-col items-start p-2.5 my-auto text-base font-medium text-neutral-200">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Transform your physique with our fitness program.</h1>
              <div className="flex gap-4 justify-center mt-10">
                <img src="assets/img/checkmark.png" className="shrink-0 w-10 aspect-square" />
                <p className="mt-2">Increase Muscle and Strength</p>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <img src="assets/img/checkmark.png" className="shrink-0 w-10 aspect-square" />
                <p className="mt-2">Be Healthier than before</p>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <img src="assets/img/checkmark.png" className="shrink-0 w-10 aspect-square" />
                <p className="mt-2">Increase Stamina</p>
              </div>
              <div className="flex gap-4 justify-center mt-6 text-lg font-semibold leading-6 text-center text-white">
                <a href={route('register')} className="btn-green px-3 py-2 rounded">Join now</a>
                <a href="#" className="my-auto ml-6">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-5 py-20 w-full bg-slate-950">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col w-full sm:w-2/5">
              <div className="flex flex-col items-start text-white pl-0 sm:pl-20">
                <h1 className="text-4xl font-bold">What Our Members Say About Us?</h1>
                <img src="assets/img/Text.png" className="mt-10 sm:mt-36 w-32 h-auto rounded-full border-2 border-white" />
                <h3 className="mt-6 text-lg font-medium">10K+ Satisfied Customers</h3>
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-3/5 pr-0 sm:pr-20">
              <div className="flex flex-col items-start pt-5 pb-6 w-full rounded-xl border-2 border-green-500 border-dashed bg-slate-950">
                <div className="flex gap-1 self-end mr-16">
                  <img src="assets/img/Star.png" className="shrink-0 w-6 aspect-square" />
                  <img src="assets/img/Star.png" className="shrink-0 w-6 aspect-square" />
                  <img src="assets/img/Star.png" className="shrink-0 w-6 aspect-square" />
                  <img src="assets/img/Star.png" className="shrink-0 w-6 aspect-square" />
                  <img src="assets/img/Star.png" className="shrink-0 w-6 aspect-square" />
                </div>
                <div className="flex flex-col items-start pl-5 sm:pl-12 mt-10">
                  <div className="flex flex-col sm:flex-row gap-5 justify-between items-start">
                    <p className="text-lg text-white text-opacity-80">“Join this fitness program, the best choice I’ve made. They’re very professional and give you suggestions about what food and nutrition you can eat.”</p>
                    <div className="flex justify-center items-center self-end p-2 mt-10">
                      <a href="#"><img src="assets/img/Arrow Right.png" className="shrink-0 w-20 rounded-full aspect-square" /></a>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center mt-4">
                    <img loading="lazy" src="assets/img/Ellipse 5.png" className="shrink-0 w-16 rounded-full aspect-square" />
                    <div className="flex flex-col my-auto">
                      <p className="text-lg font-semibold text-white text-opacity-80">Jonathan Edward</p>
                      <p className="mt-1 text-base font-medium text-neutral-500">Office Worker</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center self-center mt-7">
                    <div className="shrink-0 w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="shrink-0 w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="shrink-0 w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex md:justify-around justify-center flex-col md:flex-row p-5">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center md:justify-start">
          <img src="assets/img/zeus 2.png" alt="Zeus Physique" className="w-[10rem]" />
          </div>
          <div className="flex justify-center">
          <h3 className="text-sm font-medium leading-5 text-white mt-4 text-center">Highlight benefits of each exercise, both physical and mental</h3>
          </div>
        </div>
        <div className="mt-8 flex gap-5 justify-center">
          <div className="flex flex-col text-base text-white">
            <div className="text-lg font-bold">Support</div>
            <a href="#" className="mt-2.5 font-medium">FAQ</a>
            <a href="#" className="mt-4">Support Center</a>
          </div>
          <div className="flex flex-col sm:items-center">
            <h3 className="sm:text-lg text-base font-bold text-white">Social Media</h3>
            <div className="flex gap-1 mt-2.5">
              <a href="#"><img src="assets/img/instagram.png" className="shrink-0 w-10 h-10 aspect-square" /></a>
              <a href="#"><img src="assets/img/Twitter.png" className="shrink-0 w-10 h-10 aspect-square" /></a>
              <a href="#"><img src="assets/img/Facebook.png" className="shrink-0 w-10 h-10 aspect-square" /></a>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5 text-start border-t-2 border-t-lime-500">
        <div className="flex flex-row sm:flex-row justify-between">
          <p className="flex items-center mb-2 sm:mb-0 pl-5 sm:pl-20">
            <span className="font-size: x-large;">&copy; &ensp;</span>2024 Zeus Physique
          </p>
          <div className="flex items-center pr-20 text-gray-600">
            <a href="#" className="mb-2 sm:mb-0">Term of Use</a>
            <a href="#" className="mb-2 sm:mb-0 pl-5 sm:pl-5">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;