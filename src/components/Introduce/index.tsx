import SectionTitle from "../SectionTitle";
import IntroduceItem from "./IntroduceItem";

import { DataProps } from "@/types";

const Introduce = ({ introduce }: Pick<DataProps, "introduce">) => {
  return (
    <div>
      <SectionTitle>Introduce</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...introduce].reverse().map((Introduce) => (
          <IntroduceItem key={Introduce.id} {...Introduce} />
        ))}
      </div>
    </div>
  );
};

export default Introduce;
