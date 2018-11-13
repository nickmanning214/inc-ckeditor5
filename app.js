import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

//The idea was to just import these and use them on the fly in the inc codebase but this doesn't work for babel reasons
//import Plugin from '@ckeditor/ckeditor5-core/src/plugin';;
//import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';


//Shared
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

//Title,Deck (Essentials sans Enter and Shift+Enter)
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

//Body
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'; // enables clipboard, Enter, ShiftEnter, typing and undo support.
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import InlineItems from './src/plugins/InlineItems/index.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import GetEditorOnButtonPress from './src/plugins/GetEditorOnButtonPress/GetEditorOnButtonPress.js';

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
    GetEditorOnButtonPress,
    version:require('./package.json').version,
    currentVersion:'0.0.4'
}



