// import styled from "styled-components";

// // hier sollen alle pflanzen dargestellt werden die einen bookmark haben

// export default function MyPlants() {
//   return (
//     <>
//       <h1>My Plants / Page</h1>
//     </>
//   );
// }

// In my-favorite-plants.js

import React from "react";

export default function MyFavoritePlants({ favoritePlants }) {
  return (
    <>
      <h1>My Favorite Plants ojojonmonmo</h1>
      <ul>
        {favoritePlants &&
          favoritePlants.map((plant) => (
            <li key={plant.id}>
              <h2>{plant.title}</h2>
              <img src={plant.picture} width={100} height={149} />
            </li>
          ))}
      </ul>
    </>
  );
}