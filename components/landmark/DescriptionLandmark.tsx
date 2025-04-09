const DescriptionLandmark = ({ description }: { description: string }) => {
  return (
    <article className="mt-4">
      <p className="text-muted-foreground leading-loose">{description}</p>
    </article>
  );
};
export default DescriptionLandmark;
