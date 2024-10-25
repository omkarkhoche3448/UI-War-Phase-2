import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules"; // Ensure Navigation is imported

const testimonials = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Computer Science Student",
    image: "/placeholder.svg?height=100&width=100",
    quote: "ISTE has been instrumental in shaping my technical skills. The workshops and events have given me practical knowledge that goes beyond textbooks."
  },
  {
    id: 2,
    name: "Zara Khan",
    role: "Robotics Enthusiast",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The robotics competition organized by ISTE was a game-changer for me. It provided a platform to showcase my ideas and learn from peers across the country."
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "AI Researcher",
    image: "/placeholder.svg?height=100&width=100",
    quote: "ISTE's AI symposium opened doors to cutting-edge research and networking opportunities. It's been crucial in advancing my career in artificial intelligence."
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Web Developer",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The web development bootcamp by ISTE was intense and incredibly rewarding. It equipped me with the skills I needed to land my dream job."
  },
  {
    id: 5,
    name: "Arjun Reddy",
    role: "Cybersecurity Expert",
    image: "/placeholder.svg?height=100&width=100",
    quote: "ISTE's focus on cybersecurity awareness has been commendable. Their workshops have helped me stay updated with the latest in digital security."
  }
];

const TestimonialSwiper = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full">
                <div className="text-indigo-600 mb-4 text-4xl">
                  <span>&ldquo;</span>
                  <span className="text-5xl inline-block">&#8220;</span>
                  <span>&rdquo;</span>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialSwiper;
