import Fan from "./fan";
const Fans = () => {
  return (
    <div>
      <h3> Her er mine fans </h3>
      <ul>
        {fanList.map((fan) => (
          <li>
            (
            <Fan navn={fan.navn} alder={fan.alder} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const rnd = (start) => start + Math.floor(Math.random(30) * 30);

const fanList = [
  {
    navn: "Jønke",
    alder: 43,
  },
  {
    navn: "Fehår",
    alder: 54,
  },
  {
    navn: "Blondie",
    alder: 65,
  },
];

export default Fans;
