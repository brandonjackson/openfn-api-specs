# Zata - Taxes and Payments API (zata) v1.0.0

<!-- derived from openapi.json by `pnpm specs index zata` — do not edit by hand -->

base: https://sandbox.zata.rw | auth: apiKey (header Authorization), apiKey (header Zata-Pay-Auth), apiKey (header Authorization) | 106 operations in 19 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## access
- GET /api/v1/access — access_93a0a055d37fc1fdd73ba2da7c318d61: Get access snapshot

## appData
- GET /api/v1/data/product-type — appData_603b30ad8b5b94a6b24e55d865ba7e6d: product types
- GET /api/v1/data/payment-mode — appData_a00f0b756620f75fb06ea66b36f188dd: payment modes
- GET /api/v1/data/product-category — appData_15845ccea8654f33a7b3d99025bc5432: product categories
- GET /api/v1/data/product-class — appData_4d5843502eae14fdde0cff7565e6e92b: product classes
- GET /api/v1/data/product-quantity-unit — appData_09708a2c1f1c55a4469aecd83d3c2234: product quantity units
- GET /api/v1/data/product-packaging-unit — appData_93555b9a721e07cdad18ad6b90a9f790: product packaging units
- GET /api/v1/data/product-tax — appData_c2fe9d0638baaebd2e6183c03ca19176: product taxes
- GET /api/v1/data/product-country-origin — appData_b705e7167fc0ca78efb7742a5d6915c3: product countries
- GET /api/v1/data/tourism-tax — appData_a10add461da11a7c880cae78da310377: tourism taxes
- GET /api/v1/data/tourism-tax-type — appData_d80c54c055aa432e3a1f752a6c069634: tourism tax types
- GET /api/v1/data/rrp-limit — appData_a94cdc87e6a48fb81fd61e34c7cadec5: rrp max limits
- GET /api/v1/data/fuel-item — appData_899cc5708095a73352c3e47f2c362eab: fuel items

## company
- GET /api/v1/company — company_6fbff07717cee4723237ce23e3d153ff: all company
- POST /api/v1/company — company_e604827483e04dec2616a9f4aa46b1f0: company store
- PUT /api/v1/company — company_caf310e116f0c473b7b6597741551c49: company update
- GET /api/v1/company/{companyId} — company_31f1d9d4c243d2f8435986bbcffcba79: get authenticated company
- GET /api/v1/company/finance — company_eb3559fe98a4a7f20edd46f7256ff2d0: Company finance
- GET /api/v1/company/tax-info — company_727a62e61a206834bba05a6d0b95a4c4: Company tax information

## company.branch
- GET /api/v1/company/branch — companyBranch_626517e87d7e0276d3366e0e761cfffa: company branches
- POST /api/v1/company/branch — companyBranch_b317fc75b3c5c8ef25dc62a6432907ed: company branch store
- PUT /api/v1/company/branch — companyBranch_c2a6de794c6c9f150fb01bf58a66844f: company branch update

## companyParty
- GET /api/v1/party — companyParty_31f7a65bbefe4c2b3c2297d2c83c239a: Get all company parties
- POST /api/v1/party/new-customer — companyParty_637c6569fcabd6089ea0d992305cf9df: Create a new customer
- POST /api/v1/party/new-supplier — companyParty_14d13606313262b0cd951fa26591277c: Create a new supplier

## credits
- GET /api/v1/credits/wallet — credits_8ec5ebf0ff1384b39e93e7c526092306: Get credit wallet
- GET /api/v1/credits/history — credits_4396b67e63823215731f764a0f6ff507: List credit transactions
- POST /api/v1/credits/lookup — credits_de1d8be2786c43061b93de1f3f85a7bd: Lookup credit account
- POST /api/v1/credits/topup — credits_44a36a53cb6b781dfc7381d8ba23c0f1: Top up credits
- GET /api/v1/credits/topup/{transactionId}/status — credits_820466d8bb033dfad2e6515709d8d842: Get top-up status
- POST /api/v1/credits/pay-subscription — credits_46ae61269f3fc70d9d7787184655e839: Pay subscription with credits

## dashboard
- GET /api/v1/dashboard/summary — dashboard_f26422d1a19e2fa9303f252c97b51f91: Get dashboard sales summary

## expense
- GET /api/v1/expense — expense_bf2b43a6b63b173394c90233a6eb080f: Get all expenses
- POST /api/v1/expense — expense_2cea62320dea8c91dd6f91ace3a7af4a: Create a new expense
- GET /api/v1/expense/{expenseId} — expense_f9c26a5c832fd4b5e756630d15e95d59: Get expense by id
- GET /api/v1/expense/categories — expense_ea5f8c12cdd3df657624841f9e4cf3ae: Get expense categories
- POST /api/v1/expense/{expenseId}/refund — expense_0d0e931878b61735e1a1a36292bc9f1b: Refund an expense

## insurance
- GET /api/v1/insurance — insurance_ed9530176780785ad7df8006df1dd836: List insurances
- POST /api/v1/insurance/preset — insurance_28992f02b57daa83c802ffe2bb20c6ac: Link preset insurance
- POST /api/v1/insurance/custom — insurance_bb3665e404c5f558dc65921e457adeb8: Create custom insurance
- PUT /api/v1/insurance/custom/{insuranceId} — insurance_e7319548adb1cb5d8720fe5661e98a6a: Update custom insurance
- PUT /api/v1/insurance/branch/{companyInsuranceId} — insurance_061305c6fb2d478e82f2845db8a3dd14: Update branch insurance
- GET /api/v1/insurance/invoice/{transactionId}/download-signature — insurance_03152b6f382de4adebbd35fc16860dad: Get signed URL for insurance invoice download

## patient
- GET /api/v1/patient — patient_25166fa0e2dbe0f7dadc306b2f7d7d8c: List patients
- POST /api/v1/patient — patient_d0a244287611d5c6346280308f353214: Create patient
- GET /api/v1/patient/{patientId} — patient_e19fb9f8940ab8e2d4fe5c7e8956f7ef: Show patient
- PUT /api/v1/patient/{patientId} — patient_192dacc7be193035ae064eadab02117a: Update patient
- GET /api/v1/patient/party/{partyId} — patient_a444341d5350808bda14e1c8edd8e3be: Show patient by party

## product
- POST /api/v1/product — product_52fb1b0144b1e3a9805998cd57778f7b: create product
- GET /api/v1/product/pos — product_e7138194f5e5f3afcfbff81c74c65f60: Get POS products
- GET /api/v1/product/branch — product_a4c2d99626707c98d4a905fc7b3abb5a: get product
- GET /api/v1/product/{productId} — product_2a181a1aab8706b62e9757da325f5951: get product by id
- PUT /api/v1/product/{productId} — product_d7f846f52d12edf0267c764ee63079d4: update product
- PUT /api/v1/product/increase-quantity/{productId} — product_ff2055a34174512524d7ddbe859ff51b: increase product quantity
- PUT /api/v1/product/reduce-quantity/{productId} — product_8dbecfd70e3f34b4137c0c719cce8c26: reduce product

## storageS3
- GET /api/v1/s3/ — storageS3_38708f0a0e7bce680b8292b3e6cc915c: List buckets
- GET /api/v1/s3/{bucket}/{key} — storageS3_03f8021aae1353b74b05ebcb94b8c95c: Get object / list bucket
- POST /api/v1/s3/{bucket}/{key} — storageS3_4d442750d6b8f800ea936c9a3073b042: Multipart operations
- PUT /api/v1/s3/{bucket}/{key} — storageS3_c5cccf8b582d69e3290d15599f31c45b: Put object / upload part
- DELETE /api/v1/s3/{bucket}/{key} — storageS3_d9d62e304b9d22f8a509229ef39e05ae: Delete object / abort upload
- HEAD /api/v1/s3/{bucket}/{key} — storageS3_c49df85831e9363e566fbae42fb81fcc: Head object / bucket

## subscription
- GET /api/v1/subscription/payment-history — subscription_6c9d2e26c91a93b6c12276f7acdd4b91: List subscription payments
- GET /api/v1/subscription/payment/{paymentId}/status — subscription_78b681e9279767603186e68096a1229e: Get subscription payment status
- POST /api/v1/subscription/preview — subscription_f7b28b9691b91d2eea713923c735d4cd: Preview subscription payment
- POST /api/v1/subscription/pay — subscription_c9dccd6221ae230401a041c5d9673074: Pay subscription

## tax-reporting
- GET /api/v1/company/tax-report — taxReporting_a3314ab519d9353f3b9c63f8a39de5dc: Company tax report by period

## test
- GET /api/v1/test — test_cd52341d8f9c422cd7cdd22a2d32b561: Test API

## transaction
- GET /api/v1/transaction — transaction_e07ab63d043e17a0ee954ced66bc00e7: Get all transactions
- POST /api/v1/transaction/sale — transaction_ed2c9101d36b97aee0161d4d2dd3a458: Sale transaction creation
- POST /api/v1/transaction/refund/{transactionId} — transaction_c8062bb78d92fd5b20dba519fa7393dd: Refund transaction creation
- POST /api/v1/transaction/proforma — transaction_3e6905aa445753754602b8e69f722dcf: Proforma transaction creation
- POST /api/v1/transaction/purchase — transaction_7072d56dc0cf2aaf6261d7bc40d7b47e: Internal purchase transaction creation
- POST /api/v1/transaction/calculate — transaction_4c796f41bcaaa30fccae1a540bcf316c: calculate transaction creation
- GET /api/v1/transaction/{transactionId} — transaction_1b4b7c9bf512ec7af4925c49f9aee958: get transaction by id
- GET /api/v1/transaction/download-signature/{transactionId} — transaction_898515cb4aa2e1580ea8094a8cb7fd6b: transaction download signature
- GET /api/v1/transaction/download — transaction_ceb115e8b1ecd913f5c15f82914a967a: download signed transaction

## user
- GET /api/v1/auth/config — user_fdc33f4a5e180af87bb5e959ef91da04: Public auth config for native clients
- POST /api/v1/create-account — user_9e4d6038445dcd7b8dba1a7989615d73: Create a new user account
- POST /api/v1/login — user_9cb2efee96b203086a6d6e3a2dcff2b0: Login request
- POST /api/v1/login/google/desktop — user_0de5cbfcb2bd3c95a0a44bcd9e58b1b7: Desktop Google code login
- POST /api/v1/login/apple — user_c4f2d3bc61b35fdf96c1df818c6f88f3: Apple identity-token login (mobile)
- POST /api/v1/login/apple/desktop — user_0aa328baa947b9947f4cdb7260c82bed: Desktop Apple code login
- POST /api/v1/logout — user_b1ce2afcdc7bf63047937cb7ea1141e3: Logout current session

## zataPay
- GET /api/v1/zatapay/banks — zataPay_2aaca9764931ec273f9d789733169ac3: List ZataPay banks
- POST /api/v1/zatapay/debit-initiate — zataPay_4fb3d2c483d6dea3617e87748e133e2c: Initiate ZataPay POS debit
- GET /api/v1/zatapay/payment-status — zataPay_dfe58fedc60df58040f1c4047130e853: Get ZataPay payment status
- GET /api/v1/zatapay/payment-history — zataPay_550f15341d421ef7201d7c3b18407b9c: List ZataPay payment history
- GET /api/v1/zatapay/dashboard — zataPay_e0a8d6a874f682f417384f60841b56d8: Get ZataPay dashboard
- GET /api/v1/zatapay/wallet — zataPay_d6ddf6369f13fb70d553d5d8732dd666: Get ZataPay wallet
- GET /api/v1/zatapay/wallet/balance — zataPay_2b72a938b0c326313f6411d5b81b6718: Get ZataPay wallet balance
- GET /api/v1/zatapay/ledger/balance — zataPay_9522fc1fff056205a4365132763a956e: Get ZataPay ledger balance
- POST /api/v1/zatapay/settings/auto-settle — zataPay_3656af5f3cd8be6332e15e44bdc1c9a9: Toggle ZataPay auto-settle
- GET /api/v1/zatapay/bank-accounts — zataPay_6d8fa02398b25d96db495ef8ca0f4105: List merchant bank accounts
- POST /api/v1/zatapay/bank-accounts — zataPay_82c34e2940a9f1761b4066a7e4466058: Create merchant bank account
- PATCH /api/v1/zatapay/bank-accounts/{bankAccountId}/set-default — zataPay_a515d03c24d70f37cae18995a137551c: Set default settlement account
- DELETE /api/v1/zatapay/bank-accounts/{bankAccountId} — zataPay_be70764000151d6045cc2a70c0265753: Delete merchant bank account
- POST /api/v1/zatapay/bank-accounts/{bankAccountId}/revoke-approval — zataPay_87a739cd40591ccaf9c9fc56ab40212f: Revoke merchant bank account approval
- GET /api/v1/zatapay/onboarding — zataPay_fc958c28ede4641829728824f100ca3f: Get ZataPay onboarding status
- POST /api/v1/zatapay/onboarding/activate — zataPay_6c198461fb063781c0e111428e2274f5: Request ZataPay activation

## zataPayExternal
- GET /api/v1/zatapay/external/account-lookup — zataPayExternal_93be3a074869eae5f02c2362f4dfb4b9: External: look up account name
- POST /api/v1/zatapay/external/credit — zataPayExternal_376e6ed1794ee45e478dea93e1ca3bb5: External: send money (credit payment)
- POST /api/v1/zatapay/external/debit — zataPayExternal_d80320b09f9c58a9cae48f591190ffdf: External: initiate debit (collect payment)
- GET /api/v1/zatapay/external/payments/by-reference — zataPayExternal_d84829960daa2561232b15ded660f85c: External: find payment by external reference
- GET /api/v1/zatapay/external/payments/{paymentId} — zataPayExternal_9a384a70ee9663c0816bd397006b9869: External: retrieve payment by ID
- GET /api/v1/zatapay/external/merchant-bank-accounts — zataPayExternal_8cb97c4d9ed980cea75b86099d8bd52a: External: list merchant bank accounts
- POST /api/v1/zatapay/external/merchant-bank-accounts — zataPayExternal_8c552d4a529ab22de8f927afdcb470b0: External: create merchant bank account
