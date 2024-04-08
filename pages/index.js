import Link from "next/link";

export default function Homepage({ plants }) {
  return (
    <>
      <h2>Welcome to your PlantWorld // index.js</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            <Link href={`/plant-details/${plant.id}`} key={plant.id}>
              <img src={plant.picture} width={100} height={149} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
