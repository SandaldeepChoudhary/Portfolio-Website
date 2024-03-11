"use client";

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

//import swipper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Ankit Katoch",
    job: "Chef",
    review:
      "Sandaldeep is an exceptional web developer! His attention to detail and innovative approach transformed our website.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Sagar Thakur",
    job: "Driver",
    review:
      "Working with Sandaldeep was a pleasure. His expertise as an app developer is evident in the seamless functionality of our mobile app.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Bhavesh Verma",
    job: "Jeweller",
    review:
      "Sandaldeep's dedication to his craft is commendable. He goes above and beyond to deliver outstanding results.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Gourav Kumar",
    job: "Business man",
    review:
      "As an individual, Sandaldeep is reliable and professional. His communication skills make collaboration effortless.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Anuj Rana",
    job: "Flutter Developer",
    review:
      "I am impressed by Sandaldeep's professionalism and expertise. He is a valuable asset to any development team.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Shubham Jaswal",
    job: "Flutter Dev",
    review:
      "It was a pleasure working with Sandaldeep. His ability to problem-solve and adapt to changes made the project a success",
  },
];
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-22">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider  */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[400px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image  */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name  */}
                      <div>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
