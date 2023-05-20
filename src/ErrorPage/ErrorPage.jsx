import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div className="mt-8 flex flex-col justify-center items-center w-full h-full space-y-4">
      {error && (
        <img
          src="https://i.ibb.co/sVbp78v/error.png"
          style={{ height: 380, width: 500 }}
          alt=""
          className="rounded-xl shadow-lg"
        />
      )}
      <p className="text-error">Error: {error.statusText || error.message}</p>
      <Link to={"/"} className="btn btn-primary">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
