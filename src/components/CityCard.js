export default function CityCard(name, info, image) {
    return (
        // <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //     <a href="#">
        //         <img class="rounded-t-lg"
        //             src={image}
        //             alt="cityimage" />
        //     </a>
        //     <div class="p-5">
        //         <a href="#">
        //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-purple-600">{name}</h5>
        //         </a>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{info}</p>
        //         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        //             Read more
        //             <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //         </a>
        //     </div>
        // </div>


        // <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        //     <img class="w-50 rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg " style={{ height: "100%" }} src={image} alt="cityimage" />
        //     <div class="flex flex-col justify-between p-4 leading-normal">
        //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //     </div>
        // </a>

        //     //     <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        //     // <img class="w-full rounded-t-lg" width="300" height="200" src={image} alt="cityimage" />
        //     // <div class="flex flex-col justify-between p-4 leading-normal">
        //     //     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        //     //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{info}</p>
        //     // </div>
        // </a>

         <div class="flex flex-wrap -mx-4">
             <div class="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8">
                 <div class="bg-white rounded-lg overflow-hidden shadow-md">
                     <img class="w-full h-48 object-cover" src={image} alt="City image" />
                     <div class="p-4">
                         <h2 class="text-xl font-bold mb-2">{name}</h2>
                         <p class="text-gray-700 text-base">{info}</p>
                     </div>
                 </div>
             </div>
         </div>





            );
}
