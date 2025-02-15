import React from "react";

const reviews = [
  {
    name: "Saurabh Singh",
    time: "1 day ago on Google",
    rating: 5,
    comment:
      "One of the best places to appreciate the night view. Traffic is terrible but definitely worth checking out when visiting LA",
    profilePic: "https://via.placeholder.com/40",
  },
  {
    name: "Shashi Kant",
    time: "1 day ago on Google",
    rating: 5,
    comment:
      "I was hoping for more sections with deeper science or pictures, but I really cannot complain since it's free except the planetarium show.",
    profilePic: "https://via.placeholder.com/40",
  },
];

const ReviewCard = ({ review }) => (
  <div className="flex gap-4 border-b pb-4 mb-4">
    <img
      src={review.profilePic}
      alt={review.name}
      className="w-10 h-10 rounded-full"
    />
    <div>
      <h3 className="font-semibold">{review.name}</h3>
      <p className="text-sm text-gray-500">{review.time}</p>
      <div className="flex text-yellow-400 mt-1">
        {Array(review.rating)
          .fill()
          .map((_, i) => (
            <span key={i}>⭐</span>
          ))}
      </div>
      <p className="mt-2 text-gray-700">{review.comment}</p>
    </div>
  </div>
);

const CustomerReviews = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">What our customers say</h2>
      <div className="flex gap-4 text-gray-700 mb-6 text-sm">
        <span className="font-semibold">All Reviews 4.9</span>
        <span>Google 4.7</span>
        <span>Facebook 4.9</span>
        <span>Tripadvisor 5.0</span>
        <span>Amazon 4.9</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold">Overall Rating</h3>
          <p className="text-3xl font-bold flex items-center">
            4.9 <span className="text-yellow-400 ml-2">⭐⭐⭐⭐⭐</span>
          </p>
          <span className="text-gray-500 text-sm">(40,472 reviews)</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          Write a review
        </button>
      </div>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default CustomerReviews;
