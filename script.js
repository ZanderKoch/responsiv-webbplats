/*This script generates the html for the articles on sida2.html, 
and does so based on a JSON string because that just feels propper*/

//initilizations
let main = document.getElementsByTagName("main")[0];

let articles = [
    '{"imageUrl":"lobsterleft.png" , "alt":"Evangelion Edition Crayfish EVA Unit-02" , "caption":"Lorem ipsum" , "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit."}',
    '{"imageUrl":"lobsterleft.png" , "alt":"Evangelion Edition Crayfish EVA Unit-02" , "caption":"Lorem ipsum" , "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit."}',
    '{"imageUrl":"lobsterleft.png" , "alt":"Evangelion Edition Crayfish EVA Unit-02" , "caption":"Lorem ipsum" , "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit."}',
    '{"imageUrl":"lobsterleft.png" , "alt":"Evangelion Edition Crayfish EVA Unit-02" , "caption":"Lorem ipsum" , "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit."}'
]

function init(){
    console.log(JSON.parse(articles[0]))
    generateArticles(articles);
}

function generateArticles(articleList){
    articleList.forEach((item)=> {
        currentArticle = JSON.parse(item);

        let article = document.createElement("article");
        
        //creating the contents of the article://
        
        //the figure and its contents:
        let figure = document.createElement("figure");
        
        //the image and its atributes
        let image = document.createElement("img");
        image.setAttribute("src", currentArticle.imageUrl)
        image.setAttribute("alt", currentArticle.alt)
        console.log(image);


        
        //caption and its text
        let caption = document.createElement("figcaption")
        let captionText = document.createTextNode(currentArticle.caption)
        caption.appendChild(captionText)
        
        //adding image and caption to figure 
        figure.appendChild(image);
        figure.appendChild(caption)

        //the text and its contents:
        let paragraph = document.createElement("p");
        let paragraphText = document.createTextNode(currentArticle.text);

        //adding text to the paragraph
        paragraph.appendChild(paragraphText);

        //adding figure and text to article
        article.appendChild(figure);
        article.appendChild(paragraph);

        //adding created article to main
        console.log(main);    //debug
        console.log(article); //debug
        main.appendChild(article);

    });
}

window.onload(init());


//
//DEBUGGING NOTES//
//