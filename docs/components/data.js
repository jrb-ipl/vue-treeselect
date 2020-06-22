export default [
  {
    id: 'siteIds',
    label: 'Site',
    children: [
      { id: 'ef1445-fe1549eghju-hg5fgd', label: 'AWS Linux', parent: 'siteIds' },
      { id: 'hfdhfd-fhdfgdfgdfgd-dfgdg', label: 'AWS Windwos', parent: 'siteIds' },
    ],
  },
  {
    id: 'measurementIds',
    label: 'Métriques de pérformance',
    children: [
      { id: 'time_total', label: 'Time Total', parent: 'measurementIds' },
      { id: 'rum_speedindex', label: 'Rum Speedindex', parent: 'measurementIds' },
    ],
  },
  {
    id: 'stepIds',
    label: 'Etape',
    children: [
      { id: 'step1', label: 'Etape 1', parent: 'stepIds' },
      { id: 'step2', label: 'Etape 2', parent: 'stepIds' },
      { id: 'step3', label: 'Etape 3', parent: 'stepIds' },
      { id: 'step4', label: 'Etape 4', parent: 'stepIds' },
      { id: 'step5', label: 'Etape 5', parent: 'stepIds' },
    ],
    limit: 3,
  },
]
