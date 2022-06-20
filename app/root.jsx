import { Outlet, LiveReload, Link } from "@remix-run/react"
export default function App(){
  <Document>
    <Layout><Outlet/></Layout>

    
  </Document>
  
}

function Document({childeren, title}){
  
  return (
    <html lang="en">
      <head>
        <title>My Remix Blog</title>
      </head>
      <body>
        {childeren}
        {process.env.NODE_ENV ==='developement'?<LiveReload/> :null}
      </body>
    </html>
  )
}

function Layout({childeren}) {
  return(
    <>
    <nav className="navbar">
    <Link to='/' className='logo'>
      Remix
    </Link>
    <ul className="nav">
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
    </ul>
  </nav>
  <div className="container">{childeren}</div>
</>
    
  )
}