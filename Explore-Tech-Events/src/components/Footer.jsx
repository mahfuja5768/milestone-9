import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div
        className="hero text-white "
        style={{ backgroundImage: "url(https://i.ibb.co/gvFqS5Y/footer3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-80 bg-gray-900"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" max-w-[1280px] mx-auto py-24 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <nav className="flex flex-col">
            <header className="font-bold text-2xl text-white mb-2">
              Quick Menu
            </header>
            <Link to="/" className="link link-hover ps-1 pb-3 font-medium">
              Home
            </Link>
            <Link to="/about" className="link link-hover ps-1 pb-3 font-medium">
              About
            </Link>
            <Link
              to="/moreEvents"
              className="link link-hover ps-1 pb-3 font-medium"
            >
              More Events
            </Link>
            
              <Link
                className="link link-hover ps-1 pb-3 font-medium"
                to="/selectedEvent"
              >
                Selected Event
              </Link>
              <Link
                className="link link-hover ps-1 font-medium"
                to="/blog"
              >
                Blog
              </Link>
            
          </nav>

          <nav>
            <header className="font-bold text-2xl text-white">
              Social links
            </header>
            <p className="w-3/2 my-2">
              Join our vibrant tech community by following us on Facebook,
              Twitter, and LinkedIn for the latest industry updates, event
              highlights, and career opportunities.
            </p>
            <div className="flex items-center gap-12 my-6">
              <a
                href="https://www.facebook.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaFacebookF className="text-xl "></FaFacebookF>
              </a>
              <a
                href="https://www.dribbble.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaLinkedin className="text-xl"></FaLinkedin>
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaTwitter className="text-xl"></FaTwitter>
              </a>
            </div>
          </nav>

          <form>
            <header className="font-bold text-2xl text-white">
              Newsletter
            </header>
            <p className="w-3/4 my-2">
              You can trust us. we only send promo offers, not a single spam.
            </p>

            <fieldset className="form-control  my-4  md:w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-1/2 md:w-full pr-16"
                />
                <button className="btn btn-primary w-1/2  md:w-1/3 absolute top-0 right-0 rounded-l-none normal-case">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div className=" flex  justify-center flex-end bg-[#000000] text-white py-3 px-3">
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
