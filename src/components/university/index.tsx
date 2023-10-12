import SectionTitle from "../SectionTitle";
import UniversityItem from "./Universityitem";

import { DataProps } from "@/types";

const university = ({ university }: Pick<DataProps, "university">) => {
  return (
    <div>
      <SectionTitle>university</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...university].reverse().map((university) => (
          <UniversityItem key={university.id} {...university} />
        ))}
      </div>
    </div>
  );
};

export default university;
