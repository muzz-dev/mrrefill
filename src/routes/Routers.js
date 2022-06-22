const Base_Path  = '/';

const Routers = {
  BASE_URL :`${Base_Path}`,
  LOGIN :`${Base_Path}Login`,
  DASHBOARD : `${Base_Path}Dashboard`,

  //Area
  AREA : `${Base_Path}Area`,
  ADDAREA :`${Base_Path}AddArea`,
  EDITAREA :`${Base_Path}EditArea/:areaId`,

  //Request
  REQUEST : `${Base_Path}Request`,
  REQUESTDETAILS : `${Base_Path}RequestDetail/:exchangeId`,
 
  //Company
  COMPANY :  `${Base_Path}Company`,
  ADDCOMPANY :  `${Base_Path}AddCompany`,
  EDITCOMPANY :  `${Base_Path}EditCompany/:companyId`,

  //Model
  MODEL : `${Base_Path}Model`,
  ADDMODEL : `${Base_Path}AddModel`,
  EDITMODEL : `${Base_Path}EditModel/:modelId`,

  //cartridge
  CARTRIDGE : `${Base_Path}Cartridge`,
  ADDCARTRIDGE : `${Base_Path}AddCartridge`,
  EDITCARTRIDGE : `${Base_Path}EditCartridge/:cartridgeId`,

  //Employee
  EMPLOYEE : `${Base_Path}Employee`,
  EMPLOYEEDETAILS : `${Base_Path}EmployeeDetail/:userId`,

  //User
  USER : `${Base_Path}User`,
  ADDUSER : `${Base_Path}AddUser`,
  USERDETAILS :`${Base_Path}UserDetail/:userId`,

  //ChangePassword
  CHANGEPASSWORD : `${Base_Path}ChangePassword`,

  //Error
  ERROR : `${Base_Path}Error404`,

  //Product
  PRODUCT : `${Base_Path}Product`,
  ADDPRODUCT : `${Base_Path}AddProduct`,
  EDITPRODUCT : `${Base_Path}EditProduct/:productId`,

  //Purchase
  PURCHASE:`${Base_Path}Purchase`,
  ADDPURCHASE :`${Base_Path}AddPurchase`,
  PURCHASEDETAIL : `${Base_Path}PurchaseDetail/:purchaseId`,
  EDITPURCHASE : `${Base_Path}EditPurchase/:purchaseId`,

  //Purchase Return
  ADDPURCHASERETURN : `${Base_Path}AddPurchaseReturn`,
  PURCHASERETURN : `${Base_Path}PurchaseReturn`,
  PURCHASERETURNDETAIL : `${Base_Path}PurchaseReturnDetail/:purchaseReturnId`,

  //Sales
  SALES : `${Base_Path}Sales`,
  ADDSALES : `${Base_Path}AddSales`,
  EDITSALES :`${Base_Path}EditSales/:salesId`,
  SALESDETAIL : `${Base_Path}SalesDetail/:salesId`,

  //Sales Return
  ADDSALESRETURN : `${Base_Path}AddSalesReturn`,
  SALESRETURN : `${Base_Path}SalesReturn`,
  SALESRETURNDETAIL : `${Base_Path}SalesReturnDetail/:salesReturnId`,

  //Feedback
  VIEWFEEDBACK : `${Base_Path}Feedback`

}
export default Routers