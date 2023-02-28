import { Steps } from "antd";
import { useState } from "react";

interface JobDetailPageProps {}

const JobDetailPage: React.FC<JobDetailPageProps> = ({}) => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <div>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items={[
          {
            status: "finish",
            title: "finish 1",
          },
          {
            status: "finish",
            title: "finish 2",
          },
          {
            status: "process",
            title: "current process",
          },
          {
            status: "wait",
            title: "wait",
            disabled: true,
          },
        ]}
      />
    </div>
  );
};

export default JobDetailPage;
