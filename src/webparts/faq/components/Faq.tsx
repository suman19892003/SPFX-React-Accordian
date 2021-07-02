import * as React from 'react';
import styles from './Faq.module.scss';
import { IFaqProps } from './IFaqProps';
import { IPnpReactAccordionState } from './IPnpReactAccordionState';
import { escape } from '@microsoft/sp-lodash-subset';
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";
import { SPService } from '../../../Service/SPService';

export default class Faq extends React.Component<IFaqProps, IPnpReactAccordionState> {

  private _services: SPService = null;
  constructor(props: IFaqProps) {
    super(props);
    this.state = {
      listItems: [],
      errorMessage: ''
    }
    /** Bind service using current context */
    this._services = new SPService(this.props.context);
  }

  public componentDidMount() {
    this.getListItems();
  }

  /** Get items of selected list and set values in state */
  private async getListItems() {
    if (this.props.listName) {
      let items = await this._services.getListItems(this.props.listName);
      this.setState({ listItems: items });
    }
    else {
      this.setState({ errorMessage: 'Please enter the list name in property pane configuration.' });
    }
  }


  public render(): React.ReactElement<IFaqProps> {
    return (
      <div className={styles.faq}>
        {
          //Map list items and render in accordion
          (this.state.listItems && this.state.listItems.length) ? this.state.listItems.map((item, index) => (
            <Accordion title={item.Title} defaultCollapsed={true} className={"itemCell"} key={index}>
              <div className={"itemContent"}>
                <div className={"itemResponse"} dangerouslySetInnerHTML={{ __html: item.Description }}></div>
              </div>
            </Accordion>
          )) : <p>{this.state.errorMessage}</p>
        }
      </div>
    );
  }
}
