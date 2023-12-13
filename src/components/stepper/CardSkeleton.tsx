"use client";
import Skeleton from "react-loading-skeleton";

interface skeletonProps {
  cards: number;
}
export default function CardSkeleton(props: skeletonProps) {
  return Array(props.cards)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="animate-pulse rounded-md p-5 bg-white/5">
        <Skeleton />
      </div>
    ));
}
