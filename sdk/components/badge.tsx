"use client";

import * as React from "react";

export default function Badge() {
  return (
    <div className="px-2 py-1.5 text-xs flex justify-center items-center gap-2 text-slate-500">
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="dark:fill-white"
          d="M1.85934 8.12717C4.83035 7.63774 7.15738 5.18153 7.64675 2.21235L7.81055 0.78412C7.85055 0.556715 7.6977 0.241943 7.41023 0.263772C5.16516 0.43843 3.04921 1.17893 1.86845 1.66108C1.2844 1.89938 0.902344 2.46887 0.902344 3.1002V7.7578C0.902344 8.03432 1.14978 8.24356 1.42269 8.19989L1.85934 8.12894V8.12717Z"
          fill="black"
        />
        <path
          className="dark:fill-white"
          d="M9.07722 2.20922C9.56665 5.1803 11.8936 7.63467 14.8647 8.12404L15.3013 8.19499C15.5742 8.2405 15.8217 8.02948 15.8217 7.7529V3.0953C15.8217 2.46397 15.4396 1.89631 14.8556 1.65618C13.6766 1.17403 11.5589 0.433537 9.31374 0.258878C9.02627 0.237043 8.87709 0.555423 8.91165 0.779221L9.07539 2.20745L9.07722 2.20922Z"
          fill="black"
        />
        <path
          className="dark:fill-white"
          d="M14.8639 9.42947C10.8048 10.23 8.91992 12.9281 8.91992 18.0369C8.91992 18.2935 9.17467 18.47 9.38752 18.3281C11.2542 17.069 15.3623 13.7833 15.7863 9.67143C15.8027 9.15295 15.1549 9.39675 14.8639 9.42947Z"
          fill="black"
        />
        <path
          className="dark:fill-white"
          d="M1.8607 9.42952C5.91975 10.23 7.80463 12.9282 7.80463 18.037C7.80463 18.2935 7.54988 18.47 7.33703 18.3281C5.47038 17.0691 1.36222 13.7833 0.938293 9.67148C0.92192 9.15294 1.56962 9.39673 1.8607 9.42952Z"
          fill="black"
        />
      </svg>
    </div>
  );
}