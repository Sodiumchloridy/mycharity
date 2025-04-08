interface StatusBadgeProps {
  status: string;
}

export function getStatusBadgeClass(status: string) {
  switch (status) {
    case "Distributed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Allocated":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Invested":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Processing":
    case "In Progress":
    case "Procurement":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Received":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    case "Impact Reported":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
  }
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
        status
      )}`}
    >
      {status}
    </span>
  );
}
