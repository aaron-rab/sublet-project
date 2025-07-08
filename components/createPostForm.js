"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "../services/post";
import { useMutation } from "@tanstack/react-query";
import { DatePicker } from "antd";

export default function CreatePostForm() {
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const clearInputs = () => {
    setTitle("");
    setContent("");
    setError("");
  };

  const { mutateAsync } = useMutation({
    mutationFn: (newTodo) => {
      return createPost(newTodo);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = await mutateAsync({
      accessToken: session?.user.accessToken,
      postData: {
        title: title,
        content: content,
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
        value={content}
        onChange={handleContentChange}
        placeholder="Enter Post Content"
        className="border-b border-b-gray-200 hover:border-b-gray-500"
      />

      <DatePicker onChange={setDate} placeholder="Select date" />
      {date && (
        <div>
          <p>Selected Date: {date.format('YYYY-MM-DD')}</p>
        </div>
      )}
       
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
