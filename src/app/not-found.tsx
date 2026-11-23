import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center bg-[#F8F4F0]">
      <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#8A7168] mb-4">
        Erreur 404
      </span>
      <h1 className="font-display text-4xl sm:text-5xl text-[#1E1D1B] mb-6">
        Page introuvable
      </h1>
      <p className="max-w-md font-sans text-sm text-[#8A7168] mb-8 leading-relaxed">
        La page que vous recherchez n&apos;existe pas ou a été déplacée. Découvrez nos collections et rituels de beauté.
      </p>
      <Link
        href="/"
        className="inline-flex h-12 items-center justify-center rounded-full bg-[#1E1D1B] px-8 font-sans text-xs font-semibold tracking-wider text-white uppercase transition-colors duration-300 hover:bg-[#393431]"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
