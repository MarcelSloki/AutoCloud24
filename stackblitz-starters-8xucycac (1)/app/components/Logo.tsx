export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      {/* Mini-Icon (Cloud + 24) optional */}
      <span
        aria-hidden
        className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary text-white font-bold"
      >
        24
      </span>
      {/* Wortmarke */}
      <span className="font-extrabold text-xl tracking-tight">
        <span className="text-gray-800">Auto</span>
        <span className="text-primary">Cloud</span>
        <span className="text-gray-800">24</span>
      </span>
    </div>
  );
}
