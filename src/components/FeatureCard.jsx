function FeatureCard({ title, description, icon: Icon, highlight }) {
  return (
    <div className={`flex flex-col items-center rounded-sm border p-8 text-center transition-all duration-300 ${highlight ? 'border-blue-100 bg-blue-50 shadow-sm hover:border-blue-200' : 'border-transparent bg-slate-50 hover:border-slate-200 hover:bg-white'}`}>
      <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl ${highlight ? 'bg-yale-blue text-white' : 'bg-blue-50 text-yale-blue'}`}>
        <Icon />
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-yale-dark">{title}</h3>
      <p className="text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default FeatureCard;