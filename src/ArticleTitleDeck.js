
//Essentials package, sans enter/shift+enter
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';


import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';


export default {
    plugins: [ 
        //Essentials, // enables clipboard, Enter, ShiftEnter, typing and undo support.
        Clipboard,
        Typing,
        Undo,
        Paragraph, Italic, Heading, HeadingButtonsUI, ParagraphButtonUI],
    toolbar: {
        items:['italic']
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' }
        ]
    }
}
