function Fan(props) {
  const { navn, alder } = props;
  return (
    <span>
      {navn} ({alder} år)
    </span>
  );
}

export default Fan;
