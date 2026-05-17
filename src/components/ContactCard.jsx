const ContactCard = ({ icon, title, children }) => (
  <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-amber-500/30 hover:bg-white/[0.07] sm:p-8">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
      {icon}
    </div>
    <h3 className="mb-3 text-lg font-semibold tracking-tight text-amber-400">{title}</h3>
    <div className="flex-1 text-[15px] leading-relaxed text-slate-300 sm:text-base">{children}</div>
  </article>
);

export default ContactCard;
