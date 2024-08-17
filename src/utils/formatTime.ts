import { formatDistanceToNow } from "date-fns";

export function timeAgo(dateString: string) {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
}
