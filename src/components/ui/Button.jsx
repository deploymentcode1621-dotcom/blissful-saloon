import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const VARIANTS = {
  primary: "bg-plum text-ivory hover:bg-charcoal",
  secondary: "bg-transparent text-plum border border-plum hover:bg-plum hover:text-ivory",
  light: "bg-ivory text-plum hover:bg-blush",
  ghost: "bg-transparent text-ivory border border-ivory/60 hover:bg-ivory hover:text-plum",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const classes = `group inline-flex items-center gap-2.5 px-7 py-3.5 eyebrow transition-colors duration-300 ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
