import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';;
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';




import ArticleTitleDeckConfig from './src/ArticleTitleDeck.js';


import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';


import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';


import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';


import InlineItems from './src/plugins/InlineItems/index.js';

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';

import List from '@ckeditor/ckeditor5-list/src/list';
import GetEditorOnButtonPress from './src/plugins/GetEditorOnButtonPress/GetEditorOnButtonPress.js';




const ArticleBodyConfig = {
    plugins: [ Essentials, Paragraph, Bold, Italic, Heading, HeadingButtonsUI, ParagraphButtonUI, /*InlineItems,*/ BlockQuote,Link, List, GetEditorOnButtonPress],
    toolbar: {
        items:[ 'heading2', 'paragraph', 'bold', 'italic','blockquote','link', 'numberedList', 'bulletedList',...['buyerzonewidget','comparisongrid','inlineimage','inlinevideo','product','relatedarticle','youtube'],'hereIsAnIconName'],
        viewportTopOffset:101
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
    },
    onButtonPress:editor=>{
        alert('This worked???')
    }
};


window.InlineEditor = InlineEditor;
window.ArticleBodyConfig = ArticleBodyConfig;
window.ArticleTitleDeckConfig = ArticleTitleDeckConfig;

const icons = ['buyerzonewidget','comparisongrid','inlineimage','inlinevideo','product','relatedarticle','youtube'].map(iconName=>{
    return require(`./src/plugins/InlineItems/icons/${iconName}.svg`)
});


window.IncCKEditorFeatures = {
    InlineEditor,
    Clipboard,
    Typing,
    Undo,
    Paragraph,
    Italic,
    Heading,
    HeadingButtonsUI,
    ParagraphButtonUI,
    Essentials,
    Bold,
    InlineItems,
    BlockQuote,
    Link,
    List,
    icons,
    Plugin,
    ButtonView,
    GetEditorOnButtonPress
}

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
        window.editor = editor;
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );


}

window.activate = activate;
