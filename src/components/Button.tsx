import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose/50 focus:ring-offset-2";

  const variants = {
    primary: "bg-rose text-white hover:bg-rose-dark shadow-soft",
    secondary:
      "border-2 border-brown text-brown bg-transparent hover:bg-brown/5",
  };

  const classes = `${base} ${variants[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
