jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}

jQuery.fn.loadRepositories = function(username) {
    //this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
    //this.html('<span style="color: white">loading repos...</span>');

    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing

        console.log(repos);
        sortByName(repos);    
     
        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com')) {
               /* list.append('<dt class="repo-block"><a href="'+ 
                    (this.homepage?this.homepage:this.html_url) +
                    '">'
                    + this.name 
                    + '</a> <em>'
                    +(this.language?('('+this.language+')'):'')
                    +'</em></dt>'
                    +'<dd>' + this.description +'</dd>');
                //list.append('<dd>' + this.description +'</dd></dt>');*/

                list.append('<div class="repo-block">'
                    + '<em><a class="repo-title" target="_blank" href=' 
                    + (this.homepage?this.homepage:this.html_url)
                    + '>'
                    + this.name
                    + '</a></em>'
                    + '<p class="repo-text">'
                    + this.description
                    + '</p>'
                    + '</div>');
            }
        });     
      });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
            return a.name - b.name;
       });
    }
};
