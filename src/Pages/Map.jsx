export default function GoogleMap() {
  return (
    <div className="w-full h-60">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
