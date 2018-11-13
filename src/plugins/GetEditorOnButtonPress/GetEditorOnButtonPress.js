import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import { upcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';
import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

//import { toWidget, isWidget } from '@ckeditor/ckeditor5-widget/src/utils';


class GetEditorOnButtonPress extends Plugin {
    init() {
        const editor = this.editor;
        
            //Add a component to the component factory. Here you add the button. 
            this.editor.ui.componentFactory.add( 'hereIsAnIconName', locale => {
                
                const view = new ButtonView( locale );
    
                const iconName = 'buyerzonewidget';

                //ButtonView props to set.
                view.set( {
                    label: `Insert ${iconName}`,
                    icon: require(`../InlineItems/icons/${iconName}.svg`),
                    tooltip: true
                } );
    
                // Callback executed once the image is clicked.
                view.on( 'execute', () => {
                    
                    
                    //This is not a listener. This tells the model to change.
                    /*
                    this.editor.model.change( writer => {
                        let element = writer.createElement( iconName );
                        writer.appendText( iconName, element );
                        writer.insert(element,editor.model.document.selection.getFirstPosition());
                    } );*/
                    this.editor.config.get('onButtonPress')(editor);
                    
                } );
    
                return view;
            } );    
        
    }
}

export default GetEditorOnButtonPress;
