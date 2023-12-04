export default new Map<`--react-scrolling-background__${string}`, Omit<PropertyDefinition, 'name'>>([
  [
    '--react-scrolling-background__background-color',
    {
      inherits: true,
      initialValue: 'transparent',
      syntax: '<color>'
    }
  ],
  [
    '--react-scrolling-background__background-image',
    {
      inherits: true
    }
  ],
  [
    '--react-scrolling-background__duration',
    {
      inherits: true,
      initialValue: '600s',
      syntax: '<time>'
    }
  ],
  [
    '--react-scrolling-background__speed',
    {
      inherits: true,
      initialValue: '3',
      syntax: '<number>'
    }
  ]
]);
