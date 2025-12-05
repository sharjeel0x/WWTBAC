const QUESTIONS = {
  easy: {
    javascript: [
      {
        q: "Which keyword declares a function?",
        options: ["func", "function", "def", "fn"],
        correct: "function",
      },
      {
        q: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "const", "def"],
        correct: "let",
      },
      {
        q: "Which operator tests strict equality (no type coercion)?",
        options: ["==", "===", "=", "=>"],
        correct: "===",
      },
      {
        q: "How do you write a single-line comment?",
        options: ["<!-- -->", "//", "#", "/* */"],
        correct: "//",
      },
      {
        q: "Which method logs output to the console?",
        options: ["print()", "console.log()", "echo()", "log()"],
        correct: "console.log()",
      },
      {
        q: "How do you create an array?",
        options: ["{}", "()", "[]", "<>"],
        correct: "[]",
      },
      {
        q: "Which value represents 'no value'?",
        options: ["null", "0", "''", "NaN"],
        correct: "null",
      },
      {
        q: "Which primitive type holds true/false?",
        options: ["String", "Number", "Boolean", "Object"],
        correct: "Boolean",
      },
      {
        q: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: "push()",
      },
      {
        q: "Which value means 'not a number'?",
        options: ["NaN", "nil", "None", "null"],
        correct: "NaN",
      },
      {
        q: "Which template syntax allows interpolation?",
        options: [
          '"Hello ${name}"',
          "'Hello ' + name",
          "`Hello ${name}`",
          "<Hello>{name}</Hello>",
        ],
        correct: "`Hello ${name}`",
      },
      {
        q: "Which keyword creates a constant binding?",
        options: ["const", "let", "var", "fixed"],
        correct: "const",
      },
      {
        q: "What does JSON.stringify do?",
        options: [
          "Parse JSON",
          "Convert object to JSON string",
          "Send JSON over network",
          "Create JSON file",
        ],
        correct: "Convert object to JSON string",
      },
      {
        q: "Which loop iterates while a condition is true?",
        options: ["for", "while", "doOnce", "repeat"],
        correct: "while",
      },
      {
        q: "How do you get the length of an array arr?",
        options: ["arr.size", "arr.length", "length(arr)", "arr.count"],
        correct: "arr.length",
      },
      {
        q: "Which keyword declares a variable with function scope (old style)?",
        options: ["let", "var", "const", "local"],
        correct: "var",
      },
      {
        q: "Which built-in object represents dates and times?",
        options: ["Time", "Clock", "Date", "Moment"],
        correct: "Date",
      },
      {
        q: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "splice()"],
        correct: "pop()",
      },
      {
        q: "Which syntax creates an object literal?",
        options: ["[]", "()", "{}", "<>"],
        correct: "{}",
      },
      {
        q: "Which keyword stops a loop immediately?",
        options: ["stop", "break", "exit", "continue"],
        correct: "break",
      },
    ],

    python: [
      {
        q: "Which function prints to standard output?",
        options: ["echo()", "print()", "write()", "puts()"],
        correct: "print()",
      },
      {
        q: "Which character starts a single-line comment?",
        options: ["//", "#", "/*", "<!--"],
        correct: "#",
      },
      {
        q: "How do you create a list?",
        options: ["()", "[]", "{}", "<>"],
        correct: "[]",
      },
      {
        q: "Which keyword defines a function?",
        options: ["func", "def", "function", "fn"],
        correct: "def",
      },
      {
        q: "Which data type is immutable: list or tuple?",
        options: ["list", "tuple", "both", "none"],
        correct: "tuple",
      },
      {
        q: "Which value means 'no value' in Python?",
        options: ["null", "None", "nil", "NaN"],
        correct: "None",
      },
      {
        q: "How do you get the length of a string s?",
        options: ["len(s)", "s.length", "length(s)", "size(s)"],
        correct: "len(s)",
      },
      {
        q: "Which loop iterates over sequence items?",
        options: ["for", "while", "repeat", "foreach"],
        correct: "for",
      },
      {
        q: "How do you import the math module?",
        options: [
          "import math",
          "require('math')",
          "using math",
          "include math",
        ],
        correct: "import math",
      },
      {
        q: "Which operator tests equality?",
        options: ["=", "==", "===", ":="],
        correct: "==",
      },
      {
        q: "How do you create a dictionary?",
        options: ["[]", "()", "{}", "dict()"],
        correct: "{}",
      },
      {
        q: "Which method appends an item to a list?",
        options: ["add()", "push()", "append()", "insert()"],
        correct: "append()",
      },
      {
        q: "Which built-in type holds True/False?",
        options: ["Int", "Bool", "Boolean", "bool"],
        correct: "bool",
      },
      {
        q: "Which keyword declares a constant by convention?",
        options: ["const", "final", "CAPS name", "let"],
        correct: "CAPS name",
      },
      {
        q: "Which slicing gets first 3 items from list L?",
        options: ["L[:3]", "L[3:]", "L[0:2]", "L[-3:]"],
        correct: "L[:3]",
      },
      {
        q: "Which method converts string '123' to int?",
        options: [
          "int('123')",
          "parseInt('123')",
          "to_int('123')",
          "Number('123')",
        ],
        correct: "int('123')",
      },
      {
        q: "Which statement handles exceptions?",
        options: ["try/except", "try/catch", "catch/except", "handle/except"],
        correct: "try/except",
      },
      {
        q: "How do you write a multi-line string?",
        options: [
          "'a\nb'",
          "'''multi\nline'''",
          "`multi\nline`",
          '"multi\nline"',
        ],
        correct: "'''multi\nline'''",
      },
      {
        q: "Which function returns iterable's iterator?",
        options: ["iter()", "next()", "get()", "iterator()"],
        correct: "iter()",
      },
      {
        q: "Which builtin returns the type of an object?",
        options: ["typeof()", "type()", "classOf()", "instanceOf()"],
        correct: "type()",
      },
    ],

    cpp: [
      {
        q: "Which symbol ends a statement in C++?",
        options: [";", ".", ":", ","],
        correct: ";",
      },
      {
        q: "Which header is needed for input/output streams?",
        options: ["<io>", "<iostream>", "<stdio>", "<stream>"],
        correct: "<iostream>",
      },
      {
        q: "How do you write a single-line comment?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correct: "//",
      },
      {
        q: "What keyword defines a constant value?",
        options: ["let", "const", "final", "static"],
        correct: "const",
      },
      {
        q: "Which type stores whole numbers?",
        options: ["float", "double", "int", "char"],
        correct: "int",
      },
      {
        q: "Which operator is used for address-of?",
        options: ["&", "*", "@", "$"],
        correct: "&",
      },
      {
        q: "Which operator is used to dereference a pointer?",
        options: ["&", "*", "->", "."],
        correct: "*",
      },
      {
        q: "How do you include a header file?",
        options: [
          "include <file>",
          "#include <file>",
          "import <file>",
          "using <file>",
        ],
        correct: "#include <file>",
      },
      {
        q: "Which is a C++ string class?",
        options: ["CString", "std::string", "String", "str"],
        correct: "std::string",
      },
      {
        q: "Which loop repeats at least once?",
        options: ["for", "while", "do...while", "repeat"],
        correct: "do...while",
      },
      {
        q: "What does 'std::' denote?",
        options: [
          "standard namespace",
          "static type",
          "string type",
          "system directory",
        ],
        correct: "standard namespace",
      },
      {
        q: "Which keyword creates a new object on heap?",
        options: ["new", "malloc", "alloc", "create"],
        correct: "new",
      },
      {
        q: "Which header provides malloc/free (C style)?",
        options: ["<cstdlib>", "<stdlib.h>", "<memory>", "<malloc.h>"],
        correct: "<cstdlib>",
      },
      {
        q: "Which type holds a single character?",
        options: ["char", "string", "int", "byte"],
        correct: "char",
      },
      {
        q: "Which operator accesses member via pointer?",
        options: [".", "->", "::", "=>"],
        correct: "->",
      },
      {
        q: "Which keyword starts a class definition?",
        options: ["class", "struct", "object", "type"],
        correct: "class",
      },
      {
        q: "Which container is ordered and dynamic array-like?",
        options: ["std::list", "std::vector", "std::map", "std::set"],
        correct: "std::vector",
      },
      {
        q: "Which is the C++ entry point function?",
        options: ["start()", "main()", "init()", "begin()"],
        correct: "main()",
      },
      {
        q: "Which header provides std::cout?",
        options: ["<cout>", "<iostream>", "<ostream>", "<stdio.h>"],
        correct: "<iostream>",
      },
      {
        q: "Which is used to compile C++ code in command line (g++)?",
        options: ["gcc", "g++", "clang", "javac"],
        correct: "g++",
      },
    ],

    csharp: [
      {
        q: "Which keyword declares a class in C#?",
        options: ["create", "class", "struct", "type"],
        correct: "class",
      },
      {
        q: "Which symbol starts a single-line comment?",
        options: ["//", "#", "/*", "<!--"],
        correct: "//",
      },
      {
        q: "Which method prints to console?",
        options: ["Console.WriteLine()", "print()", "System.log()", "echo()"],
        correct: "Console.WriteLine()",
      },
      {
        q: "Which type stores whole numbers?",
        options: ["double", "float", "int", "string"],
        correct: "int",
      },
      {
        q: "Which keyword declares a constant field?",
        options: ["const", "let", "var", "final"],
        correct: "const",
      },
      {
        q: "Which namespace contains basic system classes?",
        options: ["System", "Sys", "Core", "Base"],
        correct: "System",
      },
      {
        q: "Which access modifier makes a member public?",
        options: ["private", "protected", "public", "internal"],
        correct: "public",
      },
      {
        q: "Which keyword creates a new object instance?",
        options: ["new", "create", "instance", "construct"],
        correct: "new",
      },
      {
        q: "Which type stores text?",
        options: ["char", "Text", "string", "StringBuilder"],
        correct: "string",
      },
      {
        q: "Which loop iterates a known number of times?",
        options: ["while", "for", "do", "repeat"],
        correct: "for",
      },
      {
        q: "Which is the C# entry point signature?",
        options: ["start()", "Main()", "main()", "run()"],
        correct: "Main()",
      },
      {
        q: "Which keyword handles exceptions?",
        options: ["try/catch", "try/except", "catch/try", "handle/except"],
        correct: "try/catch",
      },
      {
        q: "Which collection stores key-value pairs?",
        options: ["List", "Dictionary", "Array", "Stack"],
        correct: "Dictionary",
      },
      {
        q: "Which keyword allows inheritance from a base class?",
        options: [": base", "extends", "inherits", ":"],
        correct: ":",
      },
      {
        q: "How do you declare an interface?",
        options: [
          "interface IName {}",
          "class IName {}",
          "struct IName {}",
          "type IName {}",
        ],
        correct: "interface IName {}",
      },
      {
        q: "Which method converts string to int?",
        options: ["int.Parse()", "toInt()", "parseInt()", "Convert.toInt()"],
        correct: "int.Parse()",
      },
      {
        q: "Which modifier restricts access to the same assembly?",
        options: ["private", "public", "internal", "protected"],
        correct: "internal",
      },
      {
        q: "Which type is used for true/false values?",
        options: ["Boolean", "bool", "Bool", "binary"],
        correct: "bool",
      },
      {
        q: "Which keyword removes an object reference (GC handles memory)?",
        options: ["delete", "remove", "null", "dispose"],
        correct: "null",
      },
      {
        q: "Which collection provides FIFO behavior?",
        options: ["Stack", "Queue", "List", "Dictionary"],
        correct: "Queue",
      },
    ],

    reactjs: [
      {
        q: "What library is React primarily for?",
        options: ["Backend APIs", "Styling", "Building UIs", "Database"],
        correct: "Building UIs",
      },
      {
        q: "What syntax lets you write HTML-like code in JS?",
        options: ["HTMLJS", "JSX", "XML", "ReactML"],
        correct: "JSX",
      },
      {
        q: "Which hook manages component state?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        correct: "useState",
      },
      {
        q: "Which hook runs side-effects?",
        options: ["useState", "useEffect", "useReducer", "useContext"],
        correct: "useEffect",
      },
      {
        q: "How do you pass data from parent to child?",
        options: ["Props", "State", "Context", "Hooks"],
        correct: "Props",
      },
      {
        q: "React components must return what from render?",
        options: ["string", "JSX/element", "number", "boolean"],
        correct: "JSX/element",
      },
      {
        q: "Which file typically contains React component code?",
        options: [".py", ".js", ".java", ".rb"],
        correct: ".js",
      },
      {
        q: "Which method creates a component in class-based React?",
        options: ["render()", "display()", "show()", "mount()"],
        correct: "render()",
      },
      {
        q: "Which prop holds child elements passed to a component?",
        options: ["children", "kids", "items", "nodes"],
        correct: "children",
      },
      {
        q: "How do you create a list of elements from an array?",
        options: ["map()", "forEach()", "filter()", "slice()"],
        correct: "map()",
      },
      {
        q: "Which attribute gives a unique ID for list items for reconciliation?",
        options: ["id", "key", "unique", "ref"],
        correct: "key",
      },
      {
        q: "Which hook returns a mutable ref object?",
        options: ["useState", "useRef", "useEffect", "useMemo"],
        correct: "useRef",
      },
      {
        q: "What does lifting state up mean?",
        options: [
          "Moving state to parent",
          "Deleting state",
          "Saving to DB",
          "Using localStorage",
        ],
        correct: "Moving state to parent",
      },
      {
        q: "Which prop type is used to control a form input value externally?",
        options: ["defaultValue", "value", "initial", "inputValue"],
        correct: "value",
      },
      {
        q: "Which method prevents default browser behavior in event handler?",
        options: [
          "stopPropagation()",
          "preventDefault()",
          "cancel()",
          "halt()",
        ],
        correct: "preventDefault()",
      },
      {
        q: "What describes a controlled component?",
        options: [
          "Value stored in DOM",
          "Value controlled by React state",
          "Value uncontrolled",
          "Readonly",
        ],
        correct: "Value controlled by React state",
      },
      {
        q: "Which higher-level API helps avoid prop drilling?",
        options: ["Redux", "Context API", "Router", "Hooks"],
        correct: "Context API",
      },
      {
        q: "Which lifecycle happens after component mounts (class)?",
        options: [
          "componentWillMount",
          "componentDidMount",
          "componentWillUnmount",
          "componentDidUpdate",
        ],
        correct: "componentDidMount",
      },
      {
        q: "Which package commonly used for routing in React apps?",
        options: ["react-router", "next-router", "route-js", "react-path"],
        correct: "react-router",
      },
      {
        q: "Which hook memoizes expensive calculations?",
        options: ["useMemo", "useCallback", "useRef", "useEffect"],
        correct: "useMemo",
      },
    ],

    typescript: [
      {
        q: "What does TypeScript add to JavaScript?",
        options: ["AI features", "Static typing", "Routing", "Database"],
        correct: "Static typing",
      },
      {
        q: "Which extension is for TypeScript files?",
        options: [".js", ".ts", ".jsx", ".py"],
        correct: ".ts",
      },
      {
        q: "Which keyword declares an interface?",
        options: ["interface", "type", "class", "struct"],
        correct: "interface",
      },
      {
        q: "Which type annotation represents textual data?",
        options: ["number", "string", "bool", "text"],
        correct: "string",
      },
      {
        q: "How do you indicate an optional property?",
        options: ["prop?", "optional prop", "prop!", "prop*"],
        correct: "prop?",
      },
      {
        q: "What is a union type example?",
        options: [
          "string | number",
          "any & all",
          "one or the other",
          "string/number",
        ],
        correct: "string | number",
      },
      {
        q: "Which any-like type bypasses type checking?",
        options: ["unknown", "any", "flex", "dynamic"],
        correct: "any",
      },
      {
        q: "Which tool compiles TS to JS?",
        options: ["tsc", "babel", "webpack", "rollup"],
        correct: "tsc",
      },
      {
        q: "What does 'readonly' do on a property?",
        options: [
          "Makes mutable",
          "Prevents reassignment",
          "Deletes property",
          "Makes private",
        ],
        correct: "Prevents reassignment",
      },
      {
        q: "Which TS feature models array of known length?",
        options: ["tuple", "array", "list", "vector"],
        correct: "tuple",
      },
      {
        q: "Which operator extracts a property type keys?",
        options: ["keyof", "keys", "propof", "typeof"],
        correct: "keyof",
      },
      {
        q: "Which keyword narrows types at runtime safely?",
        options: ["as", "is", "in", "instanceof"],
        correct: "instanceof",
      },
      {
        q: "Which utility constructs a type from keys?",
        options: ["Pick", "Select", "Choose", "Map"],
        correct: "Pick",
      },
      {
        q: "What does 'void' indicate for a function?",
        options: [
          "Returns nothing",
          "Returns undefined",
          "Returns any",
          "Returns null",
        ],
        correct: "Returns nothing",
      },
      {
        q: "Which type ensures a value is never null/undefined?",
        options: ["nonNullable", "Required", "NotNull", "SafeType"],
        correct: "Required",
      },
      {
        q: "How do you annotate a function parameter x as number?",
        options: ["x:number", "num x", "number x", "x->number"],
        correct: "x:number",
      },
      {
        q: "Which TS feature merges declarations of same name?",
        options: [
          "Declaration merging",
          "Union merging",
          "Type merging",
          "Module merging",
        ],
        correct: "Declaration merging",
      },
      {
        q: "Which keyword lets you assert a type at compile time?",
        options: ["as", "assert", "force", "cast"],
        correct: "as",
      },
      {
        q: "Which type is preferable to 'any' for safer unknown values?",
        options: ["unknown", "any", "safe", "object"],
        correct: "unknown",
      },
      {
        q: "Which TS file compiles to JS and declaration files optionally?",
        options: [".d.ts", ".ts", ".tsx", ".js"],
        correct: ".ts",
      },
    ],

    java: [
      {
        q: "Which keyword defines a class?",
        options: ["object", "class", "struct", "type"],
        correct: "class",
      },
      {
        q: "Which method prints to standard output?",
        options: ["System.out.println()", "print()", "console.log()", "echo()"],
        correct: "System.out.println()",
      },
      {
        q: "What is the JVM?",
        options: [
          "Java Virtual Machine",
          "Java Variable Manager",
          "Java Version Module",
          "Java Value Machine",
        ],
        correct: "Java Virtual Machine",
      },
      {
        q: "Which access modifier makes members accessible everywhere?",
        options: ["private", "protected", "public", "internal"],
        correct: "public",
      },
      {
        q: "Which primitive holds decimal numbers?",
        options: ["int", "double", "char", "boolean"],
        correct: "double",
      },
      {
        q: "Which keyword creates a new object?",
        options: ["new", "create", "instance", "alloc"],
        correct: "new",
      },
      {
        q: "Which method signature is entry point?",
        options: [
          "public static void main(String[] args)",
          "main()",
          "start()",
          "public void main()",
        ],
        correct: "public static void main(String[] args)",
      },
      {
        q: "Which collection is key-value based?",
        options: ["List", "Set", "Map", "Queue"],
        correct: "Map",
      },
      {
        q: "Which keyword prevents inheritance?",
        options: ["sealed", "final", "private", "static"],
        correct: "final",
      },
      {
        q: "Which interface represents a runnable task?",
        options: ["Callable", "Runnable", "Task", "Job"],
        correct: "Runnable",
      },
      {
        q: "Which type stores true/false?",
        options: ["Boolean", "bool", "boolean", "Binary"],
        correct: "boolean",
      },
      {
        q: "Which class represents text sequence?",
        options: ["String", "Text", "CharSeq", "Str"],
        correct: "String",
      },
      {
        q: "Which exception must be declared or caught (checked)?",
        options: [
          "RuntimeException",
          "IOException",
          "Error",
          "NullPointerException",
        ],
        correct: "IOException",
      },
      {
        q: "Which package holds basic utilities like List?",
        options: ["java.util", "java.core", "java.base", "java.lang"],
        correct: "java.util",
      },
      {
        q: "Which keyword marks inheritance from a superclass?",
        options: ["inherits", "extends", "implements", ":"],
        correct: "extends",
      },
      {
        q: "How do you declare a constant in Java (convention)?",
        options: ["final", "const", "immutable", "static const"],
        correct: "final",
      },
      {
        q: "Which operator compares object references for equality?",
        options: ["==", "equals()", "===", "is"],
        correct: "==",
      },
      {
        q: "Which keyword implements an interface?",
        options: ["extends", "implements", "uses", "inherits"],
        correct: "implements",
      },
      {
        q: "Which method returns length of array arr?",
        options: ["arr.length()", "arr.size()", "arr.length", "length(arr)"],
        correct: "arr.length",
      },
      {
        q: "Which primitive type stores single characters?",
        options: ["String", "char", "Character", "byte"],
        correct: "char",
      },
    ],

    go: [
      {
        q: "Which file extension do Go files use?",
        options: [".go", ".golang", ".g", ".gomod"],
        correct: ".go",
      },
      {
        q: "Which keyword declares a variable?",
        options: ["let", "var", "const", "def"],
        correct: "var",
      },
      {
        q: "Which built-in type is used for integers?",
        options: ["int", "number", "integer", "long"],
        correct: "int",
      },
      {
        q: "Which statement begins a function?",
        options: ["fn", "func", "function", "def"],
        correct: "func",
      },
      {
        q: "Which keyword declares a constant?",
        options: ["const", "final", "readonly", "static"],
        correct: "const",
      },
      {
        q: "Which type holds true/false?",
        options: ["boolean", "bool", "Bool", "bit"],
        correct: "bool",
      },
      {
        q: "How do you format a package-level executable program?",
        options: ["package main", "package app", "package exec", "package run"],
        correct: "package main",
      },
      {
        q: "Which function prints to stdout?",
        options: ["fmt.Print()", "print()", "console.log()", "echo()"],
        correct: "fmt.Print()",
      },
      {
        q: "Which symbol starts a single-line comment in Go?",
        options: ["#", "//", "/*", "<!--"],
        correct: "//",
      },
      {
        q: "Which built-in data structure is a dynamic array-like?",
        options: ["list", "slice", "arraylist", "vector"],
        correct: "slice",
      },
      {
        q: "Which keyword starts a goroutine call?",
        options: ["go", "goroutine", "spawn", "async"],
        correct: "go",
      },
      {
        q: "What does 'defer' do?",
        options: [
          "Schedules a call at function end",
          "Cancels function",
          "Runs parallel",
          "Immediate return",
        ],
        correct: "Schedules a call at function end",
      },
      {
        q: "Which type denotes a string?",
        options: ["Str", "text", "string", "String"],
        correct: "string",
      },
      {
        q: "Which built-in maps keys to values?",
        options: ["slice", "map", "struct", "array"],
        correct: "map",
      },
      {
        q: "Which keyword declares an interface type?",
        options: ["interface", "type", "struct", "class"],
        correct: "type",
      },
      {
        q: "Which function converts int to string via fmt?",
        options: ["strconv.Itoa", "intToString", "fmt.Itoa", "convert.Int"],
        correct: "strconv.Itoa",
      },
      {
        q: "Which operator is used to take address of a variable?",
        options: ["*", "&", "@", "$"],
        correct: "&",
      },
      {
        q: "Which keyword indicates package import?",
        options: ["include", "import", "require", "using"],
        correct: "import",
      },
      {
        q: "Which statement iterates over slice with index and value?",
        options: [
          "for i := range s",
          "for i, v := range s",
          "foreach",
          "for in",
        ],
        correct: "for i, v := range s",
      },
      {
        q: "Which built-in type groups fields together like a record?",
        options: ["class", "struct", "type struct", "map"],
        correct: "struct",
      },
    ],

    kotlin: [
      {
        q: "Which keyword declares a read-only variable in Kotlin?",
        options: ["let", "val", "var", "const"],
        correct: "val",
      },
      {
        q: "Which keyword declares a mutable variable?",
        options: ["val", "var", "let", "mutable"],
        correct: "var",
      },
      {
        q: "Which function prints to console in Kotlin?",
        options: ["println()", "console.log()", "print()", "echo()"],
        correct: "println()",
      },
      {
        q: "Which type represents text?",
        options: ["String", "Text", "char", "Str"],
        correct: "String",
      },
      {
        q: "Which has null-safety in Kotlin?",
        options: [
          "All types are nullable by default",
          "Types are non-null by default",
          "No null-safety",
          "Only primitives are safe",
        ],
        correct: "Types are non-null by default",
      },
      {
        q: "Which structure defines a simple data holder with generated methods?",
        options: ["data class", "class", "struct", "record"],
        correct: "data class",
      },
      {
        q: "Which keyword defines a function?",
        options: ["function", "def", "fun", "fn"],
        correct: "fun",
      },
      {
        q: "Which operator checks equality in Kotlin?",
        options: ["==", "===", "=", "equals()"],
        correct: "==",
      },
      {
        q: "How do you declare a nullable type for Int?",
        options: ["Int?", "Int!", "nullable Int", "Int|null"],
        correct: "Int?",
      },
      {
        q: "Which collection is immutable by default?",
        options: ["MutableList", "List", "ArrayList", "MutableSet"],
        correct: "List",
      },
      {
        q: "Which keyword creates a singleton-like object?",
        options: ["object", "singleton", "static", "companion"],
        correct: "object",
      },
      {
        q: "Where do you put top-level functions in Kotlin file?",
        options: [
          "Inside class only",
          "Top-level in file",
          "Inside object only",
          "Inside package only",
        ],
        correct: "Top-level in file",
      },
      {
        q: "Which method concatenates strings with templates?",
        options: ["String.format", "template()", "$variable", "concat()"],
        correct: "$variable",
      },
      {
        q: "Which keyword defines a companion object inside a class?",
        options: ["companion", "static", "object", "inner"],
        correct: "companion",
      },
      {
        q: "Which function checks size of a collection col?",
        options: ["col.size", "col.length", "size(col)", "col.count"],
        correct: "col.size",
      },
      {
        q: "Which modifier marks a function as inline?",
        options: ["inline", "fast", "quick", "in"],
        correct: "inline",
      },
      {
        q: "Which statement declares a package at top of file?",
        options: [
          "package com.example",
          "pkg com.example",
          "module com.example",
          "namespace com.example",
        ],
        correct: "package com.example",
      },
      {
        q: "Which loop iterates over a range?",
        options: [
          "for (i in 1..10)",
          "for i = 1 to 10",
          "foreach",
          "while range",
        ],
        correct: "for (i in 1..10)",
      },
      {
        q: "Which keyword makes a function extension to a type?",
        options: [
          "extend",
          "extension",
          "fun with receiver",
          "fun Type.function()",
        ],
        correct: "fun Type.function()",
      },
      {
        q: "Which type is used for true/false values?",
        options: ["Bool", "boolean", "Boolean", "bool"],
        correct: "Boolean",
      },
    ],
  },

  normal: {
    javascript: [
      {
        q: "What is event bubbling?",
        options: [
          "Event moves from parent to child",
          "Event moves from child to parent",
          "Event is canceled",
          "Event is duplicated",
        ],
        correct: "Event moves from child to parent",
      },
      {
        q: "What's the difference between map() and forEach() on arrays?",
        options: [
          "map() returns a new array; forEach() returns undefined",
          "forEach() returns a new array; map() returns undefined",
          "map() mutates original array; forEach() doesn't",
          "They are identical",
        ],
        correct: "map() returns a new array; forEach() returns undefined",
      },
      {
        q: "What is a Promise in JavaScript?",
        options: [
          "A synchronous loop",
          "A value that may be available now or later",
          "A DOM API",
          "A memory allocator",
        ],
        correct: "A value that may be available now or later",
      },
      {
        q: "Which method is used to parse JSON into an object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.toObject()",
          "JSON.decode()",
        ],
        correct: "JSON.parse()",
      },
      {
        q: "What does `Array.prototype.reduce()` do?",
        options: [
          "Transforms array into single value using reducer",
          "Removes last element",
          "Copies array shallowly",
          "Filters array items",
        ],
        correct: "Transforms array into single value using reducer",
      },
      {
        q: "Which statement creates a new block-scoped variable?",
        options: ["var", "let", "function", "package"],
        correct: "let",
      },
      {
        q: "What is destructuring in JS?",
        options: [
          "Extracting values from arrays/objects into variables",
          "Combining arrays",
          "Removing properties",
          "Compiling code",
        ],
        correct: "Extracting values from arrays/objects into variables",
      },
      {
        q: "What does `typeof NaN` return?",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correct: "'number'",
      },
      {
        q: "What's the purpose of `use strict`?",
        options: [
          "Enable stricter parsing and error handling in JS",
          "Make code run faster always",
          "Allow deprecated features",
          "Connect to strict mode server",
        ],
        correct: "Enable stricter parsing and error handling in JS",
      },
      {
        q: "Which operator is used to shallow-clone arrays/objects?",
        options: ["&&", "||", "...", "::"],
        correct: "...",
      },
      {
        q: "What does `JSON.stringify()` return?",
        options: [
          "A JavaScript object",
          "A JSON string",
          "An array",
          "A Promise",
        ],
        correct: "A JSON string",
      },
      {
        q: "What is the difference between null and undefined?",
        options: [
          "null is assigned; undefined means missing",
          "null means missing; undefined is assigned",
          "They are identical",
          "null is a number; undefined is a string",
        ],
        correct: "null is assigned; undefined means missing",
      },
      {
        q: "What is a higher-order function?",
        options: [
          "Function that accepts or returns functions",
          "Function executed only once",
          "Function without parameters",
          "Function that touches DOM",
        ],
        correct: "Function that accepts or returns functions",
      },
      {
        q: "Which lifecycle hook runs after initial render in React functional components?",
        options: ["useMemo", "useEffect with empty deps", "useState", "useRef"],
        correct: "useEffect with empty deps",
      },
      {
        q: "What does `Array.filter()` return?",
        options: [
          "A new array with items that pass test",
          "A single value",
          "Undefined",
          "Mutates original array",
        ],
        correct: "A new array with items that pass test",
      },
      {
        q: "Why use `const` for objects sometimes even if properties change?",
        options: [
          "const prevents reassignment of the binding, not mutation",
          "const makes objects immutable",
          "const is required for objects",
          "const speeds up property access",
        ],
        correct: "const prevents reassignment of the binding, not mutation",
      },
      {
        q: "What is memoization commonly used for?",
        options: [
          "Caching expensive function results",
          "Minifying code",
          "Garbage collection",
          "Encrypting data",
        ],
        correct: "Caching expensive function results",
      },
      {
        q: "Which DOM API finds a single element by selector?",
        options: [
          "getElementById",
          "querySelectorAll",
          "querySelector",
          "getElementsByClassName",
        ],
        correct: "querySelector",
      },
      {
        q: "What does event delegation reduce?",
        options: [
          "Network requests",
          "Number of event listeners",
          "Memory usage only",
          "Number of DOM elements",
        ],
        correct: "Number of event listeners",
      },
      {
        q: "What is hoisting behaviour for `var` declarations?",
        options: [
          "Declarations are hoisted; initializations are not",
          "Both declaration and initialization hoisted",
          "Neither are hoisted",
          "Only initialization is hoisted",
        ],
        correct: "Declarations are hoisted; initializations are not",
      },
    ],

    python: [
      {
        q: "What is a list comprehension?",
        options: [
          "Compact syntax to build lists from iterables",
          "A way to document lists",
          "A special list type",
          "An advanced loop only",
        ],
        correct: "Compact syntax to build lists from iterables",
      },
      {
        q: "What does the `yield` keyword do?",
        options: [
          "Pauses function and returns a generator value",
          "Stops program execution",
          "Same as return",
          "Creates a coroutine only",
        ],
        correct: "Pauses function and returns a generator value",
      },
      {
        q: "How do you open a file safely in Python?",
        options: [
          "open('file')",
          "with open('file') as f:",
          "file.open('file')",
          "safe.open('file')",
        ],
        correct: "with open('file') as f:",
      },
      {
        q: "What is the difference between deep and shallow copy?",
        options: [
          "Deep copy duplicates nested objects; shallow copy references them",
          "Shallow copy duplicates nested objects; deep copy references them",
          "They are the same",
          "Deep copy is faster",
        ],
        correct:
          "Deep copy duplicates nested objects; shallow copy references them",
      },
      {
        q: "What does `__init__` do in a class?",
        options: [
          "Initializes instance state on creation",
          "Destroys the object",
          "Defines class methods",
          "Creates static variables",
        ],
        correct: "Initializes instance state on creation",
      },
      {
        q: "What is the purpose of virtual environments?",
        options: [
          "Isolate project dependencies",
          "Speed up Python",
          "Provide GUI",
          "Compile Python to binary",
        ],
        correct: "Isolate project dependencies",
      },
      {
        q: "How do you handle exceptions?",
        options: ["catch", "try/except", "handle", "throw"],
        correct: "try/except",
      },
      {
        q: "What is the purpose of `__str__` in a class?",
        options: [
          "Return user-friendly string representation",
          "Return technical representation only",
          "Initialize object",
          "Define class variables",
        ],
        correct: "Return user-friendly string representation",
      },
      {
        q: "What does `@staticmethod` do?",
        options: [
          "Defines a method that doesn't receive instance or class",
          "Defines a private method",
          "Automatically caches result",
          "Binds method to instance",
        ],
        correct: "Defines a method that doesn't receive instance or class",
      },
      {
        q: "Which method removes and returns last item from list L?",
        options: ["pop()", "remove()", "discard()", "delete()"],
        correct: "pop()",
      },
      {
        q: "What is the difference between `is` and `==`?",
        options: [
          "`is` checks identity; `==` checks equality of value",
          "`is` checks equality; `==` checks identity",
          "They are identical",
          "`is` is for strings only",
        ],
        correct: "`is` checks identity; `==` checks equality of value",
      },
      {
        q: "What does `enumerate()` provide when iterating?",
        options: [
          "Index and value pairs",
          "Only index",
          "Only value",
          "Filtered values",
        ],
        correct: "Index and value pairs",
      },
      {
        q: "Which module converts Python objects to bytes for storage or transfer?",
        options: ["json", "pickle", "marshal", "struct"],
        correct: "pickle",
      },
      {
        q: "What is a generator expression?",
        options: [
          "Lazy evaluated expression that yields items",
          "A list saved to disk",
          "An immediate list",
          "A threading primitive",
        ],
        correct: "Lazy evaluated expression that yields items",
      },
      {
        q: "Which decorator preserves metadata of wrapped function?",
        options: ["@wraps", "@preserve", "@metadata", "@keep"],
        correct: "@wraps",
      },
      {
        q: "What does `__name__ == '__main__'` allow?",
        options: [
          "Code to run only when script executed directly",
          "Always run code",
          "Run only during imports",
          "Disable module",
        ],
        correct: "Code to run only when script executed directly",
      },
      {
        q: "What does `dict.get(key, default)` return if key missing?",
        options: ["Raises KeyError", "default", "None always", "Empty dict"],
        correct: "default",
      },
      {
        q: "What built-in type implements immutability among these?",
        options: ["list", "dict", "tuple", "set"],
        correct: "tuple",
      },
      {
        q: "Which function returns next item from iterator it or default?",
        options: [
          "next(it, default)",
          "it.next()",
          "getnext(it)",
          "advance(it)",
        ],
        correct: "next(it, default)",
      },
    ],

    cpp: [
      {
        q: "What is the difference between struct and class in C++ by default?",
        options: [
          "struct members are public; class members are private by default",
          "class members are public; struct members are private",
          "No difference",
          "struct can't have methods",
        ],
        correct:
          "struct members are public; class members are private by default",
      },
      {
        q: "What does RAII stand for?",
        options: [
          "Resource Acquisition Is Initialization",
          "Random Access Is Immediate",
          "Resource Allocation Is Iterative",
          "Run-time Allocation Initialization",
        ],
        correct: "Resource Acquisition Is Initialization",
      },
      {
        q: "What is undefined behavior (UB)?",
        options: [
          "Behavior not defined by the standard; anything may happen",
          "Behavior that throws exceptions",
          "Behavior that returns zero",
          "Behavior that is safe",
        ],
        correct: "Behavior not defined by the standard; anything may happen",
      },
      {
        q: "Which container provides key→value unique associations and sorted order?",
        options: ["std::vector", "std::map", "std::unordered_map", "std::list"],
        correct: "std::map",
      },
      {
        q: "What does `delete` do in C++?",
        options: [
          "Releases memory allocated by new",
          "Deletes variable name only",
          "Removes file",
          "Stops program",
        ],
        correct: "Releases memory allocated by new",
      },
      {
        q: "What is a smart pointer?",
        options: [
          "An RAII wrapper that manages object lifetime",
          "A pointer stored in ROM",
          "A pointer that never changes",
          "A debug pointer",
        ],
        correct: "An RAII wrapper that manages object lifetime",
      },
      {
        q: "What header must you include for std::vector?",
        options: ["<vector>", "<array>", "<list>", "<container>"],
        correct: "<vector>",
      },
      {
        q: "What's the difference between pass-by-value and pass-by-reference?",
        options: [
          "Pass-by-value copies; pass-by-reference passes alias",
          "Pass-by-value passes alias; pass-by-reference copies",
          "They are the same",
          "Only references can be const",
        ],
        correct: "Pass-by-value copies; pass-by-reference passes alias",
      },
      {
        q: "What is iterator invalidation?",
        options: [
          "When container changes break existing iterators",
          "When iterator becomes const",
          "When you delete an iterator variable",
          "When iterator moves to next",
        ],
        correct: "When container changes break existing iterators",
      },
      {
        q: "Which C++ feature prevents accidental copies by disabling copy constructor?",
        options: [
          "delete keyword on copy ctor",
          "private destructor",
          "virtual keyword",
          "constexpr",
        ],
        correct: "delete keyword on copy ctor",
      },
      {
        q: "What does const at end of member function mean?",
        options: [
          "Function doesn't modify the object (this is const)",
          "Function can't be overloaded",
          "Function returns const",
          "Function is static",
        ],
        correct: "Function doesn't modify the object (this is const)",
      },
      {
        q: "Which keyword indicates compile-time constant expression?",
        options: ["static", "constexpr", "inline", "volatile"],
        correct: "constexpr",
      },
      {
        q: "What does std::move do?",
        options: [
          "Turns lvalue into rvalue reference to enable moves",
          "Copies object deeply",
          "Deletes object",
          "Converts pointer to int",
        ],
        correct: "Turns lvalue into rvalue reference to enable moves",
      },
      {
        q: "What's the difference between stack and heap allocation?",
        options: [
          "Stack is automatic lifetime; heap is dynamic and managed manually",
          "Heap is faster than stack",
          "Stack is for large objects only",
          "No difference",
        ],
        correct:
          "Stack is automatic lifetime; heap is dynamic and managed manually",
      },
      {
        q: "Which container is best for FIFO operations?",
        options: ["std::stack", "std::queue", "std::vector", "std::set"],
        correct: "std::queue",
      },
      {
        q: "What is name mangling used for in C++?",
        options: [
          "Encode function signature for linking and overload resolution",
          "Obfuscate code for security",
          "Compress binary",
          "Improve runtime speed",
        ],
        correct:
          "Encode function signature for linking and overload resolution",
      },
      {
        q: "Which header provides smart pointers like unique_ptr?",
        options: ["<memory>", "<ptr>", "<smart>", "<utility>"],
        correct: "<memory>",
      },
      {
        q: "What is the rule of five about?",
        options: [
          "If you define one of destructor/copy/move/assign, consider all five special members",
          "Five ways to allocate memory",
          "Five types of exceptions",
          "Five access specifiers",
        ],
        correct:
          "If you define one of destructor/copy/move/assign, consider all five special members",
      },
      {
        q: "What does noexcept indicate?",
        options: [
          "Function doesn't throw exceptions",
          "Function will always throw",
          "Function is deprecated",
          "Function is inline",
        ],
        correct: "Function doesn't throw exceptions",
      },
    ],

    csharp: [
      {
        q: "What is the purpose of interfaces in C#?",
        options: [
          "Define contracts for classes without implementation",
          "Store constant values",
          "Create threads",
          "Serialize objects",
        ],
        correct: "Define contracts for classes without implementation",
      },
      {
        q: "What is the difference between value and reference types?",
        options: [
          "Value types are stored on stack; reference types refer to heap objects",
          "Value types are always larger",
          "Reference types are immutable",
          "No difference",
        ],
        correct:
          "Value types are stored on stack; reference types refer to heap objects",
      },
      {
        q: "What does `async`/`await` do in C#?",
        options: [
          "Simplify writing asynchronous code returning Tasks",
          "Make code run on GPU",
          "Disable exceptions",
          "Inline methods at compile time",
        ],
        correct: "Simplify writing asynchronous code returning Tasks",
      },
      {
        q: "What is LINQ used for?",
        options: [
          "Querying collections using expressive syntax",
          "Logging",
          "Low-level IO",
          "Linking assemblies",
        ],
        correct: "Querying collections using expressive syntax",
      },
      {
        q: "What is the GC in .NET responsible for?",
        options: [
          "Reclaiming unreachable memory",
          "Compiling code",
          "Managing threads",
          "Handling events",
        ],
        correct: "Reclaiming unreachable memory",
      },
      {
        q: "What does the `using` statement accomplish with IDisposable?",
        options: [
          "Ensures Dispose is called even on exceptions",
          "Imports namespaces only",
          "Runs code asynchronously",
          "Prevents GC",
        ],
        correct: "Ensures Dispose is called even on exceptions",
      },
      {
        q: "How do you prevent a method from being overridden?",
        options: ["sealed", "private", "static", "final"],
        correct: "sealed",
      },
      {
        q: "What is the difference between Task and Thread?",
        options: [
          "Task represents async work; Thread is an OS scheduling unit",
          "Task is lower-level than Thread",
          "They are identical",
          "Thread is for async only",
        ],
        correct: "Task represents async work; Thread is an OS scheduling unit",
      },
      {
        q: "What does `var` do in C#?",
        options: [
          "Infers type at compile time",
          "Creates dynamic variables at runtime",
          "Declares a global var",
          "Is same as object",
        ],
        correct: "Infers type at compile time",
      },
      {
        q: "What is boxing in .NET?",
        options: [
          "Wrapping value type into object on heap",
          "Encrypting data",
          "Packing strings",
          "Compiling assemblies",
        ],
        correct: "Wrapping value type into object on heap",
      },
      {
        q: "What is reflection useful for?",
        options: [
          "Inspect and modify metadata at runtime",
          "Faster I/O",
          "Thread synchronization",
          "Garbage collection",
        ],
        correct: "Inspect and modify metadata at runtime",
      },
      {
        q: "What does `readonly` do on fields?",
        options: [
          "Allows assignment only during declaration or constructor",
          "Makes field mutable anytime",
          "Prevents serialization",
          "Marks deprecated",
        ],
        correct: "Allows assignment only during declaration or constructor",
      },
      {
        q: "What is dependency injection used for?",
        options: [
          "Provide dependencies from outside for loose coupling",
          "Inject native code",
          "Manage threads",
          "Logging",
        ],
        correct: "Provide dependencies from outside for loose coupling",
      },
      {
        q: "What is the difference between override and overload?",
        options: [
          "Override replaces base implementation; overload is same name different signature",
          "Overload replaces base; override is new method",
          "They are identical",
          "One is compile-time only",
        ],
        correct:
          "Override replaces base implementation; overload is same name different signature",
      },
      {
        q: "Which collection is thread-safe by default in .NET?",
        options: [
          "List<T>",
          "ConcurrentDictionary",
          "Dictionary<K,V>",
          "ArrayList",
        ],
        correct: "ConcurrentDictionary",
      },
      {
        q: "What is an event in C#?",
        options: [
          "A language construct for publisher/subscriber pattern",
          "A scheduled task",
          "A thread pool job",
          "A log entry",
        ],
        correct: "A language construct for publisher/subscriber pattern",
      },
      {
        q: "What does `async void` indicate (avoid generally)?",
        options: [
          "Fire-and-forget async method not returning a Task",
          "Synchronous method",
          "Method that blocks caller",
          "Deprecated syntax",
        ],
        correct: "Fire-and-forget async method not returning a Task",
      },
      {
        q: "What is covariance/contravariance in generics context?",
        options: [
          "Rules for substituting more/less derived types safely",
          "Threading primitives",
          "Memory layout directives",
          "Assembly binding rules",
        ],
        correct: "Rules for substituting more/less derived types safely",
      },
      {
        q: "What does `await Task.WhenAll(tasks)` do?",
        options: [
          "Waits for all tasks to complete in parallel",
          "Runs tasks sequentially",
          "Cancels tasks immediately",
          "Starts tasks only",
        ],
        correct: "Waits for all tasks to complete in parallel",
      },
    ],

    reactjs: [
      {
        q: "What is a controlled component in React?",
        options: [
          "Component whose form data is handled by React state",
          "Component that uses refs only",
          "Component that is not rendered",
          "Component that manages CSS only",
        ],
        correct: "Component whose form data is handled by React state",
      },
      {
        q: "What is reconciliation in React?",
        options: [
          "Process React uses to diff and update the DOM efficiently",
          "CSS optimization",
          "Server rendering only",
          "Routing algorithm",
        ],
        correct: "Process React uses to diff and update the DOM efficiently",
      },
      {
        q: "What problem does useMemo solve?",
        options: [
          "Avoid re-computing expensive values between renders",
          "Persist state between reloads",
          "Replace useEffect",
          "Improve network requests",
        ],
        correct: "Avoid re-computing expensive values between renders",
      },
      {
        q: "When should you use useCallback?",
        options: [
          "To memoize functions so referential equality is stable",
          "To render components faster always",
          "To replace useState",
          "To fetch data",
        ],
        correct: "To memoize functions so referential equality is stable",
      },
      {
        q: "What is SSR (Server-Side Rendering)?",
        options: [
          "Rendering React on the server to send HTML to client",
          "Rendering only in browser",
          "State management tool",
          "A CSS technique",
        ],
        correct: "Rendering React on the server to send HTML to client",
      },
      {
        q: "What is hydration in React?",
        options: [
          "Attaching event listeners to server-rendered HTML",
          "Watermarking images",
          "Cleaning up state",
          "Converting class to function",
        ],
        correct: "Attaching event listeners to server-rendered HTML",
      },
      {
        q: "What does key prop help React with?",
        options: [
          "Identify items in a list for efficient updates",
          "Style components uniquely",
          "Access DOM directly",
          "Track clicks",
        ],
        correct: "Identify items in a list for efficient updates",
      },
      {
        q: "Why avoid using index as key in a dynamic list?",
        options: [
          "It can cause incorrect UI updates when list order changes",
          "It is a syntax error",
          "React disallows it",
          "It slows rendering drastically",
        ],
        correct: "It can cause incorrect UI updates when list order changes",
      },
      {
        q: "What does useRef return?",
        options: [
          "A mutable object with current property",
          "A stateful value and setter",
          "A pure function",
          "A promise",
        ],
        correct: "A mutable object with current property",
      },
      {
        q: "How do you lift state up?",
        options: [
          "Move shared state to closest common ancestor",
          "Put state in local storage",
          "Use refs instead of state",
          "Store state in CSS",
        ],
        correct: "Move shared state to closest common ancestor",
      },
      {
        q: "What is React Context used for?",
        options: [
          "Provide global-ish data to component subtree without prop drilling",
          "Replace components",
          "Run effects",
          "Style components",
        ],
        correct:
          "Provide global-ish data to component subtree without prop drilling",
      },
      {
        q: "What is a fragment (<></>) used for?",
        options: [
          "Group children without extra DOM element",
          "Wrap styles only",
          "Create portals",
          "Mount components conditionally",
        ],
        correct: "Group children without extra DOM element",
      },
      {
        q: "What does React.StrictMode do?",
        options: [
          "Highlight potential problems during development",
          "Enable production optimizations",
          "Disable lifecycle methods",
          "Enforce dark mode",
        ],
        correct: "Highlight potential problems during development",
      },
      {
        q: "What are error boundaries?",
        options: [
          "Components that catch JS errors in subtree during render",
          "Special hooks for network errors",
          "CSS fallback mechanisms",
          "Server-side logs",
        ],
        correct: "Components that catch JS errors in subtree during render",
      },
      {
        q: "What is code-splitting useful for?",
        options: [
          "Reducing initial bundle size by loading chunks on demand",
          "Combining CSS files",
          "Increasing memory",
          "Merging components",
        ],
        correct: "Reducing initial bundle size by loading chunks on demand",
      },
      {
        q: "What is a portal in React?",
        options: [
          "A way to render children into a DOM node outside parent hierarchy",
          "A new router",
          "A type of hook",
          "An alternative to context",
        ],
        correct:
          "A way to render children into a DOM node outside parent hierarchy",
      },
      {
        q: "How do controlled and uncontrolled components differ?",
        options: [
          "Controlled uses React state; uncontrolled uses DOM refs",
          "Controlled uses refs; uncontrolled uses state",
          "No difference",
          "One is deprecated",
        ],
        correct: "Controlled uses React state; uncontrolled uses DOM refs",
      },
      {
        q: "What is the recommended way to fetch data in React functional components?",
        options: [
          "Use useEffect with proper dependency array",
          "Call fetch inside render",
          "Use constructor",
          "Directly mutate DOM",
        ],
        correct: "Use useEffect with proper dependency array",
      },
      {
        q: "What does `shouldComponentUpdate` help with in class components?",
        options: [
          "Prevent unnecessary re-renders by customizing update checks",
          "Mount components only once",
          "Handle errors",
          "Manage refs",
        ],
        correct: "Prevent unnecessary re-renders by customizing update checks",
      },
    ],

    typescript: [
      {
        q: "What is the main advantage of TypeScript over plain JavaScript?",
        options: [
          "Static typing and compile-time checks",
          "Faster runtime performance",
          "Smaller bundle sizes always",
          "Built-in UI components",
        ],
        correct: "Static typing and compile-time checks",
      },
      {
        q: "What does the `never` type represent?",
        options: [
          "A value that never occurs (e.g., function that throws)",
          "A nullable value",
          "Any value",
          "A special string type",
        ],
        correct: "A value that never occurs (e.g., function that throws)",
      },
      {
        q: "What is declaration merging in TypeScript?",
        options: [
          "Two declarations with same name are merged by compiler",
          "Merging two files into one",
          "Combining runtime objects",
          "Merging types at runtime",
        ],
        correct: "Two declarations with same name are merged by compiler",
      },
      {
        q: "What is the purpose of `unknown` vs `any`?",
        options: [
          "unknown is safer — must be narrowed before use; any bypasses checks",
          "unknown is less safe than any",
          "They are identical",
          "unknown is only for strings",
        ],
        correct:
          "unknown is safer — must be narrowed before use; any bypasses checks",
      },
      {
        q: "How do you define a tuple type with two elements: string and number?",
        options: [
          " [string, number] ",
          " tuple<string,number> ",
          " (string,number) ",
          " Array<string|number> ",
        ],
        correct: " [string, number] ",
      },
      {
        q: "What does `as const` do?",
        options: [
          "Narrow literal expressions to readonly literal types",
          "Cast to any",
          "Make value mutable",
          "Ignore compiler errors",
        ],
        correct: "Narrow literal expressions to readonly literal types",
      },
      {
        q: "Which utility type makes all properties optional?",
        options: ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"],
        correct: "Partial<T>",
      },
      {
        q: "What is structural typing (duck typing)?",
        options: [
          "Type compatibility based on shape rather than name",
          "Types compared by name only",
          "Runtime type checking",
          "A library feature",
        ],
        correct: "Type compatibility based on shape rather than name",
      },
      {
        q: "When would you use an interface over a type alias?",
        options: [
          "When you want declaration merging or prefer extendable object shapes",
          "When you need unions only",
          "Interfaces are deprecated",
          "Types are faster at runtime",
        ],
        correct:
          "When you want declaration merging or prefer extendable object shapes",
      },
      {
        q: "What does the `keyof` operator produce given type {a: string; b: number}?",
        options: ["'a' | 'b'", "string", "number", "any"],
        correct: "'a' | 'b'",
      },
      {
        q: "What is type narrowing?",
        options: [
          "Refining a broad type to a more specific type via checks",
          "Expanding types",
          "Removing types entirely",
          "Converting type to string",
        ],
        correct: "Refining a broad type to a more specific type via checks",
      },
      {
        q: "What does `readonly` do on array types?",
        options: [
          "Prevent mutation methods on the array",
          "Make array empty",
          "Convert array to tuple",
          "Allow mutation only in dev",
        ],
        correct: "Prevent mutation methods on the array",
      },
      {
        q: "How do you declare a generic function identity<T>(arg: T): T?",
        options: [
          "function identity<T>(arg: T): T {}",
          "function identity(arg): arg {}",
          "generic identity<T>(arg) {}",
          "def identity<T>(arg: T) -> T {}",
        ],
        correct: "function identity<T>(arg: T): T {}",
      },
      {
        q: "What is module augmentation in TS?",
        options: [
          "Adding declarations to existing modules (extend types)",
          "Combining JS files",
          "Runtime patching",
          "Removing modules",
        ],
        correct: "Adding declarations to existing modules (extend types)",
      },
      {
        q: "Which compiler option enables strict null checks?",
        options: [
          "strictNullChecks",
          "noImplicitAny",
          "alwaysStrict",
          "strict",
        ],
        correct: "strictNullChecks",
      },
      {
        q: "What does `Pick<T, K>` do?",
        options: [
          "Creates a type with selected keys K from T",
          "Removes keys",
          "Clones an object at runtime",
          "Maps keys to values",
        ],
        correct: "Creates a type with selected keys K from T",
      },
      {
        q: "Which type is better than `any` for unknown external input?",
        options: ["unknown", "any", "object", "never"],
        correct: "unknown",
      },
      {
        q: "What does `ReturnType<T>` produce?",
        options: [
          "The return type of function type T",
          "The argument types of T",
          "The keys of T",
          "The shape of T at runtime",
        ],
        correct: "The return type of function type T",
      },
      {
        q: "What does `tsc` do?",
        options: [
          "Transpiles/compiles TypeScript to JavaScript",
          "Runs TypeScript code directly",
          "Bundles modules",
          "Formats code",
        ],
        correct: "Transpiles/compiles TypeScript to JavaScript",
      },
    ],

    java: [
      {
        q: "What is the Java classpath used for?",
        options: [
          "Locate classes and resources at runtime",
          "Specify JVM memory limits",
          "List available CPUs",
          "Control garbage collection",
        ],
        correct: "Locate classes and resources at runtime",
      },
      {
        q: "What is the difference between checked and unchecked exceptions?",
        options: [
          "Checked must be declared or caught; unchecked need not",
          "Unchecked must be declared; checked need not",
          "No difference",
          "Checked are always runtime errors",
        ],
        correct: "Checked must be declared or caught; unchecked need not",
      },
      {
        q: "What does the 'final' keyword mean for a variable?",
        options: [
          "Value cannot be reassigned after initialization",
          "Variable is immutable deeply",
          "Variable is private",
          "Variable is static",
        ],
        correct: "Value cannot be reassigned after initialization",
      },
      {
        q: "What is the difference between equals() and == for objects?",
        options: [
          "equals() checks logical equality; == checks reference equality",
          "== checks logical equality; equals() checks reference equality",
          "They are identical",
          "equals() is deprecated",
        ],
        correct:
          "equals() checks logical equality; == checks reference equality",
      },
      {
        q: "What is the purpose of interfaces in Java 8+ with default methods?",
        options: [
          "Allow interfaces to provide default implementations",
          "Prevent classes from implementing them",
          "Store constants only",
          "Replace abstract classes always",
        ],
        correct: "Allow interfaces to provide default implementations",
      },
      {
        q: "What does the JVM do with bytecode?",
        options: [
          "Loads, verifies, and executes it (possibly JIT compiling)",
          "Converts to Python",
          "Sends it to GPU",
          "Interprets as text",
        ],
        correct: "Loads, verifies, and executes it (possibly JIT compiling)",
      },
      {
        q: "What is autoboxing in Java?",
        options: [
          "Automatic conversion between primitives and wrapper classes",
          "Automatic memory cleanup",
          "Automatic class loading",
          "Automatic threading",
        ],
        correct: "Automatic conversion between primitives and wrapper classes",
      },
      {
        q: "Which collection is ordered but allows duplicates?",
        options: ["Set", "Map", "List", "Queue"],
        correct: "List",
      },
      {
        q: "What does the volatile keyword do?",
        options: [
          "Ensures reads/writes go straight to main memory and visibility across threads",
          "Makes variable immutable",
          "Prevents GC",
          "Marks deprecated",
        ],
        correct:
          "Ensures reads/writes go straight to main memory and visibility across threads",
      },
      {
        q: "What is a stream in Java 8 used for?",
        options: [
          "Functional-style processing of sequences of elements",
          "Network streams only",
          "File I/O replacement",
          "GUI rendering",
        ],
        correct: "Functional-style processing of sequences of elements",
      },
      {
        q: "When should you use StringBuilder over String concatenation in loops?",
        options: [
          "When building strings in loops to avoid many intermediate objects",
          "Never — String is always better",
          "Only for small strings",
          "Only when using concurrency",
        ],
        correct:
          "When building strings in loops to avoid many intermediate objects",
      },
      {
        q: "What does synchronized do on a method?",
        options: [
          "Acquire the object's monitor before executing the method",
          "Make method static",
          "Prevent exceptions",
          "Optimize method calls",
        ],
        correct: "Acquire the object's monitor before executing the method",
      },
      {
        q: "What is an Optional used for?",
        options: [
          "Represent possibly absent value and avoid null checks",
          "Store multiple values",
          "Replace collections",
          "Force non-null",
        ],
        correct: "Represent possibly absent value and avoid null checks",
      },
      {
        q: "How do you create an immutable list in modern Java?",
        options: [
          "Collections.unmodifiableList(list)",
          "List.of(...)",
          "new ImmutableList()",
          "Arrays.asList()",
        ],
        correct: "List.of(...)",
      },
      {
        q: "What does Class.forName(...) do?",
        options: [
          "Load and initialize a class by name at runtime",
          "Create a new file",
          "Start thread",
          "Compile code",
        ],
        correct: "Load and initialize a class by name at runtime",
      },
      {
        q: "What is the difference between process and thread?",
        options: [
          "Process is OS-level execution unit with own memory; thread shares memory in a process",
          "Thread has its own memory always",
          "Process is lighter than thread",
          "No difference",
        ],
        correct:
          "Process is OS-level execution unit with own memory; thread shares memory in a process",
      },
      {
        q: "What is dependency injection beneficial for?",
        options: [
          "Loose coupling and easier testing",
          "Faster runtime",
          "Less memory",
          "Automatic GC tuning",
        ],
        correct: "Loose coupling and easier testing",
      },
      {
        q: "When is it appropriate to use a Map over a List?",
        options: [
          "When you need key-based lookup rather than index-based",
          "When order matters only",
          "When storing duplicates only",
          "Never",
        ],
        correct: "When you need key-based lookup rather than index-based",
      },
      {
        q: "What is the default character encoding for Java source files historically?",
        options: ["UTF-8", "Platform default (varies)", "ISO-8859-1", "ASCII"],
        correct: "Platform default (varies)",
      },
    ],

    go: [
      {
        q: "What is a goroutine?",
        options: [
          "A lightweight concurrent function managed by Go runtime",
          "A system thread",
          "A library function",
          "A debugging tool",
        ],
        correct: "A lightweight concurrent function managed by Go runtime",
      },
      {
        q: "How do you safely share data between goroutines?",
        options: [
          "Use channels or synchronization primitives",
          "Directly access global vars always",
          "Use sleeps only",
          "Use file I/O",
        ],
        correct: "Use channels or synchronization primitives",
      },
      {
        q: "What does `defer` accomplish?",
        options: [
          "Schedules a call to run when the surrounding function returns",
          "Immediately runs a function asynchronously",
          "Cancels a goroutine",
          "Allocates memory",
        ],
        correct:
          "Schedules a call to run when the surrounding function returns",
      },
      {
        q: "What is a slice in Go?",
        options: [
          "A dynamically-sized view over an array",
          "A linked list",
          "A map alias",
          "A fixed-size array only",
        ],
        correct: "A dynamically-sized view over an array",
      },
      {
        q: "What is the zero value of an int in Go?",
        options: ["0", "nil", "-1", "undefined"],
        correct: "0",
      },
      {
        q: "How do you declare a typed constant group?",
        options: [
          "const ( ... )",
          "const { ... }",
          "const [ ... ]",
          "const < ... >",
        ],
        correct: "const ( ... )",
      },
      {
        q: "What package is commonly used for formatted I/O?",
        options: ["fmt", "io", "stdio", "print"],
        correct: "fmt",
      },
      {
        q: "Which built-in maps keys to values?",
        options: ["slice", "map", "array", "struct"],
        correct: "map",
      },
      {
        q: "What's the idiomatic way to handle errors in Go?",
        options: [
          "Return error as second value and check it",
          "Throw exceptions",
          "Log and continue always",
          "Use panic for control flow",
        ],
        correct: "Return error as second value and check it",
      },
      {
        q: "What does `panic` do?",
        options: [
          "Stops normal execution and begins unwinding stack (can be recovered)",
          "Yields goroutine",
          "Clears memory",
          "Starts a new thread",
        ],
        correct:
          "Stops normal execution and begins unwinding stack (can be recovered)",
      },
      {
        q: "How do you iterate over keys and values in a map m?",
        options: [
          "for k, v := range m {}",
          "for (k in m) {}",
          "foreach m",
          "map.each {}",
        ],
        correct: "for k, v := range m {}",
      },
      {
        q: "What does `select` do with channels?",
        options: [
          "Wait on multiple channel operations, choosing a ready one",
          "Selects a random channel",
          "Closes all channels",
          "Buffers channels automatically",
        ],
        correct: "Wait on multiple channel operations, choosing a ready one",
      },
      {
        q: "Which built-in converts integer to string?",
        options: [
          "strconv.Itoa",
          "int.toString",
          "fmt.Itoa",
          "strconv.FormatInt",
        ],
        correct: "strconv.Itoa",
      },
      {
        q: "What is the effect of `go` before a function call?",
        options: [
          "Starts the call in a new goroutine (concurrent)",
          "Executes synchronously",
          "Defers the call to end of function",
          "Runs in a separate process",
        ],
        correct: "Starts the call in a new goroutine (concurrent)",
      },
      {
        q: "What does `make` do for slices/maps/channels?",
        options: [
          "Allocates and initializes the data structure",
          "Copies the structure",
          "Removes the structure",
          "Converts types",
        ],
        correct: "Allocates and initializes the data structure",
      },
      {
        q: "What is a struct used for in Go?",
        options: [
          "Group fields to form composite types",
          "Define methods only",
          "Declare packages",
          "Perform I/O",
        ],
        correct: "Group fields to form composite types",
      },
      {
        q: "Which keyword declares a new named type from an existing one?",
        options: ["type", "typedef", "using", "alias"],
        correct: "type",
      },
      {
        q: "How does Go handle circular imports?",
        options: [
          "They are not allowed and cause compile-time error",
          "They are resolved at runtime",
          "They are allowed only with build tags",
          "They are converted to interfaces",
        ],
        correct: "They are not allowed and cause compile-time error",
      },
      {
        q: "What does `go fmt` do?",
        options: [
          "Automatically format Go source code according to standard style",
          "Compile the code",
          "Run tests",
          "Initialize module",
        ],
        correct:
          "Automatically format Go source code according to standard style",
      },
      {
        q: "What is an interface in Go?",
        options: [
          "A set of method signatures that a type implements implicitly",
          "A base class for types",
          "A runtime plugin system",
          "A pointer type",
        ],
        correct: "A set of method signatures that a type implements implicitly",
      },
    ],

    kotlin: [
      {
        q: "What is the difference between val and var in Kotlin?",
        options: [
          "val is read-only; var is mutable",
          "val is mutable; var is read-only",
          "They are identical",
          "val is static only",
        ],
        correct: "val is read-only; var is mutable",
      },
      {
        q: "What does the Elvis operator (?:) do?",
        options: [
          "Provide a default when left side is null",
          "Throw an exception",
          "Cast types",
          "Concatenate strings",
        ],
        correct: "Provide a default when left side is null",
      },
      {
        q: "How do you declare a nullable type for String?",
        options: ["String?", "nullable String", "String!", "String|null"],
        correct: "String?",
      },
      {
        q: "What is a data class used for?",
        options: [
          "Store data with generated equals/hashCode/toString",
          "Define UI elements",
          "Network requests",
          "Database migrations",
        ],
        correct: "Store data with generated equals/hashCode/toString",
      },
      {
        q: "What does companion object provide?",
        options: [
          "Class-level members similar to static",
          "Instance-level methods",
          "A thread pool",
          "A singleton across JVM only",
        ],
        correct: "Class-level members similar to static",
      },
      {
        q: "What is an extension function?",
        options: [
          "Function that adds behavior to existing types without inheritance",
          "Function that extends memory",
          "Deprecated feature",
          "Function only for Android",
        ],
        correct:
          "Function that adds behavior to existing types without inheritance",
      },
      {
        q: "What is coroutines' primary benefit?",
        options: [
          "Lightweight concurrency with structured concurrency",
          "Automatic memory management",
          "Faster compilation",
          "Better UI components",
        ],
        correct: "Lightweight concurrency with structured concurrency",
      },
      {
        q: "How do you define a top-level function in Kotlin file?",
        options: [
          "Just write fun foo() { } at file scope",
          "Must be inside a class",
          "Use static modifier",
          "Use topfun keyword",
        ],
        correct: "Just write fun foo() { } at file scope",
      },
      {
        q: "What is sealed class useful for?",
        options: [
          "Restrict which subclasses are allowed (exhaustive when used with when)",
          "Make class thread-safe",
          "Encrypt data",
          "Define database tables",
        ],
        correct:
          "Restrict which subclasses are allowed (exhaustive when used with when)",
      },
      {
        q: "Which collection type is immutable by default?",
        options: ["MutableList", "List", "ArrayList", "MutableSet"],
        correct: "List",
      },
      {
        q: "What is the idiomatic way to check null and act in one expression?",
        options: [
          "Use ?. and ?: operators for safe calls and defaults",
          "Use try/catch",
          "Use if-null blocks only",
          "Use !! operator always",
        ],
        correct: "Use ?. and ?: operators for safe calls and defaults",
      },
      {
        q: "What does the `inline` modifier do for functions?",
        options: [
          "Suggest compiler to inline call sites to reduce overhead for small functions",
          "Disable debugging",
          "Make function synchronous",
          "Prevent function from being overridden",
        ],
        correct:
          "Suggest compiler to inline call sites to reduce overhead for small functions",
      },
      {
        q: "What is `lateinit` used for?",
        options: [
          "Declare non-null var that will be initialized later (not for primitive types)",
          "Make var immutable",
          "Lazy initialization with thread-safety",
          "Define top-level constants",
        ],
        correct:
          "Declare non-null var that will be initialized later (not for primitive types)",
      },
      {
        q: "How do you iterate over entries of a map?",
        options: [
          "for ((k,v) in map) { }",
          "map.forEachEntry()",
          "foreach map",
          "for k in map.keys",
        ],
        correct: "for ((k,v) in map) { }",
      },
      {
        q: "What does `object` declaration create?",
        options: [
          "A singleton instance",
          "A class template",
          "A factory only",
          "An interface",
        ],
        correct: "A singleton instance",
      },
      {
        q: "Which keyword marks a function as suspendable for coroutines?",
        options: ["suspend", "async", "await", "yield"],
        correct: "suspend",
      },
      {
        q: "What is the Kotlin standard tool for null-safety interop with Java?",
        options: [
          "Platform types and nullable annotations",
          "Use special JVM only types",
          "Disable null checks",
          "Convert to Optional always",
        ],
        correct: "Platform types and nullable annotations",
      },
      {
        q: "Which scope function returns the object itself after executing block?",
        options: ["also", "let", "apply", "run"],
        correct: "apply",
      },
      {
        q: "What is the difference between apply and let?",
        options: [
          "apply returns receiver (this); let returns lambda result (it)",
          "let returns receiver; apply returns lambda result",
          "They are identical",
          "One is deprecated",
        ],
        correct:
          "apply returns receiver (this); let returns lambda result (it)",
      },
    ],
  },

  hard: {
    javascript: [
      {
        q: "What is closure?",
        options: [
          "Function inside array",
          "Function with preserved scope",
          "Global function",
          "Event handler",
        ],
        correct: "Function with preserved scope",
      },
      {
        q: "Explain hoisting.",
        options: [
          "Moving declarations to top",
          "Deleting variables",
          "Async delay",
          "Importing modules",
        ],
        correct: "Moving declarations to top",
      },
      {
        q: "What is the event loop?",
        options: [
          "JS compiler",
          "Handles async tasks",
          "UI updater",
          "Memory tool",
        ],
        correct: "Handles async tasks",
      },
      {
        q: "Predict the output: console.log(typeof NaN);",
        options: ["number", "NaN", "undefined", "object"],
        correct: "number",
      },
      {
        q: "What is the difference between '==' and '==='?",
        options: [
          "No difference",
          "'===' checks type too",
          "'==' checks type too",
          "Only works with numbers",
        ],
        correct: "'===' checks type too",
      },
      {
        q: "Explain prototype chain.",
        options: [
          "Inheritance via __proto__",
          "Chain of arrays",
          "Event bubbling",
          "Variable scope",
        ],
        correct: "Inheritance via __proto__",
      },
      {
        q: "What is temporal dead zone (TDZ)?",
        options: [
          "Period before var declaration",
          "Period before let/const initialization",
          "Delay in async function",
          "Loop iteration gap",
        ],
        correct: "Period before let/const initialization",
      },
      {
        q: "Predict the output: console.log(0.1 + 0.2 === 0.3);",
        options: ["true", "false", "undefined", "error"],
        correct: "false",
      },
      {
        q: "Explain 'this' in arrow functions.",
        options: [
          "Lexically scoped",
          "Global object",
          "Function object",
          "Undefined",
        ],
        correct: "Lexically scoped",
      },
      {
        q: "What is event delegation?",
        options: [
          "Attaching event to parent to handle children",
          "Removing events",
          "CSS animation",
          "Async handling",
        ],
        correct: "Attaching event to parent to handle children",
      },
      {
        q: "Predict the output: let a = [1,2]; let b = a; b.push(3); console.log(a);",
        options: ["[1,2]", "[1,2,3]", "[3]", "Error"],
        correct: "[1,2,3]",
      },
      {
        q: "Difference between call(), apply(), bind()?",
        options: [
          "All same",
          "call/apply invoke, bind returns new function",
          "call returns new function",
          "apply binds permanently",
        ],
        correct: "call/apply invoke, bind returns new function",
      },
      {
        q: "What is the output of: [] + [] ?",
        options: ["''", "0", "[]", "Error"],
        correct: "''",
      },
      {
        q: "Explain async/await.",
        options: [
          "Syntax for handling promises synchronously",
          "Loops",
          "Variable declaration",
          "Memory allocation",
        ],
        correct: "Syntax for handling promises synchronously",
      },
      {
        q: "Predict: console.log(typeof null);",
        options: ["object", "null", "undefined", "number"],
        correct: "object",
      },
      {
        q: "What is memoization?",
        options: [
          "Caching function results",
          "Loop optimization",
          "Variable hoisting",
          "Event handling",
        ],
        correct: "Caching function results",
      },
      {
        q: "What is the output: console.log([] == ![]);",
        options: ["true", "false", "Error", "undefined"],
        correct: "true",
      },
      {
        q: "Explain module pattern in JS.",
        options: [
          "Encapsulation via IIFE",
          "Array manipulation",
          "Event delegation",
          "Hoisting",
        ],
        correct: "Encapsulation via IIFE",
      },
      {
        q: "Difference between null and undefined?",
        options: [
          "No difference",
          "null = intentional, undefined = uninitialized",
          "null = variable, undefined = function",
          "undefined = number",
        ],
        correct: "null = intentional, undefined = uninitialized",
      },
      {
        q: "Predict: console.log('5' - 3);",
        options: ["2", "'2'", "Error", "53"],
        correct: "2",
      },
    ],

    python: [
      {
        q: "What is GIL?",
        options: [
          "General Import Library",
          "Global Interpreter Lock",
          "Graphical Interface Layer",
          "Global Internet Link",
        ],
        correct: "Global Interpreter Lock",
      },
      {
        q: "What is a metaclass?",
        options: [
          "Class that creates classes",
          "Decorator",
          "Module",
          "Library type",
        ],
        correct: "Class that creates classes",
      },
      {
        q: "async/await is used for?",
        options: ["Syntax styling", "Coroutines", "Classes", "Memory control"],
        correct: "Coroutines",
      },
      {
        q: "Predict: print([i*i for i in range(3)])",
        options: ["[0,1,4]", "[1,4,9]", "[0,1,2]", "[0,1,4,9]"],
        correct: "[0,1,4]",
      },
      {
        q: "Difference between deep copy and shallow copy?",
        options: [
          "No difference",
          "Shallow copies references, deep copies values",
          "Deep = list, shallow = dict",
          "Shallow copies values, deep copies references",
        ],
        correct: "Shallow copies references, deep copies values",
      },
      {
        q: "Predict: print(0.1 + 0.2 == 0.3)",
        options: ["True", "False", "Error", "0.3"],
        correct: "False",
      },
      {
        q: "Explain Python's iterator protocol.",
        options: [
          "next() method and __iter__",
          "Loops only",
          "Memory allocation",
          "Decorators",
        ],
        correct: "next() method and __iter__",
      },
      {
        q: "Predict: print(list(map(lambda x: x+1, [1,2,3])))",
        options: ["[2,3,4]", "[1,2,3]", "[1,2,3,4]", "[3,4,5]"],
        correct: "[2,3,4]",
      },
      {
        q: "Explain Python's descriptor protocol.",
        options: [
          "__get__, __set__, __delete__ methods",
          "Decorators",
          "Classes",
          "Memory management",
        ],
        correct: "__get__, __set__, __delete__ methods",
      },
      {
        q: "Predict: print([1,2,3] * 2)",
        options: ["[1,2,3,1,2,3]", "[2,4,6]", "[1,2,3,2]", "[1,2,3]"],
        correct: "[1,2,3,1,2,3]",
      },
      {
        q: "Difference between classmethod and staticmethod?",
        options: [
          "No difference",
          "classmethod gets class, staticmethod does not",
          "staticmethod gets class, classmethod does not",
          "Both get instance",
        ],
        correct: "classmethod gets class, staticmethod does not",
      },
      {
        q: "Explain Python's multiple inheritance MRO.",
        options: [
          "C3 linearization algorithm",
          "Depth first search",
          "Breadth first search",
          "Topological sort",
        ],
        correct: "C3 linearization algorithm",
      },
      {
        q: "Predict: print('abc'[::-1])",
        options: ["'cba'", "'abc'", "'bac'", "Error"],
        correct: "'cba'",
      },
      {
        q: "What is monkey patching?",
        options: [
          "Changing behavior of module/class at runtime",
          "Loop optimization",
          "Memory management",
          "Syntax highlighting",
        ],
        correct: "Changing behavior of module/class at runtime",
      },
      {
        q: "Predict: print({1,2,3} & {2,3,4})",
        options: ["{2,3}", "{1,2,3,4}", "{1,4}", "Error"],
        correct: "{2,3}",
      },
      {
        q: "Explain Python's GIL impact on threading.",
        options: [
          "Only one thread executes Python bytecode at a time",
          "Multiple threads run freely",
          "Thread safety guaranteed",
          "Memory optimized",
        ],
        correct: "Only one thread executes Python bytecode at a time",
      },
      {
        q: "Predict: print(True + True + False)",
        options: ["2", "3", "1", "Error"],
        correct: "2",
      },
      {
        q: "What is a coroutine?",
        options: ["Function using async/await", "Class", "Loop", "Memory tool"],
        correct: "Function using async/await",
      },
      {
        q: "Difference between __str__ and __repr__?",
        options: [
          "__str__ for readable, __repr__ for unambiguous",
          "Both same",
          "__str__ returns object",
          "__repr__ prints nothing",
        ],
        correct: "__str__ for readable, __repr__ for unambiguous",
      },
      {
        q: "Predict: print(5 // 2)",
        options: ["2", "2.5", "3", "Error"],
        correct: "2",
      },
    ],

    cpp: [
      {
        q: "What is RAII?",
        options: [
          "Memory garbage collector",
          "Resource Acquisition Is Initialization",
          "File loader",
          "Runtime array indexing",
        ],
        correct: "Resource Acquisition Is Initialization",
      },
      {
        q: "What is memory leaking?",
        options: [
          "Extra RAM allocation",
          "Memory not freed",
          "Stack overflow",
          "Hard-drive issue",
        ],
        correct: "Memory not freed",
      },
      {
        q: "What is virtual inheritance?",
        options: [
          "Avoiding duplicate base class",
          "Multiple files",
          "Hidden classes",
          "Local variables",
        ],
        correct: "Avoiding duplicate base class",
      },
      {
        q: "Predict output: int a=5; cout<<a++;",
        options: ["5", "6", "Error", "0"],
        correct: "5",
      },
      {
        q: "Difference between struct and class?",
        options: [
          "No difference",
          "struct default public, class default private",
          "struct private, class public",
          "struct same as class",
        ],
        correct: "struct default public, class default private",
      },
      {
        q: "What is a template?",
        options: ["Function overloading", "Generic type", "Loop", "Pointer"],
        correct: "Generic type",
      },
      {
        q: "Explain const correctness.",
        options: [
          "Protect variable from modification",
          "Loops",
          "Memory",
          "Function call",
        ],
        correct: "Protect variable from modification",
      },
      {
        q: "Predict: int* p = nullptr; cout<<p;",
        options: ["0", "Address", "Error", "Undefined"],
        correct: "0",
      },
      {
        q: "What is multiple inheritance ambiguity?",
        options: ["Diamond problem", "Loops", "Memory issue", "Compiler error"],
        correct: "Diamond problem",
      },
      {
        q: "Explain inline function.",
        options: [
          "Function code copied at call site",
          "Function removed",
          "Loop",
          "Memory management",
        ],
        correct: "Function code copied at call site",
      },
      {
        q: "What is a smart pointer?",
        options: [
          "Pointer managing memory",
          "Regular pointer",
          "Array",
          "Function",
        ],
        correct: "Pointer managing memory",
      },
      {
        q: "Predict: vector<int> v={1,2}; v.push_back(3); cout<<v[2];",
        options: ["3", "2", "1", "Error"],
        correct: "3",
      },
      {
        q: "What is a lambda in C++?",
        options: ["Anonymous function", "Class", "Pointer", "Loop"],
        correct: "Anonymous function",
      },
      {
        q: "Predict: int arr[3]={1,2}; cout<<arr[2];",
        options: ["0", "2", "1", "Error"],
        correct: "0",
      },
      {
        q: "Difference between shallow copy and deep copy?",
        options: [
          "Shallow copies reference, deep copies value",
          "Both same",
          "Shallow = class, deep = struct",
          "Error",
        ],
        correct: "Shallow copies reference, deep copies value",
      },
      {
        q: "What is a pure virtual function?",
        options: [
          "=0 function",
          "Regular function",
          "Static function",
          "Template function",
        ],
        correct: "=0 function",
      },
      {
        q: "Predict: sizeof(bool)",
        options: ["1", "2", "4", "Depends"],
        correct: "1",
      },
      {
        q: "Explain RAII for file streams.",
        options: [
          "Auto-closes file at scope exit",
          "Manual close needed",
          "Loop",
          "Memory",
        ],
        correct: "Auto-closes file at scope exit",
      },
      {
        q: "Predict: int* a = new int(5); delete a;",
        options: ["Frees memory", "Error", "5", "0"],
        correct: "Frees memory",
      },
      {
        q: "Difference between stack and heap memory?",
        options: [
          "Stack automatic, heap dynamic",
          "Both same",
          "Heap static, stack dynamic",
          "Loop",
        ],
        correct: "Stack automatic, heap dynamic",
      },
    ],

    csharp: [
      {
        q: "What is LINQ?",
        options: [
          "Loop tool",
          "Query language for collections",
          "Compiler",
          "Debugger",
        ],
        correct: "Query language for collections",
      },
      {
        q: "What is polymorphism?",
        options: [
          "Many classes in one file",
          "Methods with different forms",
          "Deleting objects",
          "Encrypting data",
        ],
        correct: "Methods with different forms",
      },
      {
        q: "Garbage collector does?",
        options: [
          "Manages CPU",
          "Reclaims unused memory",
          "Imports modules",
          "Handles threads",
        ],
        correct: "Reclaims unused memory",
      },
      {
        q: "What is async/await in C#?",
        options: [
          "Styling code",
          "Async programming",
          "Loops",
          "Class declaration",
        ],
        correct: "Async programming",
      },
      {
        q: "Difference between ref and out?",
        options: [
          "No difference",
          "ref requires initialized, out does not",
          "ref is readonly, out writable",
          "Both optional",
        ],
        correct: "ref requires initialized, out does not",
      },
      {
        q: "What is a delegate?",
        options: ["Pointer to function", "Class type", "Loop", "Memory block"],
        correct: "Pointer to function",
      },
      {
        q: "Explain events in C#.",
        options: [
          "Delegates triggered on action",
          "Loops",
          "Variables",
          "Compiler directive",
        ],
        correct: "Delegates triggered on action",
      },
      {
        q: "Predict: int x=5; x += x++;",
        options: ["10", "11", "5", "Error"],
        correct: "10",
      },
      {
        q: "Difference between interface and abstract class?",
        options: [
          "Abstract = partial implementation, Interface = only signature",
          "No difference",
          "Both same",
          "Interface = private methods",
        ],
        correct:
          "Abstract = partial implementation, Interface = only signature",
      },
      {
        q: "What is covariance and contravariance?",
        options: [
          "Type conversion rules for generics",
          "Memory management",
          "Loop control",
          "Event handling",
        ],
        correct: "Type conversion rules for generics",
      },
      {
        q: "Predict: string s=null; Console.WriteLine(s?.Length);",
        options: ["null", "0", "Error", "1"],
        correct: "null",
      },
      {
        q: "Explain yield keyword.",
        options: [
          "Creates iterator lazily",
          "Memory allocation",
          "Loop",
          "Threading",
        ],
        correct: "Creates iterator lazily",
      },
      {
        q: "Difference between value and reference types?",
        options: [
          "Value stored on stack, reference on heap",
          "Both same",
          "Reference = stack, value = heap",
          "Loop",
        ],
        correct: "Value stored on stack, reference on heap",
      },
      {
        q: "What is boxing/unboxing?",
        options: [
          "Value type ↔ reference type conversion",
          "Loops",
          "Array conversion",
          "Memory copying",
        ],
        correct: "Value type ↔ reference type conversion",
      },
      {
        q: "Predict: var x = new int[]{1,2}; var y = x; y[0]=9; Console.WriteLine(x[0]);",
        options: ["9", "1", "2", "Error"],
        correct: "9",
      },
      {
        q: "What are extension methods?",
        options: [
          "Static methods adding behavior to types",
          "Class inheritance",
          "Loops",
          "Events",
        ],
        correct: "Static methods adding behavior to types",
      },
      {
        q: "Explain C# nullable types.",
        options: [
          "Can hold null with ?",
          "Cannot hold null",
          "Only for strings",
          "Only for arrays",
        ],
        correct: "Can hold null with ?",
      },
      {
        q: "Predict: checked { int a=int.MaxValue; a++; }",
        options: ["Overflow exception", "Wraps around", "Error", "0"],
        correct: "Overflow exception",
      },
      {
        q: "Difference between Task and Thread?",
        options: [
          "Task higher-level abstraction over Thread",
          "Both same",
          "Thread = Task",
          "Task runs instantly",
        ],
        correct: "Task higher-level abstraction over Thread",
      },
      {
        q: "What is reflection in C#?",
        options: [
          "Inspect and modify type info at runtime",
          "Memory management",
          "Loop optimization",
          "Compiler trick",
        ],
        correct: "Inspect and modify type info at runtime",
      },
    ],

    reactjs: [
      {
        q: "What is reconciliation?",
        options: [
          "Removing props",
          "React updating virtual DOM",
          "Browser refresh",
          "CSS rendering",
        ],
        correct: "React updating virtual DOM",
      },
      {
        q: "What are keys used for?",
        options: [
          "CSS animations",
          "Tracking list items",
          "Memory saving",
          "Event IDs",
        ],
        correct: "Tracking list items",
      },
      {
        q: "What is hydration?",
        options: [
          "State merging",
          "React attaching events to server HTML",
          "Browser caching",
          "CSS loading",
        ],
        correct: "React attaching events to server HTML",
      },
      {
        q: "Explain useEffect dependency array.",
        options: [
          "Controls when effect runs",
          "Memory allocation",
          "Class initialization",
          "Looping",
        ],
        correct: "Controls when effect runs",
      },
      {
        q: "What is context API?",
        options: [
          "Global state management",
          "CSS tool",
          "Loop handler",
          "Routing",
        ],
        correct: "Global state management",
      },
      {
        q: "Difference between controlled and uncontrolled components?",
        options: [
          "Controlled = React state, Uncontrolled = DOM state",
          "No difference",
          "Controlled = HTML only",
          "Uncontrolled = React only",
        ],
        correct: "Controlled = React state, Uncontrolled = DOM state",
      },
      {
        q: "What is React Fiber?",
        options: [
          "Reconciler engine",
          "JS compiler",
          "DOM element",
          "Routing library",
        ],
        correct: "Reconciler engine",
      },
      {
        q: "Predict: setState is asynchronous?",
        options: ["Yes", "No", "Sometimes", "Never"],
        correct: "Yes",
      },
      {
        q: "What is memoization in React?",
        options: [
          "useMemo caches values",
          "Loops",
          "State storage",
          "Event handling",
        ],
        correct: "useMemo caches values",
      },
      {
        q: "Explain error boundaries.",
        options: [
          "Catch runtime errors in components",
          "Memory management",
          "Loops",
          "CSS rendering",
        ],
        correct: "Catch runtime errors in components",
      },
      {
        q: "Predict: React.StrictMode doubles rendering in dev?",
        options: ["Yes", "No", "Sometimes", "Never"],
        correct: "Yes",
      },
      {
        q: "What is lazy loading components?",
        options: [
          "Load components on demand",
          "Load all at start",
          "Memory allocation",
          "Looping",
        ],
        correct: "Load components on demand",
      },
      {
        q: "Difference between useCallback and useMemo?",
        options: [
          "useCallback caches function, useMemo caches value",
          "Both same",
          "useMemo caches function, useCallback value",
          "Memory tool",
        ],
        correct: "useCallback caches function, useMemo caches value",
      },
      {
        q: "Explain portals in React.",
        options: [
          "Render child outside parent DOM hierarchy",
          "Loops",
          "CSS trick",
          "Event delegation",
        ],
        correct: "Render child outside parent DOM hierarchy",
      },
      {
        q: "Predict: updating state in loop?",
        options: [
          "Batch updates asynchronously",
          "Updates instantly",
          "Error",
          "Memory leak",
        ],
        correct: "Batch updates asynchronously",
      },
      {
        q: "What is forwardRef?",
        options: [
          "Pass ref to child component",
          "Loop",
          "CSS trick",
          "Memory allocation",
        ],
        correct: "Pass ref to child component",
      },
      {
        q: "Explain suspense component.",
        options: [
          "Handles lazy loading fallback",
          "Loops",
          "State management",
          "Routing",
        ],
        correct: "Handles lazy loading fallback",
      },
      {
        q: "Difference between React.memo and PureComponent?",
        options: [
          "Both optimize rendering",
          "Different",
          "Both same",
          "No difference",
        ],
        correct: "Both optimize rendering",
      },
      {
        q: "Predict: key={index} potential issue?",
        options: ["Reordering issues", "No issue", "Memory leak", "Error"],
        correct: "Reordering issues",
      },
      {
        q: "What is the effect cleanup function?",
        options: [
          "Runs before effect re-runs/unmount",
          "Loops",
          "Memory management",
          "Routing",
        ],
        correct: "Runs before effect re-runs/unmount",
      },
    ],

    typescript: [
      {
        q: "What is structural typing?",
        options: [
          "Types are compared by structure",
          "Types compared by name",
          "Type deletion",
          "Memory typing",
        ],
        correct: "Types are compared by structure",
      },
      {
        q: "What is keyof?",
        options: [
          "Loop keyword",
          "Operator returning keys of a type",
          "String method",
          "Class tool",
        ],
        correct: "Operator returning keys of a type",
      },
      {
        q: "What is declaration merging?",
        options: [
          "Two files join",
          "TS merges type definitions",
          "Memory merging",
          "Module merging",
        ],
        correct: "TS merges type definitions",
      },
      {
        q: "Difference between interface and type alias?",
        options: [
          "Interfaces can be merged, types cannot",
          "No difference",
          "Types can be merged, interfaces cannot",
          "Both same",
        ],
        correct: "Interfaces can be merged, types cannot",
      },
      {
        q: "What is mapped type?",
        options: [
          "Transform existing type into new type",
          "Loop",
          "Memory",
          "JS object",
        ],
        correct: "Transform existing type into new type",
      },
      {
        q: "Explain generics.",
        options: ["Reusable type patterns", "Loops", "State", "Memory"],
        correct: "Reusable type patterns",
      },
      {
        q: "What is conditional type?",
        options: ["T extends U ? X : Y", "Loop", "Memory tool", "JS function"],
        correct: "T extends U ? X : Y",
      },
      {
        q: "What is type assertion?",
        options: ["Tell TS type of a value", "Loop", "Memory", "JS variable"],
        correct: "Tell TS type of a value",
      },
      {
        q: "Difference between unknown and any?",
        options: [
          "unknown safer than any",
          "Both same",
          "any safer",
          "unknown = any alias",
        ],
        correct: "unknown safer than any",
      },
      {
        q: "Predict: const x: any = 'a'; const y: number = x;",
        options: ["No compile error", "Error", "Warning", "Runtime error"],
        correct: "No compile error",
      },
      {
        q: "What is keyof typeof?",
        options: ["Get keys of object type", "Loop", "Memory", "Function"],
        correct: "Get keys of object type",
      },
      {
        q: "Difference between readonly and const?",
        options: [
          "readonly = type, const = value",
          "Both same",
          "const = type, readonly = value",
          "Loop",
        ],
        correct: "readonly = type, const = value",
      },
      {
        q: "Predict: interface A {a: number} const x: A = {a:1};",
        options: ["Valid", "Invalid", "Error", "Warning"],
        correct: "Valid",
      },
      {
        q: "Explain utility types (Partial, Pick, Omit).",
        options: ["Transform types", "Loops", "Memory", "JS tricks"],
        correct: "Transform types",
      },
      {
        q: "What is type guard?",
        options: ["Check type at runtime", "Loop", "Memory", "JS tool"],
        correct: "Check type at runtime",
      },
      {
        q: "Predict: type A = string | number; const x: A = 5;",
        options: ["Valid", "Invalid", "Error", "Warning"],
        correct: "Valid",
      },
      {
        q: "Explain enum in TypeScript.",
        options: ["Named constants", "Loops", "Memory", "JS object"],
        correct: "Named constants",
      },
      {
        q: "Difference between never and void?",
        options: [
          "never = unreachable, void = no return",
          "Both same",
          "void = unreachable, never = no return",
          "Loop",
        ],
        correct: "never = unreachable, void = no return",
      },
      {
        q: "What is intersection type?",
        options: ["A & B type must satisfy both", "Union", "Loop", "Memory"],
        correct: "A & B type must satisfy both",
      },
      {
        q: "Predict: const x: any = 1 as string;",
        options: ["Valid", "Error", "Warning", "Runtime error"],
        correct: "Valid",
      },
    ],

    java: [
      {
        q: "What is multithreading?",
        options: [
          "Many variables",
          "Executing multiple threads at once",
          "Fast loops",
          "Memory control",
        ],
        correct: "Executing multiple threads at once",
      },
      {
        q: "What is JVM garbage collection?",
        options: [
          "Deleting files",
          "Automatic memory cleanup",
          "Sorting data",
          "Encrypting output",
        ],
        correct: "Automatic memory cleanup",
      },
      {
        q: "What is reflection?",
        options: [
          "Image processing",
          "Inspecting classes at runtime",
          "Loop optimization",
          "Data logging",
        ],
        correct: "Inspecting classes at runtime",
      },
      {
        q: "Difference between equals() and ==?",
        options: [
          "equals() compares value, == compares reference",
          "Both same",
          "== compares value",
          "equals() compares reference",
        ],
        correct: "equals() compares value, == compares reference",
      },
      {
        q: "Explain synchronized keyword.",
        options: ["Thread-safe block/method", "Loop", "Memory", "Class"],
        correct: "Thread-safe block/method",
      },
      {
        q: "Predict: final int x = 5; x=6;",
        options: ["Error", "6", "5", "Undefined"],
        correct: "Error",
      },
      {
        q: "What is volatile?",
        options: [
          "Variable updated across threads",
          "Memory optimization",
          "Loop",
          "Class",
        ],
        correct: "Variable updated across threads",
      },
      {
        q: "Difference between abstract class and interface?",
        options: [
          "Abstract = partial impl, interface = only signatures",
          "Both same",
          "Interface = partial impl",
          "Abstract = only signatures",
        ],
        correct: "Abstract = partial impl, interface = only signatures",
      },
      {
        q: "Explain Java memory model.",
        options: [
          "Defines how threads interact with memory",
          "Loops",
          "Compiler",
          "Runtime",
        ],
        correct: "Defines how threads interact with memory",
      },
      {
        q: "What is deadlock?",
        options: [
          "Threads waiting indefinitely",
          "Memory leak",
          "Stack overflow",
          "Looping",
        ],
        correct: "Threads waiting indefinitely",
      },
      {
        q: "Predict: String s = null; System.out.println(s.length());",
        options: ["NullPointerException", "0", "Error", "Empty"],
        correct: "NullPointerException",
      },
      {
        q: "Difference between HashMap and Hashtable?",
        options: [
          "HashMap not synchronized, Hashtable synchronized",
          "Both same",
          "Hashtable faster",
          "HashMap slower",
        ],
        correct: "HashMap not synchronized, Hashtable synchronized",
      },
      {
        q: "Explain transient keyword.",
        options: ["Variable not serialized", "Loop", "Memory", "Threading"],
        correct: "Variable not serialized",
      },
      {
        q: "What is instanceof?",
        options: ["Check type at runtime", "Loop", "Memory", "Compiler"],
        correct: "Check type at runtime",
      },
      {
        q: "Difference between Comparable and Comparator?",
        options: [
          "Comparable = natural order, Comparator = custom order",
          "Both same",
          "Comparator = natural, Comparable = custom",
          "Loop",
        ],
        correct: "Comparable = natural order, Comparator = custom order",
      },
      {
        q: "Predict: Integer a = 127; Integer b = 127; System.out.println(a==b);",
        options: ["true", "false", "Error", "Depends"],
        correct: "true",
      },
      {
        q: "Explain Java ClassLoader.",
        options: ["Loads classes dynamically", "Loop", "Memory", "Threading"],
        correct: "Loads classes dynamically",
      },
      {
        q: "What is Java annotation?",
        options: ["Metadata for code", "Loop", "Memory", "Class"],
        correct: "Metadata for code",
      },
      {
        q: "Difference between Stack and Heap in Java?",
        options: [
          "Stack = method call, Heap = objects",
          "Both same",
          "Heap = methods, Stack = objects",
          "Loop",
        ],
        correct: "Stack = method call, Heap = objects",
      },
      {
        q: "Explain Java generics.",
        options: [
          "Type-safe reusable classes/methods",
          "Loops",
          "Memory",
          "Compiler trick",
        ],
        correct: "Type-safe reusable classes/methods",
      },
    ],

    go: [
      {
        q: "What is a select statement?",
        options: [
          "SQL query",
          "Handles multiple channel ops",
          "Loop",
          "Struct initializer",
        ],
        correct: "Handles multiple channel ops",
      },
      {
        q: "What does defer do?",
        options: [
          "Stops execution",
          "Runs function later (end of call)",
          "Starts goroutine",
          "Creates channel",
        ],
        correct: "Runs function later (end of call)",
      },
      {
        q: "What is interface in Go?",
        options: ["Class", "Type that defines behavior", "Package", "Loop"],
        correct: "Type that defines behavior",
      },
      {
        q: "Explain goroutines.",
        options: ["Lightweight threads", "Loops", "Memory", "Structs"],
        correct: "Lightweight threads",
      },
      {
        q: "Difference between buffered and unbuffered channels?",
        options: [
          "Buffered can store, unbuffered blocks",
          "Both same",
          "Unbuffered stores",
          "Buffered blocks",
        ],
        correct: "Buffered can store, unbuffered blocks",
      },
      {
        q: "Predict: var x interface{} = 5; fmt.Println(x.(int) + 1)",
        options: ["6", "5", "Error", "0"],
        correct: "6",
      },
      {
        q: "What is panic and recover?",
        options: ["Error handling mechanism", "Loop", "Memory", "Threading"],
        correct: "Error handling mechanism",
      },
      {
        q: "Difference between slice and array?",
        options: [
          "Slice dynamic, array fixed",
          "Both same",
          "Array dynamic, slice fixed",
          "Loop",
        ],
        correct: "Slice dynamic, array fixed",
      },
      {
        q: "Explain Go memory management.",
        options: [
          "Automatic garbage collection",
          "Manual free needed",
          "Loop",
          "Threading",
        ],
        correct: "Automatic garbage collection",
      },
      {
        q: "What is blank identifier (_)?",
        options: ["Ignore value", "Memory", "Loop", "Threading"],
        correct: "Ignore value",
      },
      {
        q: "Predict: x := make([]int, 0, 5); len(x)",
        options: ["0", "5", "Error", "Undefined"],
        correct: "0",
      },
      {
        q: "Difference between value and pointer receivers?",
        options: [
          "Value copies, pointer modifies original",
          "Both same",
          "Pointer copies, value modifies",
          "Loop",
        ],
        correct: "Value copies, pointer modifies original",
      },
      {
        q: "Explain embedding in Go.",
        options: ["Composition over inheritance", "Loops", "Memory", "Structs"],
        correct: "Composition over inheritance",
      },
      {
        q: "What is Go interface type assertion?",
        options: [
          "Cast interface to concrete type",
          "Memory",
          "Loop",
          "Thread",
        ],
        correct: "Cast interface to concrete type",
      },
      {
        q: "Difference between init() and main()?",
        options: [
          "init runs first automatically",
          "Both same",
          "main runs first",
          "Loop",
        ],
        correct: "init runs first automatically",
      },
      {
        q: "Explain Go maps.",
        options: ["Key-value collection", "Loop", "Memory", "Struct"],
        correct: "Key-value collection",
      },
      {
        q: "Predict: var x []int; fmt.Println(x==nil)",
        options: ["true", "false", "Error", "0"],
        correct: "true",
      },
      {
        q: "Explain Go channels select default.",
        options: ["Non-blocking select", "Loop", "Memory", "Threading"],
        correct: "Non-blocking select",
      },
      {
        q: "Difference between range over slice vs array?",
        options: [
          "Slice iterates over elements, array fixed size",
          "Both same",
          "Array dynamic",
          "Loop",
        ],
        correct: "Slice iterates over elements, array fixed size",
      },
      {
        q: "What is Go recover() used for?",
        options: ["Catch panic", "Loop", "Memory", "Threading"],
        correct: "Catch panic",
      },
    ],

    kotlin: [
      {
        q: "What is inline function?",
        options: [
          "Removed function",
          "Function copied at call site",
          "Async function",
          "Private method",
        ],
        correct: "Function copied at call site",
      },
      {
        q: "What is companion object?",
        options: [
          "Extra class",
          "Singleton inside class",
          "Data file",
          "UI element",
        ],
        correct: "Singleton inside class",
      },
      {
        q: "What is sealed class?",
        options: [
          "Encrypted class",
          "Class with restricted subclasses",
          "Private class",
          "Large class",
        ],
        correct: "Class with restricted subclasses",
      },
      {
        q: "Difference between var and val?",
        options: [
          "var mutable, val immutable",
          "Both same",
          "val mutable, var immutable",
          "Loop",
        ],
        correct: "var mutable, val immutable",
      },
      {
        q: "Predict: val list = listOf(1,2,3).map { it*2 }",
        options: ["[2,4,6]", "[1,2,3]", "[1,4,9]", "Error"],
        correct: "[2,4,6]",
      },
      {
        q: "Explain coroutines.",
        options: ["Lightweight threads for async", "Loop", "Memory", "Thread"],
        correct: "Lightweight threads for async",
      },
      {
        q: "Difference between launch and async?",
        options: [
          "launch = Job, async = Deferred result",
          "Both same",
          "async = Job, launch = Deferred",
          "Loop",
        ],
        correct: "launch = Job, async = Deferred result",
      },
      {
        q: "What is typealias?",
        options: ["Rename type", "Loop", "Memory", "Thread"],
        correct: "Rename type",
      },
      {
        q: "Explain lateinit.",
        options: ["Initialize var later", "Loop", "Memory", "Thread"],
        correct: "Initialize var later",
      },
      {
        q: "Difference between open and abstract?",
        options: [
          "open can have implementation, abstract must override",
          "Both same",
          "abstract can have implementation, open must override",
          "Loop",
        ],
        correct: "open can have implementation, abstract must override",
      },
      {
        q: "Predict: val a: Int? = null; println(a?:0)",
        options: ["0", "null", "Error", "1"],
        correct: "0",
      },
      {
        q: "What is delegation pattern?",
        options: [
          "Delegate responsibility to another class",
          "Loop",
          "Memory",
          "Thread",
        ],
        correct: "Delegate responsibility to another class",
      },
      {
        q: "Explain Kotlin generics.",
        options: ["Reusability and type safety", "Loop", "Memory", "Thread"],
        correct: "Reusability and type safety",
      },
      {
        q: "Difference between == and ===?",
        options: [
          "== compares value, === compares reference",
          "Both same",
          "=== compares value, == reference",
          "Loop",
        ],
        correct: "== compares value, === compares reference",
      },
      {
        q: "What is data class?",
        options: ["Class mainly for holding data", "Loop", "Memory", "Thread"],
        correct: "Class mainly for holding data",
      },
      {
        q: "Predict: val x = arrayOf(1,2); x[0]=3; println(x[0])",
        options: ["3", "1", "2", "Error"],
        correct: "3",
      },
      {
        q: "Explain Kotlin scope functions (let, run, with).",
        options: ["Operate on object within scope", "Loop", "Memory", "Thread"],
        correct: "Operate on object within scope",
      },
      {
        q: "Difference between nullable and non-nullable types?",
        options: [
          "Nullable can hold null",
          "Both same",
          "Non-nullable can hold null",
          "Loop",
        ],
        correct: "Nullable can hold null",
      },
      {
        q: "Predict: val x = 5; val y = x.also { println(it) }",
        options: ["5", "it", "Error", "0"],
        correct: "5",
      },
      {
        q: "What is operator overloading?",
        options: [
          "Custom implementation for operators",
          "Loop",
          "Memory",
          "Thread",
        ],
        correct: "Custom implementation for operators",
      },
      {
        q: "Explain Kotlin inline classes.",
        options: [
          "Wraps value without runtime overhead",
          "Loop",
          "Memory",
          "Thread",
        ],
        correct: "Wraps value without runtime overhead",
      },
    ],
  },
};

export default QUESTIONS;
