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
    <div className="lang-con text-white flex flex-wrap gap-3 max-w-3xl">
      {languages.map(lang => (
        <LangButton
          key={lang.name}
          icon={lang.icon}
          selected={selectedLang.includes(lang.name)}
          onClick={() => onSelect(lang.name)}
        >
          {lang.name}
        </LangButton>
      ))}
    </div>
  );
};

export default Langs;
