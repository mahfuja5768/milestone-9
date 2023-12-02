const BlogContent = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-16" data-aos="fade-up"
    data-aos-duration="3000">
      <div className="text-center">
        <h2 className="md:text-3xl text-2xl font-bold">
           Exploring the Future of Artificial Intelligence at TechX Summit
          2023
        </h2>
        <p className="my-3">
          Are you ready to embark on a journey into the exciting world of
          artificial intelligence? Join us at TechX Summit 2023, a
          groundbreaking event that promises to unravel the mysteries of AI and
          its limitless possibilities. This event, scheduled from November 15 to
          17, 2023, is not just an event; it's an experience you won't want to
          miss.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-8">
          <img src={"https://i.ibb.co/HzzfnqM/b-1.jpg"} alt="" />
          <img src={"https://i.ibb.co/W3cZLbT/b2.jpg"} alt="" />
          <img src={"https://i.ibb.co/9rmpc90/b3.jpg "} alt="" />
          <img src={"https://i.ibb.co/Ns4StHt/b4.jpg"} alt="" />
        </div>
      </div>
      <div>
        <h2 className=" md:text-3xl text-2xl font-bold text-center mt-8  mb-2">Event Highlights</h2>
        <p className="text-lg md:text-xl font-medium text-center mx-auto mb-6">
          TechX Summit 2023 is your gateway to the latest trends, innovations,
          and breakthroughs in artificial intelligence. Here are some of the
          highlights you can look forward to:
        </p>
        <p>
          <b>Engaging Talks:</b> Immerse yourself in thought-provoking talks delivered
          by industry leaders and visionaries. Gain insights into the future of
          AI and how it's transforming industries.
        </p>
        <p>
          <b>Hands-On Workshops:</b> Dive deep into practical AI applications through
          hands-on workshops. Learn how to develop AI models, implement machine
          learning algorithms, and solve real-world problems.
        </p>
        <p>
          <b>Networking Opportunities:</b> Connect with like-minded professionals,
          researchers, and AI enthusiasts. Expand your network and discover
          potential collaborations.
        </p>
      </div>
    </div>
  );
};

export default BlogContent;
