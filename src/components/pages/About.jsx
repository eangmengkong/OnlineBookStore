import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import CountUp from "react-countup";
import Search from "../common/Search";
const About = () => {
  const stats = [
    { number: 11, label: "Awards Earned" },
    { number: 1155, label: "Product Sales" },
    { number: 2299, label: "Satisfy Clients" },
    { number: 12, label: "Workshops" },
  ];
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container">
        <div className="wrapper mx-auto max-w-[1200px] p-3">
          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center">
              <h1 className="text-2xl font-bold">Book & Stylist Corporation</h1>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between maxmd:flex maxmd:flex-col">
              <div className="w-[350px]">
                <i className="text-[4rem] text-orange-500">
                  <FaHandshake />
                </i>

                <div className="text-justify">
                  <h2 className="text-2xl font-bold">TESTTIMONAL</h2>
                  <p>
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Ut elit tellus, luctus
                    nec ullamcorper mattis, pulvinar dapibus leo.Click edit
                    button to change this text. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
              </div>
              <div className="w-[350px]">
                <i className="text-[4rem] text-orange-500">
                  <FaUsers />
                </i>

                <div className="text-justify">
                  <h2 className="text-2xl font-bold">Team Efficiency </h2>
                  <p>
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Ut elit tellus, luctus
                    nec ullamcorper mattis, pulvinar dapibus leo.Click edit
                    button to change this text. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
              </div>
              <div className="w-[350px]">
                <i className="text-[4rem] text-orange-500">
                  <FaChartLine />
                </i>

                <div className="text-justify">
                  <h2 className="text-2xl font-bold">Success Mission</h2>
                  <p>
                    Click edit button to change this text. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Ut elit tellus, luctus
                    nec ullamcorper mattis, pulvinar dapibus leo.Click edit
                    button to change this text. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-20 flex justify-evenly maxmd:grid maxmd:grid-cols-2">
            {stats.map((stats, index) => (
              <div key={index} className="text-center">
                <h1 className="p-4 text-6xl font-bold text-orange-500">
                  <CountUp end={stats.number} duration={2} />
                </h1>
                <p className="text-lg text-gray-600">{stats.label}</p>
              </div>
            ))}
          </div>

          <div className="my-20">
            <div className="flex items-center gap-5 maxmd:flex maxmd:flex-col">
              <img src="images/about.jpg" className="w-[450px]" />
              <div>
                <h1 className="text-[2rem] font-bold">
                  8 Years Of Experience!
                </h1>
                <p>
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.Click edit button to
                  change this text. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                  mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
