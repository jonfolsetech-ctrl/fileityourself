import Link from 'next/link';

export default function StartHere() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/pick-your-problem">Pick Your Legal Problem</Link> |{' '}
        <Link href="/faq">FAQ</Link> |{' '}
        <Link href="/disclaimer">Legal Disclaimer</Link>
      </nav>

      <h1>What Is a Motion?</h1>
      <p>
        A motion is a written request to a judge asking them to make a decision 
        or take action in your case. Motions are a fundamental part of the legal 
        process and can address various issues that arise during litigation.
      </p>

      <h2>Types of Motions</h2>
      <div className="card">
        <h3>Common Motions in Family Law</h3>
        <ul style={{ marginLeft: '20px', marginTop: '12px' }}>
          <li><strong>Motion to Modify Child Custody:</strong> Request changes to custody arrangements</li>
          <li><strong>Motion to Modify Child Support:</strong> Request changes to support payments</li>
          <li><strong>Motion for Contempt:</strong> Ask the court to enforce an existing order</li>
          <li><strong>Motion for Visitation:</strong> Request or modify visitation schedules</li>
          <li><strong>Motion for Temporary Relief:</strong> Request urgent temporary orders</li>
        </ul>
      </div>

      <h2>Basic Components of a Motion</h2>
      <div className="highlight">
        <p><strong>Every motion typically includes:</strong></p>
        <ol style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>Caption (case information)</li>
          <li>Title of the motion</li>
          <li>Body explaining what you're asking for and why</li>
          <li>Prayer for relief (specific requests)</li>
          <li>Your signature and date</li>
        </ol>
      </div>

      <h2>How to File a Motion</h2>
      <p>
        Filing a motion involves several steps:
      </p>
      <ol style={{ marginLeft: '20px' }}>
        <li>Draft your motion using proper legal format</li>
        <li>Make copies (one for the court, one for yourself, one for the other party)</li>
        <li>File the original with the clerk of court</li>
        <li>Serve a copy on the other party</li>
        <li>Attend the scheduled hearing</li>
      </ol>

      <div className="card" style={{ marginTop: '32px' }}>
        <h3>Need More Help?</h3>
        <p>
          Our comprehensive workbook provides detailed templates and step-by-step 
          instructions for filing motions in Louisiana courts.
        </p>
        <Link href="/pricing" className="button">
          Access Full Workbook
        </Link>
      </div>
    </main>
  );
}
