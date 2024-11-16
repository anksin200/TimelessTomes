/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation } from "swiper/modules";

const categories = [
  "choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSeller = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // console.log(books);

  const fliteredBooks =
    selectedCategory === "choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );
  // console.log(fliteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      <div className="md-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className=" border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline"
        >
          {categories.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        navigation={true} 
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1189:{
            slidesPerView:3,
            spaceBetween:50,
          }
        }}
        modules={[Pagination,Navigation]}
      >
        {fliteredBooks.length > 0
          ? fliteredBooks.map((book, index) => (
              <SwiperSlide key={index}>
                <BookCard  book={book} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default TopSeller;
