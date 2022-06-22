import './App.css';
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Routers from './routes/Routers';
import Area from './components/area/Area';
import AddArea from './components/area/AddArea';
import EditArea from './components/area/EditArea';
import Company from './components/company/Company';
import AddCompany from './components/company/AddCompany';
import EditCompany from './components/company/EditCompany';
import Model from './components/model/Model';
import AddModel from './components/model/AddModel';
import EditModel from './components/model/EditModel';
import Cartridge from './components/cartridge/Cartridge';
import AddCartridge from './components/cartridge/AddCartridge';
import EditCartridge from './components/cartridge/EditCartridge';
import Employee from './components/employee/Employee'
import EmployeeDetail from './components/employee/EmployeeDetail';
import User from './components/user/User'
import AddUser from './components/user/AddUser'
import UserDetail from './components/user/UserDetail'
import Login from './components/login/Login';
import Request from './components/request/Request';
import RequestDetail from './components/request/RequestDetail';
import ChangePassword from './components/changePassword/ChangePassword';
import Error404 from './components/error/Error404';
import Product from './components/product/Product';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import Purchase from './components/purchase/Purchase';
import AddPurchase from './components/purchase/AddPurchase';
import PurchaseDetail from './components/purchase/PurchaseDetail';
import EditPurchase from './components/purchase/EditPurchase';
import PurchaseReturn from './components/purchaseReturn/PurchaseReturn';
import AddPurchaseReturn from './components/purchaseReturn/AddPurchaseReturn';
import PurchaseReturnDetail from './components/purchaseReturn/PurchaseReturnDetail';
import Sales from './components/sales/Sales';
import AddSales from './components/sales/AddSales';
import SalesDetail from './components/sales/SalesDetail';
import EditSales from './components/sales/EditSales';
import SalesReturn from './components/salesReturn/SalesReturn';
import AddSalesReturn from './components/salesReturn/AddSalesReturn';
import SalesReturnDetail from './components/salesReturn/SalesReturnDetail';
import Feedback from './components/feedback/Feedback';


function App() {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
        <Routes>
            <Route path={Routers.BASE_URL} element = {<Login/>}></Route>
            <Route path={Routers.LOGIN} element = {<Login/>}></Route>
            <Route path={Routers.DASHBOARD} element = {<Dashboard/>}></Route>

            {/* Request */}
            <Route path={Routers.REQUEST} element = {<Request/>}/>
            <Route path={Routers.REQUESTDETAILS} element = {<RequestDetail/>}/>

            {/* Area */}
            <Route path={Routers.AREA} element = {<Area />}/>
            <Route path={Routers.ADDAREA} element = {<AddArea/>}/>
            <Route path={Routers.EDITAREA} element = {<EditArea/>}/>

            {/* Company */}
            <Route path={Routers.COMPANY} element = {<Company/>}/>
            <Route path={Routers.ADDCOMPANY} element = {<AddCompany/>}/>
            <Route path={Routers.EDITCOMPANY} element = {<EditCompany/>}/>

            {/* Model */}
            <Route path={Routers.MODEL} element = {<Model/>}/>
            <Route path={Routers.ADDMODEL} element = {<AddModel/>}/>
            <Route path={Routers.EDITMODEL} element = {<EditModel/>}/>

            {/* Cartridge */}
            <Route path={Routers.CARTRIDGE} element = {<Cartridge/>}/>
            <Route path={Routers.ADDCARTRIDGE} element = {<AddCartridge/>}/>
            <Route path={Routers.EDITCARTRIDGE} element = {<EditCartridge/>}/>

            {/* Employee */}
            <Route path={Routers.EMPLOYEE} element = {<Employee/>}/>
            <Route path={Routers.EMPLOYEEDETAILS} element = {<EmployeeDetail/>}/>
            

            {/* User */}
            <Route path={Routers.USER} element = {<User/>}/>
            <Route path={Routers.ADDUSER} element = {<AddUser/>}/>
            <Route path={Routers.USERDETAILS} element = {<UserDetail/>}/>

            {/* ChangePassword */}
            <Route path={Routers.CHANGEPASSWORD} element = {<ChangePassword/>}/>

            {/* Error  */}
            <Route path={Routers.ERROR} element = {<Error404/>}/>

            {/* PRODUCT */}
            <Route path={Routers.PRODUCT} element={<Product/>}/>
            <Route path={Routers.ADDPRODUCT} element={<AddProduct/>}/>
            <Route path={Routers.EDITPRODUCT} element={<EditProduct/>}/>

            {/* Purchase */}
            <Route path={Routers.PURCHASE} element={<Purchase/>}/>
            <Route path={Routers.ADDPURCHASE} element={<AddPurchase/>}/>
            <Route path={Routers.PURCHASEDETAIL} element={<PurchaseDetail/>}/>
            <Route path={Routers.EDITPURCHASE} element={<EditPurchase/>}/>

            {/* Purchase Return */}
            <Route path={Routers.PURCHASERETURN} element={<PurchaseReturn/>}/>
            <Route path={Routers.ADDPURCHASERETURN} element={<AddPurchaseReturn/>}/>
            <Route path={Routers.PURCHASERETURNDETAIL} element={<PurchaseReturnDetail/>}/>

            {/* Sales */}
            <Route path={Routers.SALES} element={<Sales/>}/>
            <Route path={Routers.ADDSALES} element={<AddSales/>}/>
            <Route path={Routers.SALESDETAIL} element={<SalesDetail/>}/>
            <Route path={Routers.EDITSALES} element={<EditSales/>}/>

             {/* Sales Return */}
             <Route path={Routers.SALESRETURN} element={<SalesReturn/>}/>
            <Route path={Routers.ADDSALESRETURN} element={<AddSalesReturn/>}/>
            <Route path={Routers.SALESRETURNDETAIL} element={<SalesReturnDetail/>}/>

            {/* Feedback */}
            <Route path={Routers.VIEWFEEDBACK} element={<Feedback/>} />

        </Routes>
      {/* <Footer /> */}

    </>
  );
}

export default App;
