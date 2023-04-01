import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center font-ubuntu text-4xl font-bold text-purple-500">
        <img
          alt=""
          className="h-14 w-14"
          src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539"
        />
        <p className="mt-2">XECUTRIP</p>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 ">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
