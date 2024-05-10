import React, { useMemo } from "react";
import { SideBar } from "@/components/SideBar/SideBar";
import dynamic from "next/dynamic";

const DEFAULT_CENTER = [43.6532, -79.3832];

export default function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return <Map position={DEFAULT_CENTER} zoom={10} />;
}
