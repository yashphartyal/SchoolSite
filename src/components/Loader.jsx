import logo from "../assets/logo.jpg";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="loader flex flex-col items-center">
      <img src={logo} className="w-60 h-60 mb-4" alt="Springdale Public School Logo" />
      <h3 className="text-xl font-bold">Welcome to Springdale Public School!</h3>
      <p className="text-lg text-gray-600 mt-2">Preparing Bright Futures for Our Students</p>
    </div>
  </div>
);

export default Loader;
