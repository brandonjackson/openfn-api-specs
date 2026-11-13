# QuickBooks Online Accounting API (intuit) v3

<!-- derived from openapi.json by `pnpm specs index intuit` — do not edit by hand -->

base: https://quickbooks.api.intuit.com, https://sandbox-quickbooks.api.intuit.com | auth: oauth2 (authorizationCode) | 176 operations in 47 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Account
- POST /v3/company/{realmId}/account — createAccount: Create an Account
- POST /v3/company/{realmId}/account#update — updateAccount: Update an Account (full or sparse)
- GET /v3/company/{realmId}/account/{id} — getAccount: Read an Account

## Attachable
- POST /v3/company/{realmId}/attachable — createAttachable: Create an Attachable
- POST /v3/company/{realmId}/attachable#update — updateAttachable: Update an Attachable (full or sparse)
- GET /v3/company/{realmId}/attachable/{id} — getAttachable: Read an Attachable
- POST /v3/company/{realmId}/attachable#operation=delete — deleteAttachable: Delete an Attachable
- POST /v3/company/{realmId}/upload — uploadAttachments: Upload files as attachments

## Batch
- POST /v3/company/{realmId}/batch — batch: Run up to 30 operations in one request

## Bill
- POST /v3/company/{realmId}/bill — createBill: Create a Bill
- POST /v3/company/{realmId}/bill#update — updateBill: Update a Bill (full or sparse)
- GET /v3/company/{realmId}/bill/{id} — getBill: Read a Bill
- POST /v3/company/{realmId}/bill#operation=delete — deleteBill: Delete a Bill

## BillPayment
- POST /v3/company/{realmId}/billpayment — createBillPayment: Create a BillPayment
- POST /v3/company/{realmId}/billpayment#update — updateBillPayment: Update a BillPayment (full or sparse)
- GET /v3/company/{realmId}/billpayment/{id} — getBillPayment: Read a BillPayment
- POST /v3/company/{realmId}/billpayment#operation=delete — deleteBillPayment: Delete a BillPayment

## ChangeDataCapture
- GET /v3/company/{realmId}/cdc — changeDataCapture: List entities changed since a time (CDC)

## ChangeOrder
- POST /v3/company/{realmId}/changeorder — createChangeOrder: Create a ChangeOrder
- POST /v3/company/{realmId}/changeorder#update — updateChangeOrder: Update a ChangeOrder (full or sparse)
- POST /v3/company/{realmId}/changeorder/{id} — getChangeOrder: Read a ChangeOrder
- POST /v3/company/{realmId}/changeorder#operation=delete — deleteChangeOrder: Delete a ChangeOrder

## Class
- POST /v3/company/{realmId}/class — createClass: Create a Class
- POST /v3/company/{realmId}/class#update — updateClass: Update a Class (full or sparse)
- GET /v3/company/{realmId}/class/{id} — getClass: Read a Class
- POST /v3/company/{realmId}/class#operation=delete — deleteClass: Delete a Class

## CompanyCurrency
- POST /v3/company/{realmId}/companycurrency — createCompanyCurrency: Create a CompanyCurrency
- POST /v3/company/{realmId}/companycurrency#update — updateCompanyCurrency: Update a CompanyCurrency (full or sparse)
- GET /v3/company/{realmId}/companycurrency/{id} — getCompanyCurrency: Read a CompanyCurrency

## CompanyInfo
- GET /v3/company/{realmId}/companyinfo/{id} — getCompanyInfo: Read company info
- POST /v3/company/{realmId}/companyinfo — updateCompanyInfo: Update company info (full or sparse)

## CreditCardPayment
- POST /v3/company/{realmId}/creditcardpayment — createCreditCardPayment: Create a CreditCardPayment
- POST /v3/company/{realmId}/creditcardpayment#update — updateCreditCardPayment: Update a CreditCardPayment (full or sparse)
- GET /v3/company/{realmId}/creditcardpayment/{id} — getCreditCardPayment: Read a CreditCardPayment
- POST /v3/company/{realmId}/creditcardpayment#operation=delete — deleteCreditCardPayment: Delete a CreditCardPayment

## CreditMemo
- POST /v3/company/{realmId}/creditmemo — createCreditMemo: Create a CreditMemo
- POST /v3/company/{realmId}/creditmemo#update — updateCreditMemo: Update a CreditMemo (full or sparse)
- GET /v3/company/{realmId}/creditmemo/{id} — getCreditMemo: Read a CreditMemo
- POST /v3/company/{realmId}/creditmemo#operation=delete — deleteCreditMemo: Delete a CreditMemo
- GET /v3/company/{realmId}/creditmemo/{id}/pdf — getCreditMemoPdf: Get a CreditMemo as PDF
- POST /v3/company/{realmId}/creditmemo/{id}/send — sendCreditMemo: Email a CreditMemo

## Customer
- POST /v3/company/{realmId}/customer — createCustomer: Create a Customer
- POST /v3/company/{realmId}/customer#update — updateCustomer: Update a Customer (full or sparse)
- GET /v3/company/{realmId}/customer/{id} — getCustomer: Read a Customer

## CustomerType
- GET /v3/company/{realmId}/customertype/{id} — getCustomerType: Read a CustomerType

## Department
- POST /v3/company/{realmId}/department — createDepartment: Create a Department
- POST /v3/company/{realmId}/department#update — updateDepartment: Update a Department (full or sparse)
- GET /v3/company/{realmId}/department/{id} — getDepartment: Read a Department

## Deposit
- POST /v3/company/{realmId}/deposit — createDeposit: Create a Deposit
- POST /v3/company/{realmId}/deposit#update — updateDeposit: Update a Deposit (full or sparse)
- GET /v3/company/{realmId}/deposit/{id} — getDeposit: Read a Deposit
- POST /v3/company/{realmId}/deposit#operation=delete — deleteDeposit: Delete a Deposit

## Employee
- POST /v3/company/{realmId}/employee — createEmployee: Create an Employee
- POST /v3/company/{realmId}/employee#update — updateEmployee: Update an Employee (full or sparse)
- GET /v3/company/{realmId}/employee/{id} — getEmployee: Read an Employee

## Entitlements
- GET /manage/entitlements/v3/{realmId} — getEntitlements: Get the company's subscription entitlements

## Estimate
- POST /v3/company/{realmId}/estimate — createEstimate: Create an Estimate
- POST /v3/company/{realmId}/estimate#update — updateEstimate: Update an Estimate (full or sparse)
- GET /v3/company/{realmId}/estimate/{id} — getEstimate: Read an Estimate
- POST /v3/company/{realmId}/estimate#operation=delete — deleteEstimate: Delete an Estimate
- GET /v3/company/{realmId}/estimate/{id}/pdf — getEstimatePdf: Get an Estimate as PDF
- POST /v3/company/{realmId}/estimate/{id}/send — sendEstimate: Email an Estimate

## ExchangeRate
- GET /v3/company/{realmId}/exchangerate — getExchangeRate: Get the exchange rate for a currency and date
- POST /v3/company/{realmId}/exchangerate — updateExchangeRate: Update an exchange rate

## InventoryAdjustment
- POST /v3/company/{realmId}/inventoryadjustment — createInventoryAdjustment: Create an InventoryAdjustment
- GET /v3/company/{realmId}/inventoryadjustment/{id} — getInventoryAdjustment: Read an InventoryAdjustment
- POST /v3/company/{realmId}/inventoryadjustment#operation=delete — deleteInventoryAdjustment: Delete an InventoryAdjustment

## Invoice
- POST /v3/company/{realmId}/invoice — createInvoice: Create an Invoice
- POST /v3/company/{realmId}/invoice#update — updateInvoice: Update an Invoice (full or sparse)
- GET /v3/company/{realmId}/invoice/{id} — getInvoice: Read an Invoice
- POST /v3/company/{realmId}/invoice#operation=delete — deleteInvoice: Delete an Invoice
- POST /v3/company/{realmId}/invoice#operation=void — voidInvoice: Void an Invoice
- GET /v3/company/{realmId}/invoice/{id}/pdf — getInvoicePdf: Get an Invoice as PDF
- POST /v3/company/{realmId}/invoice/{id}/send — sendInvoice: Email an Invoice

## Item
- POST /v3/company/{realmId}/item — createItem: Create an Item
- POST /v3/company/{realmId}/item#update — updateItem: Update an Item (full or sparse)
- GET /v3/company/{realmId}/item/{id} — getItem: Read an Item

## JournalCode
- POST /v3/company/{realmId}/journalcode — createJournalCode: Create a JournalCode
- POST /v3/company/{realmId}/journalcode#update — updateJournalCode: Update a JournalCode (full or sparse)
- GET /v3/company/{realmId}/journalcode/{id} — getJournalCode: Read a JournalCode

## JournalEntry
- POST /v3/company/{realmId}/journalentry — createJournalEntry: Create a JournalEntry
- POST /v3/company/{realmId}/journalentry#update — updateJournalEntry: Update a JournalEntry (full or sparse)
- GET /v3/company/{realmId}/journalentry/{id} — getJournalEntry: Read a JournalEntry
- POST /v3/company/{realmId}/journalentry#operation=delete — deleteJournalEntry: Delete a JournalEntry

## Payment
- POST /v3/company/{realmId}/payment — createPayment: Create a Payment
- POST /v3/company/{realmId}/payment#update — updatePayment: Update a Payment (full or sparse)
- GET /v3/company/{realmId}/payment/{id} — getPayment: Read a Payment
- POST /v3/company/{realmId}/payment#operation=delete — deletePayment: Delete a Payment
- POST /v3/company/{realmId}/payment#operation=void — voidPayment: Void a Payment
- GET /v3/company/{realmId}/payment/{id}/pdf — getPaymentPdf: Get a Payment as PDF
- POST /v3/company/{realmId}/payment/{id}/send — sendPayment: Email a Payment

## PaymentMethod
- POST /v3/company/{realmId}/paymentmethod — createPaymentMethod: Create a PaymentMethod
- POST /v3/company/{realmId}/paymentmethod#update — updatePaymentMethod: Update a PaymentMethod (full or sparse)
- GET /v3/company/{realmId}/paymentmethod/{id} — getPaymentMethod: Read a PaymentMethod

## Preferences
- GET /v3/company/{realmId}/preferences — getPreferences: Read preferences
- POST /v3/company/{realmId}/preferences — updatePreferences: Update preferences (full or sparse)

## Purchase
- POST /v3/company/{realmId}/purchase — createPurchase: Create a Purchase
- POST /v3/company/{realmId}/purchase#update — updatePurchase: Update a Purchase (full or sparse)
- GET /v3/company/{realmId}/purchase/{id} — getPurchase: Read a Purchase
- POST /v3/company/{realmId}/purchase#operation=delete — deletePurchase: Delete a Purchase

## PurchaseOrder
- POST /v3/company/{realmId}/purchaseorder — createPurchaseOrder: Create a PurchaseOrder
- POST /v3/company/{realmId}/purchaseorder#update — updatePurchaseOrder: Update a PurchaseOrder (full or sparse)
- GET /v3/company/{realmId}/purchaseorder/{id} — getPurchaseOrder: Read a PurchaseOrder
- POST /v3/company/{realmId}/purchaseorder#operation=delete — deletePurchaseOrder: Delete a PurchaseOrder
- POST /v3/company/{realmId}/purchaseorder/{id}/send — sendPurchaseOrder: Email a PurchaseOrder

## Query
- GET /v3/company/{realmId}/query — query: Query entities (SELECT)
- POST /v3/company/{realmId}/query#post — queryPost: Query entities (SELECT in the request body)

## RecurringTransaction
- POST /v3/company/{realmId}/recurringtransaction — createRecurringTransaction: Create a RecurringTransaction
- GET /v3/company/{realmId}/recurringtransaction/{id} — getRecurringTransaction: Read a RecurringTransaction
- POST /v3/company/{realmId}/recurringtransaction#operation=delete — deleteRecurringTransaction: Delete a RecurringTransaction

## RefundReceipt
- POST /v3/company/{realmId}/refundreceipt — createRefundReceipt: Create a RefundReceipt
- POST /v3/company/{realmId}/refundreceipt#update — updateRefundReceipt: Update a RefundReceipt (full or sparse)
- GET /v3/company/{realmId}/refundreceipt/{id} — getRefundReceipt: Read a RefundReceipt
- POST /v3/company/{realmId}/refundreceipt#operation=delete — deleteRefundReceipt: Delete a RefundReceipt

## ReimburseCharge
- GET /v3/company/{realmId}/reimbursecharge/{id} — getReimburseCharge: Read a ReimburseCharge

## Reports
- GET /v3/company/{realmId}/reports/AccountList — getReportAccountList: Run the AccountList report
- GET /v3/company/{realmId}/reports/AgedPayableDetail — getReportAgedPayableDetail: Run the AgedPayableDetail report
- GET /v3/company/{realmId}/reports/AgedPayables — getReportAgedPayables: Run the AgedPayables report
- GET /v3/company/{realmId}/reports/AgedReceivableDetail — getReportAgedReceivableDetail: Run the AgedReceivableDetail report
- GET /v3/company/{realmId}/reports/AgedReceivables — getReportAgedReceivables: Run the AgedReceivables report
- GET /v3/company/{realmId}/reports/BalanceSheet — getReportBalanceSheet: Run the BalanceSheet report
- GET /v3/company/{realmId}/reports/CashFlow — getReportCashFlow: Run the CashFlow report
- GET /v3/company/{realmId}/reports/ClassSales — getReportClassSales: Run the ClassSales report
- GET /v3/company/{realmId}/reports/CustomerBalance — getReportCustomerBalance: Run the CustomerBalance report
- GET /v3/company/{realmId}/reports/CustomerBalanceDetail — getReportCustomerBalanceDetail: Run the CustomerBalanceDetail report
- GET /v3/company/{realmId}/reports/CustomerIncome — getReportCustomerIncome: Run the CustomerIncome report
- GET /v3/company/{realmId}/reports/CustomerSales — getReportCustomerSales: Run the CustomerSales report
- GET /v3/company/{realmId}/reports/DepartmentSales — getReportDepartmentSales: Run the DepartmentSales report
- GET /v3/company/{realmId}/reports/GeneralLedger — getReportGeneralLedger: Run the GeneralLedger report
- GET /v3/company/{realmId}/reports/InventoryValuationSummary — getReportInventoryValuationSummary: Run the InventoryValuationSummary report
- GET /v3/company/{realmId}/reports/ItemSales — getReportItemSales: Run the ItemSales report
- GET /v3/company/{realmId}/reports/JournalReport — getReportJournalReport: Run the JournalReport report
- GET /v3/company/{realmId}/reports/ProfitAndLoss — getReportProfitAndLoss: Run the ProfitAndLoss report
- GET /v3/company/{realmId}/reports/ProfitAndLossDetail — getReportProfitAndLossDetail: Run the ProfitAndLossDetail report
- GET /v3/company/{realmId}/reports/TaxSummary — getReportTaxSummary: Run the TaxSummary report
- GET /v3/company/{realmId}/reports/TransactionList — getReportTransactionList: Run the TransactionList report
- GET /v3/company/{realmId}/reports/TransactionListByCustomer — getReportTransactionListByCustomer: Run the TransactionListByCustomer report
- GET /v3/company/{realmId}/reports/TransactionListByVendor — getReportTransactionListByVendor: Run the TransactionListByVendor report
- GET /v3/company/{realmId}/reports/TransactionListWithSplits — getReportTransactionListWithSplits: Run the TransactionListWithSplits report
- GET /v3/company/{realmId}/reports/TrialBalance — getReportTrialBalance: Run the TrialBalance report
- GET /v3/company/{realmId}/reports/TrialBalanceFR — getReportTrialBalanceFR: Run the TrialBalanceFR report
- GET /v3/company/{realmId}/reports/VendorBalance — getReportVendorBalance: Run the VendorBalance report
- GET /v3/company/{realmId}/reports/VendorBalanceDetail — getReportVendorBalanceDetail: Run the VendorBalanceDetail report
- GET /v3/company/{realmId}/reports/VendorExpenses — getReportVendorExpenses: Run the VendorExpenses report

## SalesReceipt
- POST /v3/company/{realmId}/salesreceipt — createSalesReceipt: Create a SalesReceipt
- POST /v3/company/{realmId}/salesreceipt#update — updateSalesReceipt: Update a SalesReceipt (full or sparse)
- GET /v3/company/{realmId}/salesreceipt/{id} — getSalesReceipt: Read a SalesReceipt
- POST /v3/company/{realmId}/salesreceipt#operation=delete — deleteSalesReceipt: Delete a SalesReceipt
- POST /v3/company/{realmId}/salesreceipt#operation=void — voidSalesReceipt: Void a SalesReceipt
- GET /v3/company/{realmId}/salesreceipt/{id}/pdf — getSalesReceiptPdf: Get a SalesReceipt as PDF
- POST /v3/company/{realmId}/salesreceipt/{id}/send — sendSalesReceipt: Email a SalesReceipt

## TaxAgency
- POST /v3/company/{realmId}/taxagency — createTaxAgency: Create a TaxAgency
- GET /v3/company/{realmId}/taxagency/{id} — getTaxAgency: Read a TaxAgency

## TaxClassification
- GET /v3/company/{realmId}/taxclassification/{id} — getTaxClassification: Read a TaxClassification

## TaxCode
- GET /v3/company/{realmId}/taxcode/{id} — getTaxCode: Read a TaxCode

## TaxPayment
- GET /v3/company/{realmId}/taxpayment/{id} — getTaxPayment: Read a TaxPayment

## TaxRate
- GET /v3/company/{realmId}/taxrate/{id} — getTaxRate: Read a TaxRate

## TaxService
- POST /v3/company/{realmId}/taxservice/taxcode — createTaxCode: Create a tax code (TaxService)

## Term
- POST /v3/company/{realmId}/term — createTerm: Create a Term
- POST /v3/company/{realmId}/term#update — updateTerm: Update a Term (full or sparse)
- GET /v3/company/{realmId}/term/{id} — getTerm: Read a Term

## TimeActivity
- POST /v3/company/{realmId}/timeactivity — createTimeActivity: Create a TimeActivity
- POST /v3/company/{realmId}/timeactivity#update — updateTimeActivity: Update a TimeActivity (full or sparse)
- GET /v3/company/{realmId}/timeactivity/{id} — getTimeActivity: Read a TimeActivity
- POST /v3/company/{realmId}/timeactivity#operation=delete — deleteTimeActivity: Delete a TimeActivity

## Transfer
- POST /v3/company/{realmId}/transfer — createTransfer: Create a Transfer
- POST /v3/company/{realmId}/transfer#update — updateTransfer: Update a Transfer (full or sparse)
- GET /v3/company/{realmId}/transfer/{id} — getTransfer: Read a Transfer
- POST /v3/company/{realmId}/transfer#operation=delete — deleteTransfer: Delete a Transfer

## Vendor
- POST /v3/company/{realmId}/vendor — createVendor: Create a Vendor
- POST /v3/company/{realmId}/vendor#update — updateVendor: Update a Vendor (full or sparse)
- GET /v3/company/{realmId}/vendor/{id} — getVendor: Read a Vendor

## VendorCredit
- POST /v3/company/{realmId}/vendorcredit — createVendorCredit: Create a VendorCredit
- POST /v3/company/{realmId}/vendorcredit#update — updateVendorCredit: Update a VendorCredit (full or sparse)
- GET /v3/company/{realmId}/vendorcredit/{id} — getVendorCredit: Read a VendorCredit
- POST /v3/company/{realmId}/vendorcredit#operation=delete — deleteVendorCredit: Delete a VendorCredit
