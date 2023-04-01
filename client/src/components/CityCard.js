export default function CityCard(name, info, image) {
  return (
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
