import LangButton from "../components/ui/langButton";

const Langs = ({ onSelect, selectedLang }) => {
  const languages = [
    { name: "Javascript", icon: "logos/js.png" },
    { name: "Python", icon: "logos/python.png" },
    { name: "CPP", icon: "logos/c-.png" },
    { name: "CSharp", icon: "logos/c-sharp.png" },
    { name: "ReactJS", icon: "logos/react.png" },
    { name: "TypeScript", icon: "logos/typescript.png" },
    { name: "Java", icon: "logos/java.png" },
    { name: "GO", icon: "logos/go.png" },
    { name: "Kotlin", icon: "logos/kotlin.png" },
  ];

  return (
    <div className="lang-con flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
      {languages.map((lang) => (
        <LangButton
          key={lang.name}
          icon={lang.icon}
          selected={selectedLang.includes(lang.name)}
          onClick={() => onSelect(lang.name)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg border 
            ${selectedLang.includes(lang.name) 
              ? "border-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(0,255,120,0.25)]" 
              : "border-green-600/30 hover:border-green-300 hover:bg-green-300/10"}
            text-green-300 font-mono tracking-wider text-sm transition-all duration-150
          `}
        >
          
          {lang.name}
        </LangButton>
      ))}
    </div>
  );
};

export default Langs;
