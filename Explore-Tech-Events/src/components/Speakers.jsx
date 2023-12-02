import Banner from "../components/Banner";

const Speakers = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-24">
      <div
        data-aos-duration="3000"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Event Speakers
        </h2>
        <p className="text-center w-full md:w-3/4 mx-auto my-5">
          Meet the experts and thought leaders who will be sharing their
          insights at TechCon 2023. Learn from the best in the industry!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 my-8">
        <div
          className="card  bg-base-100 shadow-xl"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <figure>
            <img
              src={"https://i.ibb.co/D8bCKFY/p1.webp"}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name: Jane Smitha</h2>
            <p className="text-justify">
              <b>Bio:</b> Dr. Jane Smitha is a renowned AI researcher and a
              trailblazer in the field of artificial intelligence. With a Ph.D.
              in Computer Science from MIT and over two decades of experience,
              Dr. Smith has been at the forefront of AI advancements. She is the
              author of several groundbreaking papers and the best-selling book,
              "AI Revolution: Shaping the Future." Dr. Smitha's work has
              transformed industries and has led to the development of
              innovative AI solutions that enhance productivity and drive
              business growth. As a keynote speaker, she will share her insights
              into the latest trends and the future of AI.
            </p>
          </div>
        </div>
        <div
          className="card  bg-base-100 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <figure>
            <img
              src={"https://i.ibb.co/TTBmJ35/p3.jpg"}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name: David Johnson</h2>
            <p className="text-justify">
              <b>Bio:</b> Mr.David Johnson is a data science maven and the Chief
              Data Scientist at GlobalTech Corp. With a strong background in
              data analytics and machine learning, David has played a pivotal
              role in helping organizations harness the power of data to make
              informed decisions and drive growth. Her expertise extends to
              predictive analytics, data-driven marketing, and AI-driven
              solutions. As a thought leader in the data science field, David's
              presentations are known for their practical insights and
              actionable strategies that empower businesses to thrive in the
              data-driven era.
            </p>
          </div>
        </div>
        <div
          className="card  bg-base-100 shadow-xl"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <figure>
            <img
              src={"https://i.ibb.co/306GNbw/p2.webp"}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name: Sarah Adams</h2>
            <p className="text-justify">
              <b>Bio:</b> Mr.Sarah Adams is a visionary tech entrepreneur, futurist,
              and the Founder and CEO of Tech Innovations Inc. With a passion
              for innovation, John has led his company to develop cutting-edge
              technologies in the Internet of Things (IoT) space. His work has
              revolutionized how we interact with everyday objects and has
              opened up new possibilities for smart homes, connected cities, and
              beyond. John is a sought-after speaker known for his dynamic
              presentations on the impact of IoT on our lives and businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
