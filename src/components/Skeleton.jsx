import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonColor() {
  return (
    <Skeleton
      sx={{ bgcolor: "#1a263d" }}
      variant="rectangular"
      width={210}
      height={118}
    />
  );
}
