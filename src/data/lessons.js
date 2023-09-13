const commonAnalyticPath = "2023/fondamentales/analytique/cours/";
const commonBioPhysicPath = "2023/fondamentales/biophysiques/cours/";
const commonGeneticPath = "2023/fondamentales/genetique/cours/";
const commonGalenicPath = "2023/pharmaceutiques/galenique-industrielle/cours";

export const lessons = {
  "F-01": {
    links: [
      {
        label: "01-Solvants et Solutions 2023",
        path: `${commonAnalyticPath}01.1 SOLVANTS ET SOLUTIONS.pdf`,
      },
      {
        label: "02-Solution idéale non idéale 2023",
        path: `${commonAnalyticPath}01.1.2 suite cours solv-solution-idéale non-idéale.pdf`,
      },
      {
        label: "03-La chimie des solutions 2023",
        path: `${commonAnalyticPath}01.2 La Chimie des solutions.pdf`,
      },
      {
        label: "04-Les méthodes de mesures de PH 2022",
        path: `alternatives/fondamentales/analytiques/cours/2-2-Les-méthodes-de-mesure-du-pH.pdf`,
      },
      {
        label: "05-PH des solution aqueuses simples 2023",
        path: `${commonAnalyticPath}01.4 PH des solutions aqueuses simples.pdf`,
      },
      {
        label: "06-PH des solutions mélanges 2023",
        path: `${commonAnalyticPath}1.4.2 pH-des-solutions-de-mélange-Constantine.pdf`,
      },
      {
        label: "07-La protométrie en mélieux non aqueux 2023",
        path: `${commonAnalyticPath}01.5 La protométrie en milieu non aqueux.pdf`,
      },
    ],
  },
  "F-02": {
    links: [
      {
        label: "01-Equilibre Redox 2023",
        path: `${commonAnalyticPath}02.1 Equilibres Redox.pdf`,
      },
      {
        label: "02-Dosages oxydo-reductimétriques 2023",
        path: `${commonAnalyticPath}02.2 DO,SAGES OXYDO-REDUCTIMETRIQUES.pdf`,
      },
    ],
  },
  "F-03": {
    links: [
      {
        label: "01-Réactions de précipitations 2023",
        path: `${commonAnalyticPath}03. REACTIONS DE PRECIPITATIONS.pdf`,
      },
    ],
  },
  "F-04": {
    links: [
      {
        label: "01-Réactions de complexation 2023",
        path: `${commonAnalyticPath}04. Réactions de compléxation.pdf`,
      },
    ],
  },
  "F-05": {
    links: [
      {
        label: "01-Méthodes de séparation 2023",
        path: `${commonAnalyticPath}05- METHODES DE SEPARATION.pdf`,
      },
      {
        label: "02-Extraction liquide liquide 2020",
        path: "alternatives/fondamentales/analytiques/cours/9-Extraction liquide-liquide Lalouna (2020) + notes.pdf",
      },
    ],
  },
  "F-06": {
    links: [
      {
        label: "01-Intro aux méthodes chromatographiques 2023",
        path: `${commonAnalyticPath}06.1.1 Intro aux méthodes chromatographiques.pdf`,
      },
      {
        label: "02-Classification des méthodes chromatographiques 2023",
        path: `${commonAnalyticPath}06.1.2 Classification des méthodes chromatographiques.pdf`,
      },
      {
        label: "03-HPLC 2023",
        path: `${commonAnalyticPath}06.2 HPLC.pdf`,
      },
      {
        label: "04-CPG 2023",
        path: `${commonAnalyticPath}06.3 CPG .pdf`,
      },
      {
        label: "05-CCM 2023",
        path: `${commonAnalyticPath}06.4 CCM.pdf`,
      },
      {
        label: "06-Elécrophorèse capillaire 2023",
        path: `${commonAnalyticPath}06.5 Electophorèse capillaire.pdf`,
      },
    ],
  },
  "F-07": {
    links: [
      {
        label: "01-Intro aux méthodes spectrales 2023",
        path: `${commonAnalyticPath}07.1 Intro aux méthodes spectrales.pdf`,
      },
      {
        label: "02-Spectrophotométrie dans l'UV et le visible 2023",
        path: `${commonAnalyticPath}07.2 SPECTROPHOTOMETRIE D’ABSORPTION DANS L’ULTRAVIOLET ET LE VISIBLE.pdf`,
      },
      {
        label: "03-Spectrophotométrie Infra Rouge 2023",
        path: `${commonAnalyticPath}07.3 IR.pdf`,
      },
      {
        label: "04-Spectroscopie Atomique Alger!",
        path: "alternatives/fondamentales/analytiques/cours/9-Extraction liquide-liquide Lalouna (2020) + notes.pdf",
      },
    ],
  },
  "F-08": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonBioPhysicPath}01. Les interactions des rayonnements ionisants avec la matière.pdf`,
      },
    ],
  },
  "F-09": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonBioPhysicPath}02. La Radiobiologie.pdf`,
      },
    ],
  },
  "F-10": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonBioPhysicPath}03. Radioprotection.pdf`,
      },
    ],
  },
  "F-11": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonBioPhysicPath}04. Les lasers et leur application en médecine.pdf`,
      },
    ],
  },
  "F-12": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonBioPhysicPath}05. Les ultrasons et leur application en medecine.pdf`,
      },
    ],
  },
  "F-13": {
    links: [
      {
        label: "01-Hybridation moléculaire 2023",
        path: `${commonGeneticPath}12. Hybridation moléculaire.ppt`,
      },
      {
        label: "02-Lois de Mendel 2023",
        path: `${commonGeneticPath}10. Génétique formelle (Mendel).ppt`,
      },
    ],
  },
  "F-14": {
    links: [
      {
        label: "01-Transmission des maladies génétiques 2023",
        path: `${commonGeneticPath}17-CoursTransmission-des-maladies-génétiques-2023-Pharmacie-1.ppt`,
      },
    ],
  },
  "F-15": {
    links: [
      {
        label: "01-Les acides nucléiques 2023",
        path: `${commonGeneticPath}01. Les acides nucléiques.pdf`,
      },
      {
        label: "02-Les chromosomes 2023",
        path: `${commonGeneticPath}02. Les chromosomes.pdf`,
      },
      {
        label: "03-Les gènes 2023",
        path: `${commonGeneticPath}03. Les gènes.pdf`,
      },
      {
        label: "04-La réplication de l'ADN 2023",
        path: `${commonGeneticPath}04. la Replication de l'ADN.pdf`,
      },
      {
        label: "05-La transcription de l'ADN 2023",
        path: `${commonGeneticPath}05. la Transcription de l'ADN.pdf`,
      },
      {
        label: "06-La traduction 2023",
        path: `${commonGeneticPath}06. La Traduction.pdf`,
      },
      {
        label: "07-La regulation des expressions des gènes 2023",
        path: `${commonGeneticPath}07. La Régulation.ppt`,
      },
    ],
  },
  "F-16": {
    links: [
      {
        label: "01-Les sondes 2023",
        path: `${commonGeneticPath}13. Les sondes.ppt`,
      },
      {
        label: "02-Les Enzymes de restrictions 2023",
        path: `${commonGeneticPath}14. Les Enzymes de restriction et modification.ppt`,
      },
      {
        label: "03-Les vecteurs de clonage 2023",
        path: `${commonGeneticPath}15. Les Vecteurs de clonage.ppt`,
      },
    ],
  },
  "F-17": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonGeneticPath}08. Les Mutations.pdf`,
      },
    ],
  },
  "F-18": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonGeneticPath}16. Polymorphisme génétique.ppt`,
      },
    ],
  },
  "F-19": {
    links: [
      {
        label: "01-Caryotype 2023",
        path: `${commonGeneticPath}09. Caryotype.pdf`,
      },
    ],
  },
  "F-20": {
    links: [
      {
        label: "!! non désponible !!",
        path: "",
      },
    ],
  },
  "P-01": {
    links: [
      {
        label: "01-Sirops 2023",
        path: `${commonGalenicPath}01.1 SIROPS.docx`,
      },
      {
        label: "02-Les comprimés 2023",
        path: `${commonGalenicPath}01.2 Les comprimés.pdf`,
      },
      {
        label: "03-L'enrobage 2023",
        path: `${commonGalenicPath}01.3 L'enrobage.pdf`,
      },
      {
        label: "04-Les comprimés spéciaux 2023",
        path: `${commonGalenicPath}01.4 Les comprimées spéciaux.pdf`,
      },
      {
        label: "05-Géllules 2023",
        path: `${commonGalenicPath}01.5 Gélules-2022-2023.pdf`,
      },
      {
        label: "06-Capsules molles 2023",
        path: `${commonGalenicPath}01.6 Capsules-molles-2022-2023.pdf`,
      },
    ],
  },
  "P-02": {
    links: [
      {
        label: "01-Les préparations injectables 2023",
        path: `${commonGalenicPath}02. Les préparations injectables.pdf`,
      },
    ],
  },
  "P-03": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonGalenicPath}03. Formes cutanées 2022-2023.pdf`,
      },
    ],
  },
  "P-04": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonGalenicPath}04. Les-suppositoires.pdf`,
      },
    ],
  },
  "P-05": {
    links: [
      {
        label: "01-Cours",
        path: `${commonGalenicPath}05. biopharamcie.pdf`,
      },
    ],
  },
  "P-06": {
    links: [
      {
        label: "01-Vectorisation 2023",
        path: `${commonGalenicPath}06.1 Vectorisation - nouvelles formes pharmaceutiques.pdf`,
      },
      {
        label: "02-Système à libération controlée 2023",
        path: `${commonGalenicPath}06.2 Systemes à libération controlée - nouvelles formes pharmaceutique.pdf`,
      },
    ],
  },
  "P-07": {
    links: [
      {
        label: "01-Cours 2023",
        path: `${commonGalenicPath}07. Etudes de stabilité des medicaments.pdf`,
      },
    ],
  },
  "P-08": {
    links: [
      {
        label: "01-Conception d'une unité pharmaceutique 2022",
        path: `${commonGalenicPath}08.1 BPF-Conception-dune-unité-pharmaceutique.pdf`,
      },
      {
        label: "02-Conception d'une usine pharmaceutique 2022",
        path: `${commonGalenicPath}08.2 BPF-Conception-dune-usine-pharmaceutique-ZAC-.pdf`,
      },
      {
        label: "03-Matières premières 2020",
        path: `${commonGalenicPath}08.3 BPF-Matiere Premiere.pptx`,
      },
      {
        label: "04-Développement des médicaments 2020",
        path: `${commonGalenicPath}08.4 BPF-développement des médicaments 2020_Khodja.pdf`,
      },
      {
        label: "05-Transpositon d'échelle 2020",
        path: `${commonGalenicPath}08.5 BPF-Transposition d'échelle 2020_Khodja-1.pdf`,
      },
      {
        label: "06-AMM 2018",
        path: `${commonGalenicPath}08.6 BPF-AMM 2018.pdf`,
      },
      {
        label: "07-Assurance qualité 2020",
        path: `${commonGalenicPath}08.7 BPF-L'assurance qualité 2020-1.pdf`,
      },
      {
        label: "08-Qualification des équipements 2020",
        path: `${commonGalenicPath}08.8 BPF-Qualification des équipements 2020 _ Khoja.pdf`,
      },
      {
        label: "09-La validation part I 2020",
        path: `${commonGalenicPath}08.9 BPF-la validation 2020_Part1.pdf`,
      },
      {
        label: "09-La validation part II 2020",
        path: `${commonGalenicPath}08.9 BPF-la validation 2020_Part2.pdf`,
      },
      {
        label: "10-Développemnt et validation des méthodes analytiques 2020",
        path: `${commonGalenicPath}08.10 BPF-Développement et validation des méthodes analytiques (2020).pdf`,
      },
      {
        label: "11-Dissolution des formes orales solides 2020",
        path: `${commonGalenicPath}08.11 BPF-Dissolution des formes orales solides 2020.pptx`,
      },
      {
        label: "12-Controle des matières premières 2020",
        path: `${commonGalenicPath}08.12 BPF-Contrôle des matières premières (2020).pdf`,
      },
      {
        label: "13-Controle de produit fini 2020",
        path: `${commonGalenicPath}08.14 BPF-control de produit fini Achour-Bouakkaz.pdf`,
      },
      {
        label: "14-Notions de libération et de conformité des lots 2020",
        path: `${commonGalenicPath}08.16 BPF-Notions de libération et conformité des lots (2020).pdf`,
      },
      {
        label: "15-Traitement de l'air et la maitrise de la contamination 2020",
        path: `${commonGalenicPath}08.17 BPF-Traitement de l’air et maitrise de la contamination (2020).pdf`,
      },
      {
        label: "16-Bonnes pratiques de fabrication selon l'ANSM",
        path: `${commonGalenicPath}08.18 BPF-ANSM.pdf`,
      },
    ],
  },
  "P-09": {
    links: [
      {
        label: "01-Despersions + émulsions 2023",
        path: `${commonGalenicPath}09.1 Les  dispersions+emulsions.pdf`,
      },
      {
        label: "02-Suspensions 2023",
        path: `${commonGalenicPath}09.1 Les  dispersions+emulsions.pdf`,
      },
    ],
  },
};
