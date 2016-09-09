var contentful = require('contentful');
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'v1iux4e0iiol',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'e21a460dd5bd08407dd52a7621bc06de0b7f730a523540b24c7665b2430f72d0'
});
/*client.getEntry('5JQ715oDQW68k8EiEuKOk8')
.then(function (entry) {
  console.log('Entry:', entry);
  console.log(entry.fields.name);
});*/
/*client.getEntries()
.then(function (entries) {
  // log the title for all the entries that might have it
  entries.items.forEach(function (entry) {
    console.log(entry);
    if(entry.fields.title=="Children") {
      console.log(entry.fields.icon.fields.file.url)
      $(".example").html("<img src='https:"+entry.fields.icon.fields.file.url+"' width='auto' height='auto'/>");
    }
  })
})*/
client.getEntries({
  'content_type':'section'
}).then(function(entries){
  console.log(entries);
  entries.items.forEach(function(entry){
    console.log(entry.fields.header);
    if(entry.fields.data!=null){
      var fetchedData = entry.fields.data;
      console.log(fetchedData.stats.funds.highlight);
    }
  });
});