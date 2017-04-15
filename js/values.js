//Default values for ANGULAR APPLICATION

angular.module('defaultConf',[])

.value('AppConfig',{
  url: 'http://www.gazetaglobale.net',
  categories: getCategories()
})


function getCategories(){
  var output = localStorage.getItem("categorySlugs");
  return output;
}