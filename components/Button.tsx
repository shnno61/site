interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  ariaLabel: string;
  variant: 'btn_gradient' | 'btn_solid';
  children: React.ReactNode;
  className?: string; // Add optional className prop
  icon?:string;
}

const Button = ({ type, title, ariaLabel, variant, children, className }: ButtonProps) => {
  const baseClasses = "text-white rounded-full shadow-lg transition-transform duration-200";
  const solidClasses = "bg-blue-600 hover:bg-blue-700";

  return (
    <button
      type={type}
      title={title}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variant === 'btn_solid' ? solidClasses : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
