interface SvgIconProps {
  svg: string;
  className?: string;
}

const SvgIcon = ({ svg, className }: SvgIconProps) => {
  const svgWithColor = svg.replace("<svg", '<svg fill="currentColor"');

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgWithColor }}
    />
  );
};

export default SvgIcon;
