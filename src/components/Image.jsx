/* eslint-disable react/prop-types */
export default function Image({ src, alt, className }) {
  return (
    <div>
      <img src={src} alt={alt} className={className} />
    </div>
  );
}
