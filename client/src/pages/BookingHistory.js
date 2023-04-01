import Navbar from "../components/Navbar";
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BookingHistory = () => {
    return (
        <header className="w-full h-screen relative overflow-y-auto">
            <Navbar />
            <h1 class="text-3xl font-bold mb-4">Booking History</h1>
            <div class="flex flex-col items-center mt-6">
                <div class="w-full md:w-1/2 lg:w-1/3">
                    <ul class="border-t border-b divide-y divide-gray-200">
                        <li class="py-4">
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <div class="text-gray-900 font-bold">Booking #123456</div>
                                    <div class="text-gray-500">Booking Date: 2022-01-01</div>
                                    <div class="text-gray-500">Total: 5000.00 Rupees</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-gray-500">Travel Guide: John Doe</div>
                                    <div class="text-gray-500">Location: Coimbatore</div>
                                    <div class="text-gray-500">Start Date: 10/03/2023</div>
                                </div>
                            </div>
                        </li>
                        <li class="py-4">
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <div class="text-gray-900 font-bold">Booking #789012</div>
                                    <div class="text-gray-500">Booking Date: 16/09/2022</div>
                                    <div class="text-gray-500">Total: 7500.00 Rupees</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-gray-500">Travel Guide: Jane Smith</div>
                                    <div class="text-gray-500">Location: Kanyakumari</div>
                                    <div class="text-gray-500">Start Date: 28/04/2022</div>
                                </div>
                            </div>
                        </li>
                        <li class="py-4">
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <div class="text-gray-900 font-bold">Booking #345678</div>
                                    <div class="text-gray-500">Booking Date: 2022-03-20</div>
                                    <div class="text-gray-500">Total: 1900.00 Rupees</div>
                                </div>
                                <div class="flex-1">
                                    <div class="text-gray-500">Travel Guide: Bob Johnson</div>
                                    <div class="text-gray-500">Location: Madurai</div>
                                    <div class="text-gray-500">Start Date: 2022-10-01</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default BookingHistory;