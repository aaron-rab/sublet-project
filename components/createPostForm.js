"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "../services/post";
import { useMutation } from "@tanstack/react-query";
//import { DatePicker } from "antd";
import { DayPicker } from 'react-day-picker';

export default function CreatePostForm() {
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rent, setRent] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleRentChange = (e) => setRent(e.target.value);
  const clearInputs = () => {
    setTitle("");
    setDescription("");
    setRent("");
    setError("");
    setStartDate(null);
    setEndDate(null);
  };

  const { mutateAsync } = useMutation({
    mutationFn: (newTodo) => {
      return createPost(newTodo);
    },
  });

  const formatDate = (date) => date ? date.toISOString().slice(0, 10) : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = await mutateAsync({
      accessToken: session?.user.accessToken,
      postData: {
        title: title,
        description: description,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        rent: rent,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          clearInputs();
          setError("Listing Created");
        } else {
          setError(res.message);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // So I want to make input fields their own component. IS this necesarry?
  // It could make things more modular
  // Custom handler to log date when set

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-12 w-full px-32"
    >
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter Post Title"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter Post Description"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />
      <input
        type="text"
        value={rent}
        onChange={handleRentChange}
        placeholder="Enter Rent Amount"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />

      <DayPicker
        mode="range"
        selected={startDate && endDate ? { from: startDate, to: endDate } : undefined}
        onSelect={(range) => {
          setStartDate(range?.from || null);
          setEndDate(range?.to || null);
          console.log("Selected range:", range);
        }}
        footer={
          <div>
            {startDate && endDate
              ? `Selected: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
              : "Please select a date range"}
          </div>
        }
      />

      <button
        type="submit"
        className="border rounded-lg px-6 py-2 bg-gray-100 hover:bg-gray-200 duration-300 uppercase text-sm"
      >
        Create Listing
      </button>
      {error && <p className="text-red-500 font-bold text-center">{error}</p>}
    </form>
  );
}
