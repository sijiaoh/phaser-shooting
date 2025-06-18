export const Button = ({
  disabled = false,
  onClick,
  children,
}: {
  disabled?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}) => {
  const baseClass = "border m-2 p-2";
  const hoverClass = "hover:text-gray-400";
  const activeClass = "active:text-white";
  const transitionClass =
    "disabled:text-white/30 transition duration-150 ease-in-out";
  const className = [baseClass, hoverClass, activeClass, transitionClass].join(
    " ",
  );

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
