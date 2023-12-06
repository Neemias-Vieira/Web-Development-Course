type CardProps = {
  name: string;
  age: number;
};

export function CardProfile({ name, age }: Props) {
  return (
    <>
      <strong>{name}</strong>
      <p>{age}</p>
    </>
  );
}
