import Image from "next/image";
import bannerImg from "../../public/images/banner_image.jpg";
import { Button } from "antd";

const HomePage = () => {
  return (
    <section className="lg:h-[100vh] flex items-center justify-center py-16 lg:py-0 px-1 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 justify-center items-center gap-10 lg:gap-16">
          <div className="flex flex-col gap-y-8 gap-2 px-5 lg:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl py-2 font-extrabold text-stone-600">
              Project <br></br> Management
            </h2>

            <p
              className="sm:text-base text-sm text-stone-600"
              style={{ lineHeight: "2rem" }}
            >
              Efficient project management is the cornerstone of success in any
              endeavor. From inception to completion, it ensures streamlined
              processes, effective communication, and timely delivery,
              empowering teams to navigate complexity with clarity and achieve
              their goals.
            </p>
            <div>
              <Button className="hover:bg-blue-400 bg-blue-600 text-white">
                Explore More
              </Button>
            </div>
          </div>

          <div>
            <Image
              src={bannerImg}
              alt="Banner img"
              className="w-full"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
