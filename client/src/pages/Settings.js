import Navbar from "../components/Navbar";
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Settings = () => {
    return (
        <header className="w-full h-screen relative overflow-y-auto">
            <Navbar />
            <div class="flex flex-col items-center mt-6">
  <h1 class="text-3xl font-bold mb-4">Settings</h1>
  <div class="w-full md:w-1/2 lg:w-1/3">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Yadav">
            </input>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="yadav@example.com">
            </input>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********">
            </input>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="bio">
          Bio
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bio" placeholder="Tell us about yourself..."></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="languages">
          Languages
        </label>
        <div class="flex items-center justify-between">
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="languages" multiple>
            <option>English</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="avatar">
          Avatar
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="avatar" type="file">
            </input>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Save Changes
        </button>
        </div>
    </form>
    </div>
    </div>


        </header>
    );
};

export default Settings;