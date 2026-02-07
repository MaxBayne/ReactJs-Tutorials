//Import Routers
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'

//Import Styles
import './styles/App.css'

//Import Context Provider (Shared Data Cross Components)
import ThemeProvider from './contexts/ThemeProvider.jsx'
import UserProvider from './contexts/UserProvider.jsx'

//Import Components 
import HomeComponent from './components/HomeComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import SideMenusComponent from './components/SideMenusComponent.jsx';
import CssComponent from './components/CssComponent.jsx';
import JavaScriptComponent from './components/JavaScriptComponent.jsx';
import ProductsListComponent from './components/ProductsListComponent.jsx'
import ProductDetailComponent from './components/ProductDetailComponent.jsx'
import NewProductComponent from './components/NewProductComponent.jsx'
import RemoveProductComponent from './components/RemoveProductComponent.jsx'
import UseStateHookComponent from './components/UseStateHookComponent.jsx';
import UseStateHookWithFormsComponent from './components/UseStateHookWithFormsComponent.jsx'
import UseStateHookWithArraysComponent from './components/UseStateHookWithArraysComponent.jsx'
import RequestLoanFormComponent from './components/RequestLoanFormComponent.jsx'
import UseContextHookComponent from './components/UseContextHookComponent.jsx'
import NotFoundComponent from './components/NotFoundComponent.jsx'






export default function App()
{
  return (

    <BrowserRouter>

      <ThemeProvider>
        <UserProvider>
        

        <div className="App">

          <div className='App-Header'>
            <HeaderComponent/>
          </div>
          

          <div className="App-content">

            <Routes>
              <Route path='/' element={<HomeComponent/>}/>
              <Route path='/css' element={<CssComponent/>}/>
              <Route path='/javascript' element={<JavaScriptComponent/>}/>

              <Route path='/products'>
                <Route index element={<ProductsListComponent/>}/> 
                <Route path=':id' element={<ProductDetailComponent/>}/>
                <Route path='new' element={<NewProductComponent/>}/>  
                <Route path='remove' element={<RemoveProductComponent/>}/>  
                
              </Route>

              <Route path='/useState'>
                <Route index element={<UseStateHookComponent/>}/>
                <Route path='arrays' element={<UseStateHookWithArraysComponent/>}/>
                <Route path='forms' element={<UseStateHookWithFormsComponent/>}/>
                <Route path='loanForm' element={<RequestLoanFormComponent/>}/>
              </Route>
              
              <Route path='/useContext' element={<UseContextHookComponent/>}/>
              <Route path='*' element={<NotFoundComponent/>} />

            </Routes>

          </div>

          <div className="App-SideMenu">
            {/* <SideMenusComponent/> */}

            <Link to="/"> Home </Link>
            <Link to="/css"> Css </Link>
            <Link to="/javascript"> Javascript </Link>
            <Link to="/products"> Products </Link>
            <Link to="/useState"> UseState </Link>
            <Link to="/useState/arrays"> UseState With Arrays </Link>
            <Link to="/useState/forms"> UseState With Forms </Link>
            <Link to="/useState/loanForm"> UseState With Forms (Loan) </Link>
            <Link to="/useContext"> UseContext </Link>

          </div>
      
        </div>

        </UserProvider>
      </ThemeProvider>

    </BrowserRouter>
  )
}

 
