import Search from "../common/Search";

const Contact = () => {
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container">
        <div className="wrapper mx-auto max-w-[1200px] p-5">
          <div className="my-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.773035706026!2d104.88949521181436!3d11.5681217885855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1732168045167!5m2!1sen!2skh"
              width="1200"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="maxmd:w-[350px]"
            ></iframe>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Contact Information</h1>
            <p className="p-7 text-center maxmd:w-[380px]">
              Need to know where the your wishlisted item is on sale or our give
              away sale code? <br />
              We`re allways ready to help
            </p>
          </div>

          <form action="">
            <div className="flex gap-3 maxmd:flex maxmd:flex-col">
              <div className="flex flex-col">
                <label className="font-bold">
                  Name <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-[600px] border-2 p-2 maxmd:w-[350px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">
                  Email <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  required
                  className="w-[600px] border-2 p-2 maxmd:w-[350px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-bold">
                Telephone <span className="text-lg text-red-500">*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="w-[1212px] border-2 p-2 maxmd:w-[350px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">
                Comment<span className="text-lg text-red-500">*</span>
              </label>
              <textarea
                name=""
                id=""
                cols="40"
                rows="10"
                className="w-[1212px] border-2 p-2 maxmd:w-[350px]"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="m-3 rounded-lg bg-orange-500 p-1 px-3 text-white hover:bg-black hover:text-white">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
