import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>You Can File Your Own Court Motion</h1>
      <p>Plain-language guidance for self-representation in Louisiana.</p>
      
      <nav>
        <Link href="/start-here">Start Here</Link> |{' '}
        <Link href="/pick-your-problem">Pick Your Legal Problem</Link> |{' '}
        <Link href="/faq">FAQ</Link> |{' '}
        <Link href="/disclaimer">Legal Disclaimer</Link>
      </nav>

      <div style={{ marginTop: '32px' }}>
        <h2>Welcome to FileItYourself</h2>
        <p>
          Navigate complex legal procedures with confidence. Our comprehensive workbook 
          provides step-by-step guidance for Louisiana DIY divorce and custody motions.
        </p>
        
        <div className="card">
          <h3>What You'll Get:</h3>
          <ul style={{ marginLeft: '20px', marginTop: '12px' }}>
            <li>Step-by-step filing instructions</li>
            <li>Sample court documents and templates</li>
            <li>Plain-language legal explanations</li>
            <li>Louisiana-specific procedures</li>
          </ul>
        </div>

        <div style={{ marginTop: '24px' }}>
          <Link href="/pricing" className="button">
            Get Instant Access
          </Link>
        </div>
      </div>
    </main>
  );
}