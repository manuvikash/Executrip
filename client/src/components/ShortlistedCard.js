export default function Card(name, image, lang, age, exp) {
    return (
      <div class="w-full max-w-sm bg-white rounded-lg border border-grey-200 shadow-md dark:bg-grey-800 dark:border-grey-700 mt-10">
        <div class="flex flex-col items-center py-10">
          <img
            class="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={image}
            alt="guide image"
          />
          <h5 class="mb-1 text-xl font-medium text-grey-900 dark:text-white">
            {name}
          </h5>
          <span class="text-sm text-grey-500 dark:text-grey-400 text-center">
            <span class="font-bold">Languages: </span>
            {lang}
            <br />
            <span class="font-bold">Age: </span>
            {age}
            <br />
            <span class="font-bold">Work experience: </span>
            {exp} years
          </span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Book
            </a>
          </div>
        </div>
      </div>
    );
  }
  