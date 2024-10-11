"use client";
import React,{useEffect,useState} from "react";
import axios from "axios";

export default function Home() {
  const [message,setMessage]=useState("Loading");

  useEffect((): void => {
    axios.get("http://localhost:8080/api/home")
      .then((response): void => {
        setMessage(response.data.message);
        console.log(response.data);
      })
      .catch((error): void => {
        console.error("Error fetching data:",error);
        setMessage("Error loading message");
      });
  },[]);

  return (
    <main>
      <h1 className="font-bold text-2xl underline">{message}</h1>
    </main>
  );
}
