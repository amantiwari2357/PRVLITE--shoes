import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="mt-6">
          <div>
            <label className="block text-gray-700">User Name Or Email ID <span className="text-red-500">*</span></label>
            <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded-md" placeholder="User Name" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password <span className="text-red-500">*</span></label>
            <input type="password" className="w-full mt-2 p-2 border border-gray-300 rounded-md" placeholder="Password" />
          </div>
          <button type="submit" className="w-full mt-6 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800">LOGIN</button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Please contact our team if you need id and password <Link href="ContactUs" className="text-green-600 hover:underline">Click Here</Link>
        </p>
      </div>
    </div>
  );
}
