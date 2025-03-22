// import React from "react";
// import { Search, Star, ThumbsUp, ThumbsDown, MessageSquare, Briefcase } from "lucide-react";

// const reviews = [
//   {
//     id: 1,
//     user: "Amit Kumar",
//     company: "UPSC",
//     rating: 5,
//     date: "Feb 25, 2025",
//     summary: "Challenging but rewarding experience!",
//     fullReview:
//       "The UPSC exam process is highly competitive, but the structured syllabus and transparent process make it fair for all aspirants. The experience was rigorous but fulfilling!",
//   },
//   {
//     id: 2,
//     user: "Neha Sharma",
//     company: "SSC CGL",
//     rating: 4,
//     date: "Jan 15, 2025",
//     summary: "A great opportunity for a stable career!",
//     fullReview:
//       "SSC CGL provides a great opportunity for government jobs. The exam pattern is predictable, but the selection process is slow. Overall, a good experience!",
//   },
// ];

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="border rounded-lg shadow-md bg-white p-6 space-y-4 hover:shadow-lg transition-shadow">
//       <div className="flex items-center space-x-4">
//         <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-semibold">
//           {review.user[0]}
//         </div>
//         <div>
//           <h4 className="text-lg font-semibold text-gray-900">{review.user}</h4>
//           <p className="text-gray-600 text-sm">Reviewed: {review.company} - {review.date}</p>
//           <div className="flex text-yellow-500 mt-1">
//             {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5" />)}
//           </div>
//         </div>
//       </div>
//       <h5 className="text-md font-medium text-gray-800">{review.summary}</h5>
//       <p className="text-gray-600 text-sm leading-relaxed">{review.fullReview}</p>
//       <div className="flex justify-between text-gray-500 text-sm mt-2">
//         <div className="flex items-center space-x-4">
//           <button className="flex items-center hover:text-blue-600">
//             <ThumbsUp className="w-5 h-5 mr-1" /> Helpful
//           </button>
//           <button className="flex items-center hover:text-red-600">
//             <ThumbsDown className="w-5 h-5 mr-1" /> Not Helpful
//           </button>
//         </div>
//         <button className="flex items-center hover:text-green-600">
//           <MessageSquare className="w-5 h-5 mr-1" /> Comment
//         </button>
//       </div>
//     </div>
//   );
// };

// const ReviewList = () => {
//   return (
//     <section className="px-12 mt-10">
//       <h3 className="text-2xl font-semibold text-blue-700 mb-6">Latest Reviews</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//         {reviews.map((review) => (
//           <ReviewCard key={review.id} review={review} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ReviewList;




// import React from "react";
// import Img from "../assets/images/profile.jpg"
// import Image from "next/image";
// const ReviewCard = ({ review }) => {
//   return (
//     <div className="border rounded-lg shadow-lg w-[260px] p-4 bg-white">
//       {/* Badge for "Review of the Day" */}
//       {review.isFeatured && (
//         <div className="bg-purple-600 text-white text-sm font-bold p-1 text-center rounded-t-md">
//           REVIEW OF THE DAY
//         </div>
//       )}

//       {/* Company Image */}
//       <div className="flex justify-center">
//         <Image
//           width={500}
//           height={400}
//           src={Img}
//           alt={""}
//           className="h-24 object-cover my-2"
//         />
//       </div>

//       {/* User Information */}
//       <div className="flex items-center gap-2">
//         <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//           <span className="text-gray-600 text-sm font-bold">{review.username.charAt(0)}</span>
//         </div>
//         <p className="text-sm font-semibold text-green-600">{review.username}</p>
//       </div>

//       <p className="text-gray-500 text-xs mt-1">{review.timeAgo}</p>

//       {/* Star Rating */}
//       <div className="flex mt-2">
//         {Array(5)
//           .fill(0)
//           .map((_, index) => (
//             <span
//               key={index}
//               className={`text-lg ${index < review.rating ? "text-yellow-500" : "text-gray-300"}`}
//             >
//               ★
//             </span>
//           ))}
//       </div>

//       {/* Review Content */}
//       <h3 className="font-semibold mt-2">{review.company}</h3>
//       <p className="text-gray-500 text-sm">{review.reviewText}</p>

//       {/* Read More Button */}
//       <a href="#" className="text-green-600 text-sm font-semibold mt-3 inline-block">
//         Read Complete Review →
//       </a>
//     </div>
//   );
// };

// // Sample Data for Testing
// const reviews = [
//   {
//     isFeatured: true,
//     username: "surabhi19",
//     timeAgo: "5 days ago",
//     rating: 2,
//     company: "Mere Husband Ki Biwi",
//     reviewText: "Can Avoid Watching This Movie!!",
//     image: "../assets/images/profile.jpg", // Replace with actual image
//   },
//   {
//     isFeatured: false,
//     username: "shrutyb",
//     timeAgo: "0 hrs 23 mins ago",
//     rating: 1,
//     company: "Delhivery",
//     reviewText: "Delhivery courier",
//     image: "../assets/images/profile.jpg",
//   },
//   {
//     isFeatured: false,
//     username: "shrutyb",
//     timeAgo: "0 hrs 23 mins ago",
//     rating: 1,
//     company: "Delhivery",
//     reviewText: "Delhivery courier",
//     image: "../assets/images/profile.jpg",
//   },
//   {
//     isFeatured: false,
//     username: "shrutyb",
//     timeAgo: "0 hrs 23 mins ago",
//     rating: 1,
//     company: "Delhivery",
//     reviewText: "Delhivery courier",
//     image: "../assets/images/profile.jpg",
//   },
//   {
//     isFeatured: false,
//     username: "shrutyb",
//     timeAgo: "0 hrs 23 mins ago",
//     rating: 1,
//     company: "Delhivery",
//     reviewText: "Delhivery courier",
//     image: "../assets/images/profile.jpg",
//   },
// ];

// const ReviewList = () => {
//   return (
//     <div className="flex gap-4 overflow-x-auto p-4">
//       {reviews.map((review, index) => (
//         <ReviewCard key={index} review={review} />
//       ))}
//     </div>
//   );
// };

// export default ReviewList;









import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img from "../assets/images/profile.jpg";
import Image from "next/image";

const ReviewCard = ({ review }) => {
  return (
    <div className="border rounded-lg shadow-lg w-[260px] p-4 bg-white">
      {/* {review.isFeatured && (
        <div className="bg-purple-600 text-white text-sm font-bold p-1 text-center rounded-t-md">
          REVIEW OF THE DAY
        </div>
      )} */}
      <div className="flex justify-center">
        <Image
          width={500}
          height={400}
          src={Img}
          alt={""}
          className="h-24 object-cover my-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 text-sm font-bold">{review.username.charAt(0)}</span>
        </div>
        <p className="text-sm font-semibold text-green-600">{review.username}</p>
      </div>
      <p className="text-gray-500 text-xs mt-1">{review.timeAgo}</p>
      <div className="flex mt-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className={`text-lg ${index < review.rating ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
      </div>
      <h3 className="font-semibold mt-2">{review.company}</h3>
      <p className="text-gray-500 text-sm">{review.reviewText}</p>
      <a href="#" className="text-green-600 text-sm font-semibold mt-3 inline-block">
        Read Complete Review →
      </a>
    </div>
  );
};

const reviews = [
  { isFeatured: true, username: "surabhi19", timeAgo: "5 days ago", rating: 2, company: "Mere Husband Ki Biwi", reviewText: "Can Avoid Watching This Movie!!", image: "../assets/images/profile.jpg" },
  { isFeatured: false, username: "shrutyb", timeAgo: "0 hrs 23 mins ago", rating: 1, company: "Delhivery", reviewText: "Delhivery courier", image: "../assets/images/profile.jpg" },
  { isFeatured: false, username: "shrutyb", timeAgo: "0 hrs 23 mins ago", rating: 1, company: "Delhivery", reviewText: "Delhivery courier", image: "../assets/images/profile.jpg" },
  { isFeatured: false, username: "shrutyb", timeAgo: "0 hrs 23 mins ago", rating: 1, company: "Delhivery", reviewText: "Delhivery courier", image: "../assets/images/profile.jpg" },
  { isFeatured: false, username: "shrutyb", timeAgo: "0 hrs 23 mins ago", rating: 1, company: "Delhivery", reviewText: "Delhivery courier", image: "../assets/images/profile.jpg" },
];

const ReviewList = () => {
  return (
    // <section className="px-10 py-16 bg-gray-100">
    //   <Swiper
    //     modules={[Pagination, Navigation]}
    //     spaceBetween={10}
    //     slidesPerView={1}
    //     breakpoints={{
    //       768: { slidesPerView: 2 },
    //       1024: { slidesPerView: 3 },
    //     }}
    //     pagination={{ clickable: true }}
    //     navigation
    //     className="pb-10"
    //   >
    //     {reviews.map((review, index) => (
    //       <SwiperSlide key={index}>
    //         <ReviewCard review={review} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </section>
    <section className="px-4 md:px-10 py-16 bg-gray-100">
  <Swiper
    modules={[Pagination, Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    }}
    pagination={{ clickable: true }}
    navigation
    className="pb-10"
  >
    {reviews.map((review, index) => (
      <SwiperSlide style={{ flexShrink: 1 }} key={index} className="flex">
        <ReviewCard review={review} />
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default ReviewList;

