import { Outlet, LiveReload, Link, Links } from "@remix-run/react"
import globalStylesUrl from '~/styles/global.css'
import { render } from "react-dom";

export const links=()=>[{rel:'stylesheet', href:globalStylesUrl}]

export default function App(){
  return(<Document>
    <Layout>
    <Outlet/>
    </Layout>

    
  </Document>)
  
  
}

function Document({children, title}){

  return (
    <html lang="en">
      <head>
        <Links/>
        
        <title>My Remix Blog</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV ==='developement'?<LiveReload/> :null}
      </body>
    </html>
  );
}

function Layout({children}) {
  return(
    <>
    <nav className='navbar'>
    <Link to='/' className="logo">Remix</Link>
    <ul className="nav">
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
    </ul>
  </nav>
  <div className="container">{children}</div>

  </>  
  );
}