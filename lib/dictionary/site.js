orion.dictionary.addDefinition('name', 'site', {
  type: String,
  label: 'Site Name',
  defaultValue: 'Orion Blog'
});

orion.dictionary.addDefinition('desc', 'site', {
  type: String,
  label: 'Site Description',
  defaultValue: 'Welcome to Orion CMS'
});

orion.dictionary.addDefinition('logo', 'site',
    orion.attribute('file', {
    label: 'Site Logo',
    optional: true
    })
);

// Do this
// orion.dictionary.addDefinition('description', 'site',
//   orion.attribute('summernote', {
//     label: 'Description of the site',
//     optional: true
//   })
// );
