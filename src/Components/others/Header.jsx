import React from 'react';

const Header = (props ) => {
  const logOutUser = () => {
    // clear the stored user
    localStorage.setItem('loggedInUser', '');
    // lift state back up to App
    props.changeUser('');
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">
          {props.firstName || "Nabanit"} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-400 text-lg font-medium text-white px-5 py-2 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;


// export default Header;
// Components/others/Header.jsx

// export default function Header(props) {
//   // guard against `null`
//   if (!data) return null;

//   const logOutUser = () => {
//     localStorage.setItem('loggedInUser','')
//     // window.location.reload()
//     props.changeUser('')
//   }

//   return (
//     <div className="flex items-end justify-between">
//       <h1 className="text-2xl font-medium">
//         Hello, <br />
//         <span className="text-3xl font-semibold">
//           {data.firstName}
//         </span>
//       </h1>
//       <button onClick={logOutUser} className="bg-red-400 text-lg font-medium text-white px-5 py-2 rounded-md">
//         Log Out
//       </button>
//     </div>
//   );
// }
