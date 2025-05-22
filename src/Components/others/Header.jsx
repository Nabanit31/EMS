// Header.jsx
import React from 'react';

// const Header = ({ data }) => (
//   <div className="flex items-end justify-between">
//     <h1 className="text-2xl font-medium">
//       Hello, <br />
//       <span className="text-3xl font-semibold">
//         {data}
//       </span>
//     </h1>
//     <button className="bg-red-400 text-lg font-medium text-white px-5 py-2 rounded-md">
//       Log Out
//     </button>
//   </div>
// );

// export default Header;
// Components/others/Header.jsx

export default function Header({ data }) {
  // guard against `null`
  if (!data) return null;

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">
          {data.firstName}
        </span>
      </h1>
      <button className="bg-red-400 text-lg font-medium text-white px-5 py-2 rounded-md">
        Log Out
      </button>
    </div>
  );
}
