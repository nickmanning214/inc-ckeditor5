
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';

import InlineItems from './plugins/InlineItems/index.js';

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';

import List from '@ckeditor/ckeditor5-list/src/list';

export default {
    plugins: [ Essentials, Paragraph, Bold, Italic, Heading, HeadingButtonsUI, ParagraphButtonUI, InlineItems, BlockQuote,Link, List],
    toolbar: {
        items:[ 'heading2', 'paragraph', 'bold', 'italic','blockquote','link', 'numberedList', 'bulletedList',...['buyerzonewidget','comparisongrid','inlineimage','inlinevideo','product','relatedarticle','youtube']],
        viewportTopOffset:101
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
    }
}
