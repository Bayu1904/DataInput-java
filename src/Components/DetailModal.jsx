import { useMutation, useQuery } from "react-query";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { API } from "../config/API";

export default function Modal({ id, setModal }) {
  let { data: user } = useQuery("user1", async () => {
    const response = await API.get("/users/" + id);
    return response.data;
  });
  return (
    <>
      <div className="w-full h-full bg-slate-500 opacity-50 fixed z-20"></div>
      <div className="bg-slate-200 centered w-[90%] md:w-[35rem] z-50 rounded-lg px-4 py-8 ">
        <div className="text-2xl font-bold mb-3 text-orange-600 flex gap-2 items-center">
          <FaUserPlus size={30} /> Data
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-4">
            <span>Nama</span>
            <span>: {user?.name}</span>
          </div>
          <div className="flex flex-row gap-4">
            <span>NIK</span>
            <span>: {user?.nik}</span>
          </div>
          <div className="flex flex-row gap-4">
            <span>Alamat</span>
            <span>: {user?.address}</span>
          </div>
          <div className="flex flex-row gap-4">
            <span>Umur</span>
            <span>: {user?.date}</span>
          </div>
          <div className="flex flex-row gap-4">
            <span>Tanggal Lahir</span>
            <span>: {user?.date}</span>
          </div>
          <div className="flex flex-row gap-4">
            <span>Negara</span>
            <span>: {user?.country}</span>
          </div>
          <button
            className="bg-orange-500 py-2 text-white font-bold rounded-lg"
            onClick={() => setModal(false)}
          >
            {" "}
            Close
          </button>
        </div>
      </div>
    </>
  );
}
