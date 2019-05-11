function getRepositories() {
    // new request to server stored as variable.
    const req = new XMLHttpRequest();
    // add event listener for the onclick of link and set the function to receive data.
    req.addEventListener('load', showRepositories);
    // request a 'GET' from the designated api.
    req.open('GET', 'https://api.github.com/users/octocat/repos');
    // request sent
    req.send();
}
// function that receives api data and parses the response to show.
function showRepositories(event, data) {
    // variable storing the response parsed by JSON
    const repos = JSON.parse(this.responseText);
    // variable setting repository template in HTML for data
    const src = document.getElementById('repository-template').innerHTML;
    // using Handlebars to compile the data for the template
    const template = Handlebars.compile(src)
    // passng the data to the template
    const repoList = template(repos);

    // inserting the data into the repositories id area of HTML.
    document.getElementById('repositories').innerHTML = repoList;
}
document.addEventListener('DOMContentLoaded', function(event){
    Handlebars.registerPartial('authorPartial', document.getElementById('author-partial-template').innerHTML);
});