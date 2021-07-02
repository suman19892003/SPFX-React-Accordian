import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from '@pnp/sp/presets/all';

export class SPService {
    constructor(private context: WebPartContext) {
        sp.setup({
            spfxContext: this.context
        });
    }

    public async getListItems(listName: string) {
        try {
            //let listItems: any[] = await sp.web.lists.getByTitle(listName).items.select("Id,Title,Description").get();
            let listItems: any[]=[
		{"Id":1,"Title":"Is HDFC good for home loan?","Description":"HDFC Limited is one of the pioneers in the Home Loan industry. The interest rates are as low as 9.40%. The Loan process is very transparent and thorough. Terrific repayment tenure that extends up to 30 years, makes paying back your Home Loan a snap."},
		{"Id":2,"Title":"Can I repay HDFC home loan online?","Description":"HDFC Home Loan premium payment has become so easy that you can process it within a few minutes on Paytm. So save both time and efforts and make HDFC Home premium payment instantly on Paytm."},
		{"Id":3,"Title":"Is it good to clear home loan early?","Description":"Home loan prepayment from time to time is a quick way to reduce your loan liability, as it eventually decreases your loan tenure. This also helps customers save substantially on the total interest pay-out."},
		{"Id":4,"Title":"Can I pay all EMI at once HDFC?","Description":"Whether you have taken a personal loan, home loan, car loan, or any other loan product from HDFC, the bank allows you to repay the remaining EMIs at one go. ... Repaying all EMIs at once is known as pre-closing the loan account."}]
            return listItems;
        } catch (err) {
            Promise.reject(err);
        }
    }
}
