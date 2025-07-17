import { formatNumberWithCommas } from "@src/utils/format/formatNumberWithCommas"

export const formatNumberSmall = (num: number): string => {
  if (num >= 1000000 && num < 1000000000) {
    return `${Math.floor(num / 1000000)}M+`;
  } else if (num >= 1000000000) {
    return `${Math.floor(num / 1000000000)}B+`;
  } else {
    return formatNumberWithCommas(num);
  }
}