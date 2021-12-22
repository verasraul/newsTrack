// create a function to displace a standard img when headLine titles don't retrieve urlToImage imgs
  const FALLBACK_POSTER_URL = "https://thumbs.dreamstime.com/b/headLine-film-company-logo-design-vector-template-headLine-film-company-logo-design-inspiration-vector-template-167661473.jpg";

//   function that clears the results 
    // no argument function
export const clearArticles = () => {
    //   reference from the list
      const list = document.getElementById("search-results");
      // remove child from list
        while (list.firstChild) {
            list.firstChild.remove();
        };
  };


//   helper function to create list item
const createListItem = (title, description, urlToImage, url) => {
    // create constant to hold the caption of the image
    const caption = `${title}`;
    const headline = `${description}`;
    // const headlineUrl = `${url}`;

    // create element for the title
    const captionNode = document.createElement("figcaption");
        // append text tool child to the element of the caption
        captionNode.appendChild(document.createTextNode(caption));
        captionNode.setAttribute('class', 'figcaption');

    // create element for the headline
    const headlineNode = document.createElement("a");
        // append headline child to the element of the caption
        headlineNode.appendChild(document.createTextNode(headline));
        headlineNode.setAttribute('class', 'headline');
        // set the source attritube to add the url to article 
        headlineNode.setAttribute('href', url);
        

    // element for article image
    const posterNode = document.createElement('img');
        posterNode.setAttribute('class', 'parent-image');
        // alternative text tool child for img element
        posterNode.setAttribute('alt', 'caption');
        // class to style img element
        posterNode.setAttribute('class', 'search-results-item-urlToImage');
        // set the source attritube to add the urlToImage url
        posterNode.setAttribute('src', urlToImage); 

    // assemble/create figure node 
    const figureNode = document.createElement('figure');
        // append the headline node to figue element
        figureNode.appendChild(headlineNode);
        // append the caption node to figure
        figureNode.appendChild(captionNode);
        // append the urlToImage node to figure
        figureNode.appendChild(posterNode);
       
        

    // create the actual list item
    const listItemNode = document.createElement('items');
        // create class to style list item
        figureNode.setAttribute('class', 'search-results-items');
        // append figure node to list
        listItemNode.appendChild(figureNode);

        return listItemNode;
    
};


// create a function that accepts Articles(API) array as an argument
export const appendArticles = (articles) => {
    // for each element grab the referenced list
    const list = document.getElementById("search-results");

    // iterate through array & for each headLine, create a list item node
    articles.forEach((headLine) => { 
      // creat function to display fallback img when headLine titles don't retrieve post imgs
      // const headLinePoster = headLine.urlToImage && headLine.urlToImage != 'null' ?  headLine.urlToImage : FALLBACK_POSTER_URL;
      // create list-item-nodes passing keys/items from objects in JSON array (ie. response you get from API requests)
      const listItemNode = createListItem(headLine.description, headLine.title, headLine.urlToImage, headLine.url);
        // append list items for each element
        list.appendChild(listItemNode);
    });
}

// create extension function for error message
export const setMessage = (message) => {
  // find error message element in HTML and replace text with what we decide to pass through
  document.getElementById('search-pane-message').textContent = message;
}