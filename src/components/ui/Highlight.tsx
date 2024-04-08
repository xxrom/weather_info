export type Highlight = {
  children: React.ReactNode;
  fontColor?: string;
  fontWeight?: string;
  className?: string;
};

export const Highlight = ({
  children,
  fontColor = "text-purple-800 dark:text-purple-400",
  fontWeight = "font-bold",
  className = "",
}: Highlight) => (
  <span className={`text-lg ${fontColor} ${fontWeight} ${className}`}>
    {children}
  </span>
);
