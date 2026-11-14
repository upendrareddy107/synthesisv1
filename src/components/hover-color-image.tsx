import Image, { type ImageProps } from "next/image";

/**
 * Photo shown in greyscale; full colour on hover (or keyboard focus within the
 * hover target). Two stacked copies — the colour copy fades in, the grey copy
 * fades out — so only opacity animates.
 *
 * `fill` mode: the wrapper fills its positioned parent.
 * Hover target: this wrapper, or any ancestor with the class `group/photo`.
 */
export function HoverColorImage({ className = "", wrapperClassName = "", alt, ...props }: ImageProps & { wrapperClassName?: string }) {
  const fill = Boolean(props.fill);
  const fade = "transition-opacity duration-(--duration-slow) ease-(--ease-out)";
  return (
    <span className={`group/photo ${fill ? "absolute inset-0" : "relative block"} ${wrapperClassName}`}>
      <Image {...props} alt={alt} className={`${className} grayscale ${fade} group-hover/photo:opacity-0 group-focus-within/photo:opacity-0`} />
      <Image
        {...props}
        alt=""
        aria-hidden="true"
        priority={false}
        className={`${className} ${fill ? "" : "absolute inset-0"} opacity-0 ${fade} group-hover/photo:opacity-100 group-focus-within/photo:opacity-100`}
      />
    </span>
  );
}
