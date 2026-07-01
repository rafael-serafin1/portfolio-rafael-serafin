import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="mono">Rafael Engel Serafin © {year}</p>
        <p className="mono footer__built">construído com React, Vite &amp; SCSS</p>
      </div>
    </footer>
  )
}
