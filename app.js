import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import ArticleBodyConfig from './src/ArticleBody.js';
import ArticleTitleDeckConfig from './src/ArticleTitleDeck.js';


window.InlineEditor = InlineEditor;
window.ArticleBodyConfig = ArticleBodyConfig;
window.ArticleTitleDeckConfig = ArticleTitleDeckConfig;

console.log(2);
console.log(ArticleBodyConfig,ArticleTitleDeckConfig)

function activate(){

InlineEditor
    .create( document.querySelector( 'main h1' ),ArticleTitleDeckConfig )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );


InlineEditor
    .create( document.querySelector( 'main>p' ),ArticleTitleDeckConfig )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );


InlineEditor
    .create( document.querySelector( 'main section' ),ArticleBodyConfig )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );


}

window.activate = activate;
