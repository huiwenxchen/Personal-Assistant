import Home from './Home'
import Navbar from './NavBar'


const App = () => ( 
  < ThemeProvider theme={ theme }>
    <div>
      <BrowserRouter basename="personal-assistant">
        <Navbar />
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>  
    
      
  
  </ThemeProvider>

)

export default App
