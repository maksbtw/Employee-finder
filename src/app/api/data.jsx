let teamData = [
    {
        id: 1,
        firstName: "Anna",
        lastName: "Kowalska",
        position: "Project Manager",
        experience: "8 lat w zarządzaniu projektami IT",
        description: "Zorganizowana i precyzyjna, świetnie zarządza czasem i zasobami. Skupiona na celach biznesowych i terminach, potrafi skutecznie koordynować pracę zespołów developerskich. Specjalizuje się w metodologiach Agile/Scrum, dbając o transparentność procesów. Zawsze ma plan awaryjny i uwielbia wyzwania związane z optymalizacją workflow.",
        technologies: ["Jira", "Trello", "Confluence", "MS Project", "Agile/Scrum"]
    },
    {
        id: 2,
        firstName: "Jan",
        lastName: "Nowak",
        position: "Senior Backend Developer",
        experience: "10 lat w backendzie",
        description: "Analityczny i cierpliwy, lubi rozwiązywać skomplikowane problemy algorytmiczne. Pasjonat czystego kodu i architektury mikroserwisów. Potrafi zoptymalizować nawet najbardziej złożone zapytania SQL. Mentor młodszych developerów, zawsze chętny do dzielenia się wiedzą. W wolnym czasie eksperymentuje z nowymi językami programowania.",
        technologies: ["Java (Spring Boot)", "Python (Django)", "Node.js", "PostgreSQL", "Docker"]
    },
    {
        id: 3,
        firstName: "Marta",
        lastName: "Wiśniewska",
        position: "Mid Frontend Developer",
        experience: "5 lat w frontendzie",
        description: "Kreatywna i dokładna, dba o pixel-perfect realizacje projektów. Specjalistka od UX i responsywności, która potrafi zamienić nawet najtrudniejsze wymagania w intuicyjne interfejsy. Ciągle uczy się nowych frameworków, śledząc trendy frontendowe. Jej komponenty są nie tylko ładne, ale i wydajne – optymalizuje nawet pojedyncze renderowania.",
        technologies: ["React", "Vue.js", "TypeScript", "CSS/SCSS", "Redux"]
    },
    {
        id: 4,
        firstName: "Piotr",
        lastName: "Zieliński",
        position: "Backend Developer",
        experience: "6 lat (backend + frontend)",
        description: "Uniwersalny programista o szerokich horyzontach, szybko adaptujący nowe technologie. Potrafi płynnie przechodzić między warstwą frontendu a logiką biznesową. Jego supermocą jest znajdowanie kompromisów między wymaganiami UX a możliwościami backendu. Buduje aplikacje z myślą o skalowalności – od warstwy prezentacyjnej po strukturę bazy danych.",
        technologies: ["JavaScript (Node.js + React)", "Python (FastAPI)", "MongoDB", "AWS"]
    },
    {
        id: 5,
        firstName: "Krzysztof",
        lastName: "Dąbrowski",
        position: "DevOps Engineer",
        experience: "7 lat w DevOps/Cloud",
        description: "Zorientowany na automatyzację i bezpieczeństwo infrastruktury. Eksperymentuje z nowymi narzędziami, by usprawnić CI/CD. Potrafi zdiagnozować problemy wydajnościowe w minutę. Jego infrastruktura jako kod (IaC) to wzór do naśladowania. Wdraża rozwiązania chmurowe z naciskiem na kosztooptymalizację – monitoruje nawet najmniejsze nadużycia zasobów.",
        technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
        id: 6,
        firstName: "Alicja",
        lastName: "Szymańska",
        position: "QA Automation Engineer",
        experience: "4 lata w testowaniu",
        description: "Skrupulatna i dociekliwa, uwielbia znajdować błędy tam, gdzie nikt się ich nie spodziewa. Pisze testy, które oszczędzają czas całego zespołu. Specjalizuje się w testach wydajnościowych i security testing. Jej testy E2E pokrywają nawet najbardziej nietypowe scenariusze użytkownika. Dba o to, by regresje były wykrywane zanim trafią do produkcji.",
        technologies: ["Selenium", "Cypress", "Postman", "Python (Pytest)"]
    },
    {
        id: 7,
        firstName: "Tomasz",
        lastName: "Lewandowski",
        position: "Junior Frontend Developer",
        experience: "9 lat w projektowaniu interfejsów",
        description: "Łączy design z funkcjonalnością, tworząc interfejsy, które są nie tylko piękne, ale i intuicyjne. Specjalista od user experience, który potrafi przewidzieć potrzeby użytkowników. Prowadzi warsztaty design thinking i tworzy szczegółowe persony. Jego systemy designu są spójne i dobrze udokumentowane. Wierzy, że dobry design rozwiązuje rzeczywiste problemy.",
        technologies: ["Figma", "Adobe XD", "Sketch", "User Research"]
    },
    {
        id: 8,
        firstName: "Ewa",
        lastName: "Wójcik",
        position: "QA Intern",
        experience: "1 rok w analizie danych",
        description: "Ciekawska i metodyczna, lubi eksperymentować z danymi, wydobywając z nich ukryte wzorce. Tworzy modele predykcyjne, które realnie wpływają na biznes. Potrafi wyjaśnić skomplikowane koncepcje ML w prosty sposób. Jej pipeline'y danych są wzorcowo czyste i udokumentowane. Wierzy, że dane to najcenniejszy zasób współczesnych organizacji.",
        technologies: ["Python (Pandas, TensorFlow)", "SQL", "Power BI", "Apache Spark"]
    }
];

export default teamData