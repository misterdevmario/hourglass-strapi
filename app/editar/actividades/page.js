"use client";
import Activities from "@/components/activities/Activities";
import { useInfo } from "@/context/Context";

export const metadata = {
  title: '...',
  description: '...',
}

const Edit = () => {
  const { info } = useInfo();

  return (
    <div>
        <Activities activities={info.activities} />
    </div>
  );
};

export default Edit;
