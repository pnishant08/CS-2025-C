import React from "react";
import TopSection from "../common/TopSection";
import profilebg from "../../assets/profilebg.jpg";
const Profile = () => {
  return (
    <div>
      <TopSection title={"Personal Profile"} bgImage={profilebg} />
      <div className="container flex gap-10 mx-auto px-4 py-8 max-w-5xl">
        <div className="">
          <header className="flex flex-col items-center mb-8">
            <img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="John Doe"
              className="w-40 h-40 rounded-xl object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h1 className="text-xl font-bold mb-2">John Doe</h1>
              <p className="text-xl">Full-Stack Designer</p>
            </div>
          </header>

          <aside className="md:col-span-1">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-envelope w-6 text-gray-500"></i>
                  <span>john.doe@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-globe w-6 text-gray-500"></i>
                  <a
                    href="https://www.luckymedia.dev"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.luckymedia.dev
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone w-6 text-gray-500"></i>
                  <span>(+30) 333 0123 765</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt w-6 text-gray-500"></i>
                  <span>Los Angeles, California</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Socials</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="fab fa-instagram w-6 text-pink-600"></i>
                  <a href="#" className="hover:underline">
                    @luckymedia.dev
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fab fa-dribbble w-6 text-pink-400"></i>
                  <a href="#" className="hover:underline">
                    @luckymedia.dev
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fab fa-twitter w-6 text-blue-400"></i>
                  <a href="#" className="hover:underline">
                    @luckymedia.dev
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fab fa-linkedin w-6 text-blue-700"></i>
                  <a href="#" className="hover:underline">
                    @luckymedia.dev
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Languages</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <img
                    src="https://flagcdn.com/w20/it.png"
                    alt="Italian flag"
                    className="mr-2"
                  />
                  <span>Italian (Native)</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://flagcdn.com/w20/gr.png"
                    alt="Greek flag"
                    className="mr-2"
                  />
                  <span>Greek (Native)</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://flagcdn.com/w20/gb.png"
                    alt="English flag"
                    className="mr-2"
                  />
                  <span>English (Professional working)</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://flagcdn.com/w20/es.png"
                    alt="Spanish flag"
                    className="mr-2"
                  />
                  <span>Spanish (Elementary)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
              <p>Skiing, Football, Basketball etc.</p>
            </section>
          </aside>
        </div>
        <main className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <ul className="space-y-6">
              <li>
                <div className="flex items-center mb-2">
                  <img
                    src="https://logo.clearbit.com/cupertino.com"
                    alt="Cupertino logo"
                    className="w-8 h-8 mr-2"
                  />
                  <h3 className="text-xl font-semibold">Product Designer</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  July 2021 - January 2022 | Cupertino
                </p>
                <p>
                  Ornare nonnisi nonnulla netus, itur sit sodales. Aut fugiat
                  vitae ilum vitae lobortis elit eleifend sed malesu tudia.
                  Laoreet nonnisi nonnulla netus, itur sit sodales. Aut fugiat
                  vitae ilum vitae lobortis elit eleifend sed malesu tudia.
                </p>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <img
                    src="https://logo.clearbit.com/microsoft.com"
                    alt="Microsoft logo"
                    className="w-8 h-8 mr-2"
                  />
                  <h3 className="text-xl font-semibold">UX Designer</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  July 2020 - December 2020 | San Diego
                </p>
                <p>
                  Ornare nonnisi nonnulla netus, itur sit sodales. Aut fugiat
                  vitae ilum vitae lobortis elit eleifend sed malesu tudia.
                  Laoreet nonnisi nonnulla netus, itur sit sodales. Aut fugiat
                  vitae ilum vitae lobortis elit eleifend sed malesu tudia.
                </p>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <img
                    src="https://logo.clearbit.com/booking.com"
                    alt="Booking.com logo"
                    className="w-8 h-8 mr-2"
                  />
                  <h3 className="text-xl font-semibold">Sales Representative</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  December 2019 - May 2020 | Los Angeles
                </p>
                <p>
                  Ornare nonnisi nonnulla netus, itur sit sodales. Aut fugiat
                  vitae ilum vitae lobortis elit eleifend sed malesu tudia.
                  Laoreet nonnisi nonnulla netus, itur sit sodales. Aut fugiat
                  vitae ilum vitae lobortis elit eleifend sed malesu tudia.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="flex justify-between">
              <div className="flex items-center">
                <i className="fas fa-university text-2xl text-gray-500 mr-2"></i>
                <div>
                  <h3 className="text-xl font-semibold">University of Columbia</h3>
                  <p className="text-gray-600">Business & IT</p>
                  <p className="text-gray-600">2016 - 2019</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-school text-2xl text-gray-500 mr-2"></i>
                <div>
                  <h3 className="text-xl font-semibold">Berkeley California</h3>
                  <p className="text-gray-600">High School</p>
                  <p className="text-gray-600">2012 - 2016</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center">
              <img
                src="https://source.unsplash.com/random/200x200?design"
                alt="Project image"
                className="w-24 h-24 object-cover rounded mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Powerful Design System
                </h3>
                <p className="mb-2">
                  Figma UX/UI Design System featuring a wide variety of
                  well-organized components
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1">
                User Experience
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Graphic Design
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Adobe Illustrator
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Adobe After Effects
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Web Development
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Mobile Apps
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">React.js</span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                React Native
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;
