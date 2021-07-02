import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FaqWebPartStrings';
import Faq from './components/Faq';
import { IFaqProps } from './components/IFaqProps';

export interface IFaqWebPartProps {
  description: string;
  listName: string;
}


export default class FaqWebPart extends BaseClientSideWebPart<IFaqWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFaqProps> = React.createElement(
      Faq,
      {
        description: this.properties.description,
        listName: this.properties.listName,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('listName', {
                  label: "MyList"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
