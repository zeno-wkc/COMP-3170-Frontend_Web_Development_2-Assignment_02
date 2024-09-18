export default function Layout({ children }){
  return (
    <div className="layout__container">
      <header><h1>Best-selling music artists</h1></header>
      <main>{ children }</main>
      <footer></footer>
  </div>
  )
}