
import Typography from "@/components/atoms/Typography";

interface Blocks {
  block: any;
  index: number;
}

export default function LandingClients({ block }: Blocks) {
  const currentLang = localStorage.getItem("lang");
  const selectedBlock = block.find((block: any) => block.lang === currentLang);

  return (
    <section id={selectedBlock.__component}>
      <Typography>{selectedBlock.block.title}</Typography>
    </section>
  );
}

